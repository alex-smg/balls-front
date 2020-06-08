<template>
    <div id="resultTournament">
        <h3>Résultats de votre recherche : {{this.dataSearch}}</h3>
        <div class="containerMap">
            <google-map v-if="markers.length > 0 " :markers="markers"></google-map>
        </div>
        <ul class="containerCard">
            <li class="card" v-for="tournament in result" :key="tournament.id">
                <Card :tournament="tournament"></Card>
            </li>
        </ul>
    </div>
</template>

<script>

    import axios from 'axios';
    import GoogleMap from '../map/Map.vue';
    import Card from '../card/Card.vue';

    export default {
        name: "resultTournament",
        components:{
            GoogleMap,
            Card,
        },
        data() {
            return {
                dataSearch: '',
                result: [],
                markers: [],
                lastId: 0,
            }
        },
        methods: {
            search: async function (code, activeReg) {
                try {
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
                                id: this.lastId + 1,
                                position: {
                                    lat: el.lattitude,
                                    lng: el.longitude
                                }
                            };
                            this.markers.push(position);
                            this.lastId += 1;
                        }
                    })
                } catch (error) {
                    console.error(error);
                }
            },
        },
        mounted() {
            if (this.$route.params.name) {
                this.dataSearch = this.$route.params.name;
                this.search(this.$route.params.code, this.$route.params.activeReg);
                localStorage.setItem('lastSearchName', this.$route.params.name);
                localStorage.setItem('code', this.$route.params.code);
                localStorage.setItem('activeReg', this.$route.params.activeReg);
            }else if (localStorage.lastSearchName) {
                this.dataSearch = localStorage.lastSearchName;
                this.search(localStorage.code, localStorage.activeReg);
            } else {
                this.$router.push('/search');
            }

        }
    }
</script>

<style lang="scss" scoped>
    #resultTournament {
        width: 80%;
        margin: auto;

        h3{
            margin-top: 5%;
        }
        .containerMap {
            height: 50vh;
            width: 100%;
            margin: 2% auto 0 auto;
            border-radius: 3em;
            overflow: hidden;
        }

        .containerCard {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 5%;
            .card {
                display: inline-block;
                width: 25%;
                padding: 2% 2%;
            }
        }
    }

</style>
