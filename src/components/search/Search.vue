<template>
    <div id="search">
        <div class="containerSearch">
            <div class="searchBtn">
                <input type="text" v-model="search" placeholder="ex: Ile-de-France" @keydown="inputChange">
                <button class="btn-primary" @click="submitSearch">Rechercher</button>
            </div>

            <div class="suggestions">
                <ul>
                    <li v-for="result in suggestions"><button @click="selectValue(result.nom, result.code, result.codeRegion)">{{ result.nom }}</button></li>
                </ul>
            </div>

        </div>

    </div>


</template>

<script>
    import axios from 'axios'
    export default {
        name: "Search",
        data() {
            return {
                search: '',
                regions: [],
                departements: [],
                suggestions : [],
                codeDep: 0,
                codeReg: 0,
                finalSearch: {
                    name: '',
                    code: '',
                    codeRegion: '',
                    activeReg: false,
                },

            }
        },
        methods: {
            submitSearch() {
                this.$router.push({ name: 'resultTournament', params: this.finalSearch })
            },
            getDepartements: async function () {
                try {
                    const response = await axios.get('https://geo.api.gouv.fr/departements?fields=nom,code,codeRegion');
                    this.departements = response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            getRegions: async function () {
                try {
                    const response = await axios.get('https://geo.api.gouv.fr/regions?fields=nom,code');
                    this.regions = response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            inputChange () {
                // your search method
                if(this.search.length > 1) {
                    this.suggestions = [];

                    let depReg = this.departements.concat(this.regions);
                    depReg.filter(item => {
                        if (item.nom.toLowerCase().replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e").includes(this.search.toLowerCase().replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e"))) {
                            this.suggestions.push(item)
                        }
                    });
                } else {
                    this.suggestions = [];
                }
                // now `items` will be showed in the suggestion list
            },
            selectValue (nom, code, codeRegion) {
                this.search = nom;
                this.finalSearch.name = nom;
                this.finalSearch.code = code;
                if (!codeRegion) {
                    this.finalSearch.activeReg = true;
                    this.finalSearch.codeRegion = codeRegion;
                } else {
                    this.finalSearch.activeReg = false;
                }
            }
        },
        mounted() {
           this.getDepartements();
           this.getRegions();
        }
    }
</script>

<style lang="scss">
    #search {
        display: flex;
        width: 50%;
        margin: auto;
        .containerSearch {
            margin: auto;
            width: 100%;
            .suggestions{
                position: relative;
            }
            .searchBtn {
                display: flex;
                justify-content: space-between;
                input {
                    background: #FFFFFF;

                    border-radius: 10px;
                    border: 1px solid #8C8C8C;
                    padding: 10px 12px;
                    width: 70%;
                    font-size: 16px;
                }
            }
            ul {
                margin-bottom: 3%;
                margin-top: 3%;
                width: 75%;
                display: flex;
                flex-wrap: wrap;
                position: absolute;
                li {
                    list-style: none;
                    text-align: left;
                    margin-right: 10px;
                    margin-bottom: 15px;
                    button {
                        border: none;
                        background-color: #FFC53E;
                        padding: 6px 15px;
                        border-radius: 1em;
                        color: #FFFFFF;
                        font-weight: 700;
                        font-size: 14px;
                    }
                }
            }
        }
    }

</style>
