<template>
    <div id="resultTournament">
        <Map :markers="markers"></Map>
        <h3>{{this.dataSearch}}</h3>
        <ul>
            <li v-for="tournament in result"> {{ tournament.name }} </li>
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
                    const response = await axios.get(process.env.API + `/tournament/search/${code}`, {
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
        width: 100%;
        margin: auto;
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
