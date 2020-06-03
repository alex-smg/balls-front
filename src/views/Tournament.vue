<template>
    <div id="tournament">
        <div class="containerImg">
            <div>
                <img :src="baseUrl +'/'+ data.image">
            </div>
        </div>
        <div class="nameAndDate">
            <h2>{{ data.name }}</h2>
            <h3>{{ data.date_begin }}</h3>
            <hr>
        </div>
        <section class="section-map">
            <div>
                <Map class="map" :markers="markers"></Map>
            </div>
            <div class="adress">
                <div>
                    <img src="../assets/pin.svg">
                </div>
                <p>
                    <span>{{data.streetAddress}}</span>
                    <br>
                    <span>{{data.postalCode}}</span>
                    <span>{{data.addressLocality}}</span>
                    <br>
                    <span>{{data.addressRegion}}</span>
                </p>
            </div>
        </section>
        <section class="section-description">
            <div class="undSection">
                <h4>Description</h4>
                <hr>
                <p>{{data.description}}</p>
            </div>
            <div class="undSection">
                <h4>Details</h4>
                <hr>
                <div class="container-details">
                    <div class="details">
                        <div>
                            <img src="../assets/team.svg">
                        </div>
                        <p>Equipe de {{data.widthTeam}}</p>
                    </div>
                    <div class="details">
                        <div>
                            <img src="../assets/gender.svg">
                        </div>
                        <p>{{data.gender}}</p>
                    </div>
                    <div class="details">
                        <div>
                            <img src="../assets/jauge.svg">
                        </div>
                        <p>{{data.level}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-btn">
            <div>
                <p>il reste de la place pour 15 équipes</p>
                <div>
                    <button class="btn-secondary" @click="openModal('modalTeam')">Créer une team</button>
                    <button class="btn-primary" @click="openModal('modalChoseTeam')">Inscrire une team</button>
                </div>
            </div>
        </section>
        <modal v-if="modal === true" @close-modal="closeModal" :id-tournament="data._id" :type="typeModal"/>
    </div>
</template>

<script>

    import axios from 'axios';
    import Map from '../components/map/Map';
    import Modal from '../components/modal/Modal';

    export default {
        name: 'tournament',
        components: {
            Map, Modal
        },
        data() {
            return{
                data: [],
                baseUrl: process.env.VUE_APP_API,
                markers: [],
                modal: false,
                typeModal: '',
            }
        },
        mounted(){
            console.log(this.$route.params);
            this.getData(this.$route.params.id);
        },
        methods: {
            openModal : function(typeModal) {
              this.modal = true;
              this.typeModal= typeModal;
              console.log(this.modal)
            },
            closeModal: function() {
                this.modal = false;
                this.typeModal = '';
                console.log('test')
            },
            getData: async function(id) {
                try {
                    const response = await axios.get(process.env.VUE_APP_API + '/tournament/' + id);
                    response.data.date_begin = new Date(response.data.date_begin).toLocaleDateString();
                    this.data = response.data;
                    let position = {
                        position : {
                        lat: response.data.lattitude,
                        lng: response.data.longitude
                    }};
                    console.log(response.data)
                    this.markers.push(position);
                    console.log(this.markers);
                }catch (e) {
                    console.log(e)
                }
            }

        }
    }
</script>

<style lang="scss" scoped>
    #tournament {
        width: 50%;
        margin: auto;
        hr {
            height: 3px;
            background-color: #FFCA28;
            border: none;
            margin: 8px 0px;
        }
        section {
            display: flex;
            justify-content: space-between;
            margin: 40px 0;

            .undSection {
                width: 45%;
                p {
                    width: 80%;
                    margin: auto;
                }
                .container-details{
                    width: 80%;
                    margin: auto;
                    .details {
                        display: flex;
                        margin-bottom: 20px;
                        img {
                            margin-right: 20px;
                        }
                    }
                }
                h4 {
                    text-align: center;
                }
                hr {
                    margin-bottom: 20px;
                }
            }
        }
        .section-map{
            justify-content: space-around;
            div {
                width: 40%;
                margin: auto;
                height: 15vh;
                .map {
                    width: 70%;
                    border-radius: 15px;
                    overflow: hidden;
                }
            }
            .adress {
                display: flex;
                div {
                    &:first-child {
                        width: 15%;
                        margin: auto 20px auto 0;
                        display: flex;
                        img {
                            width: 100%;
                            margin: auto;
                        }
                    }
                }
                p {
                    margin: auto 0;
                    span {
                        margin-right: 10px;
                        margin-bottom: 5px;
                    }
                }
            }

        }
        .section-btn {
            margin: 25px auto 50px auto;
            text-align: center;
            width: 100%;
            div{
                margin: auto;
                width: 50%;
                p {
                    margin-bottom: 20px;
                }
                div {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    button {

                    }
                }
            }
        }
        .containerImg {
            width: 50%;
            margin: auto;
            div {
                width: 13vw;
                height: 13vw;
                margin: auto;
                border: 4px solid #FFCA28;
                border-radius: 100%;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
        }

        .nameAndDate {
            text-align: center;
            h2 {
                margin: 10px 0px;
            }
            h3 {
                color: #FFCA28;
                margin-bottom: 5px;
            }
        }

    }

</style>
