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
        <section>
            <div>
                <Map :markers="markers"></Map>
            </div>
            <div>
                <div>
                    <img src="">
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
        <section>
            <div class="undSection">
                <h4>Description</h4>
                <hr>
                <p>{{data.description}}</p>
            </div>
            <div class="undSection">
                <h4>Details</h4>
                <hr>
                <div>
                    <div>
                        <div>
                            <img src="../assets/team.svg">
                        </div>
                        <p>Equipe de {{data.widthTeam}}</p>
                    </div>
                    <div>
                        <div>
                            <img src="../assets/gender.svg">
                        </div>
                        <p>{{data.gender}}</p>
                    </div>
                    <div>
                        <div>
                            <img src="../assets/jauge.svg">
                        </div>
                        <p>{{data.level}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <p>il reste de la place pour 15 équipes</p>
                <div>
                    <button class="btn-secondary"></button>
                    <button class="btn-primary"></button>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    import axios from 'axios';
    import Map from '../components/map/Map';

    export default {
        name: 'tournament',
        components: {
            Map
        },
        data() {
            return{
                data: [],
                baseUrl: process.env.VUE_APP_API,
                markers: [],
            }
        },
        mounted(){
            console.log(this.$route.params);
            this.getData(this.$route.params.id);
        },
        methods: {
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
                    console.log(position)
                    this.markers.push(position);
                    console.log(response);
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
                h4 {
                    text-align: center;
                }
                hr {
                    margin-bottom: 20px;
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
