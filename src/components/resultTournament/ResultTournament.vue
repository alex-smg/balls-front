<template>
    <div id="resultTournament">
        <h3>Résultats de votre recherche : {{this.dataSearch}}</h3>
        <div class="containerMap">
            <Map :markers="markers"></Map>
        </div>
        <ul class="containerCard">
            <li v-for="tournament in result" :key="tournament.id">
                <div>
                    <img :src="tournament.image">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

    import axios from 'axios';
    import Map from '../map/Map.vue';

    export default {
        name: "resultTournament",
        components:{
            Map
        },
        data() {
            return {
                dataSearch: '',
                result: [],
                markers: []
            }
        },
        methods: {
            search: async function (code, activeReg) {
                try {
                    console.log('test')
                    const response = await axios.get(process.env.VUE_APP_API + `/tournament/search/${code}`, {
                        params: {
                            activeReg: activeReg,
                        },
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    this.result = response.data;
                    console.log(response);
                    response.data.forEach(el => {
                        if (el.lattitude && el.longitude) {
                            let position = {
                                position: {
                                    lat: el.lattitude,
                                    lng: el.longitude
                                }
                            };
                            this.markers.push(position);
                        }
                    })
                } catch (error) {
                    console.error(error);
                }
            },
        },
        mounted() {
            if (this.$route.params) {
                this.dataSearch = this.$route.params.name;
                this.search(this.$route.params.code, this.$route.params.activeReg );
            } else {
                this.$router.push('home');
            }

        }
    }
</script>

<style lang="scss" scoped>
    #resultTournament {
        width: 80%;
        margin: auto;
        .containerMap {
            height: 50vh;
            width: 100%;
            margin: auto;
            border-radius: 3em;
            overflow: hidden;
        }
        .containerSearch {
            margin: auto;
            width: 100%;
            div {
                display: flex;
                input {
                    margin: auto;
                    padding: 5px 10px;
                    width: 100%;
                }
                button {
                    width: 20%;
                }
            }
            ul {
                li {
                    list-style: none;
                }
            }
        }
    }

</style>
