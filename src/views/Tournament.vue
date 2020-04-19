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
                <Map></Map>
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
                <h4></h4>
                <hr>
                <p></p>
            </div>
            <div>
                <h4></h4>
                <hr>
                <div>
                    <div>
                        <div>
                            <img>
                        </div>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <img>
                        </div>
                        <p></p>
                    </div>
                    <div>
                        <div>
                            <img>
                        </div>
                        <p></p>
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
                    this.markers.push(response.data.lattitude, response.data.lattitude);
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
