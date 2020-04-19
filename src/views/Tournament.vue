<template>
    <div id="tournament">
        <div class="containerImg">
            <img :src="baseUrl +'/'+ data.image">
        </div>
        <div>
            <h2>{{ data.name }}</h2>
            <h3>{{ data.date_begin }}</h3>
            <hr>
        </div>
        <div>
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
        </div>
        <div>
            <div>
                <h4>Description</h4>
                <hr>
                <p>{{data.description}}</p>
            </div>
            <div>
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
            <div>
                <div>
                    <button class="btn-secondary"></button>
                    <button class="btn-primary"></button>
                </div>
            </div>

        </div>
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
        .containerImg {
            width: 50%;
            margin: auto;
            img {
                width: 100%;
            }
        }

    }

</style>
