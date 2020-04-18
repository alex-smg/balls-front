<template>
    <div id="createTournament">
        <div class="background"></div>
        <form @submit.prevent="sendFile" id="formPerson" enctype="multipart/form-data">
            <div>
                <h3>Créer un nouveau tournois</h3>
            </div>
            <div v-show="step === 1" class="stepOne">
                <div class="formGroup">
                    <label for="image">
                        Image
                        <button class="btn-secondary selectFile" @click.prevent="getFile">Selectionner un ficher</button>
                        <input class="inputFile" ref="file" type="file" id="image" name="image" @change="onSelect">
                    </label>
                </div>
                <div class="container">
                    <div class="container-left">
                        <div class="formGroup name">
                            <label for="name">
                                Nom
                                <input class="inputText" type="text" v-model="data.name" id="name" name="name">
                            </label>
                        </div>
                        <div class="formGroup description">
                            <label for="description">
                                Description
                                <textarea class="inputText" type="text" v-model="data.description" id="description" name="description"></textarea>
                            </label>
                        </div>
                    </div>
                    <div class="container-right">
                        <div class="formGroup">
                            <label for="streetAddress">
                                Adresse
                                <input class="inputText" type="text" v-model="data.streetAddress" id="streetAddress" name="streetAddress">
                            </label>
                        </div>
                        <div class="formGroup postalCode">
                            <label for="postalCode">
                                Code Postal
                                <input class="inputText" type="text" v-model="data.postalCode" id="postalCode" name="postalCode">
                            </label>
                        </div>
                        <div class="formGroup">
                            <div class="flexreg">
                                <label for="addressLocality">
                                    Ville
                                    <input class="inputText" type="text" v-model="data.addressLocality" id="addressLocality" name="addressLocality">
                                </label>
                                <label for="addressRegion">
                                    Région
                                    <input class="inputText" type="text"  @keydown="inputChange" v-model="data.searchRegion" id="addressRegion" name="addressRegion">
                                    <div class="suggestions">
                                        <ul>
                                            <li v-for="result in suggestions"><button @click.prevent="selectValue(result.nom, result.code)">{{ result.nom }}</button></li>
                                        </ul>
                                    </div>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div v-show="step === 2" class="stepTwo">
                <div class="formGroup formFlex">
                    <label for="date_begin">
                        Date de début du tournois
                        <datetime  type="datetime" hour-step=1 minute-step=1 v-model="data.date_begin"></datetime>
                    </label>
                    <label for="date_end">
                        Date de début du tournois
                        <datetime  type="datetime" hour-step=1 minute-step=1 v-model="data.date_end"></datetime>
                    </label>
                </div>
                <div class="formGroup formFlex">
                    <label for="date_end_inscription">
                        Date de fin des inscriptions
                        <datetime  type="datetime" hour-step=1 minute-step=1 v-model="data.date_end_inscription"></datetime>
                    </label>
                    <label for="publish">
                        Publié
                        <input type="checkbox" id="publish"  class="tgl tgl-light" name="publish">
                        <span class="tgl-btn"></span>
                    </label>
                </div>
            </div>


            <div v-show="step === 3" class="stepThree">
                <div class="formGroup">
                    <h4>Genre</h4>
                    <input type="radio" id="male" name="gender" v-model="data.gender" value="Masculin">
                    <label for="male">Masculin</label><br>
                    <input type="radio" id="female" name="gender" v-model="data.gender" value="Feminin">
                    <label for="female">Feminin</label><br>
                    <input type="radio" id="mixte" name="gender" v-model="data.gender" value="Mixte">
                    <label for="mixte">Mixte</label>
                </div>
                <div class="formGroup">
                        <h4>Niveau</h4>
                    <div class="checkbox">
                        <input type="checkbox" v-model="data.level" value="loisir" id="loisir" name="loisir">
                        <label>
                           Loisir
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="dep" id="dep" name="dep">
                        <label for="dep">
                            Départemental
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="regional" name="reg">
                        <label for="reg">
                            Régional
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="Pré-national" id="preNat" name="preNat">
                        <label for="preNat">
                            Pré-National
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="National 3" id="N3" name="N3">
                        <label for="N3">
                            National 3
                        </label>
                    </div>
                        <div class="checkbox">
                            <input type="checkbox" v-model="data.level" value="National 2" id="N2" name="N2">
                            <label for="N2">
                                National 2
                            </label>
                        </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="National 1" id="N1" name="N1">
                        <label for="N1">
                            National 1
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox"  v-model="data.level" value="Pro B" id="proB" name="proB">
                        <label for="proB">
                            Pro B
                        </label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" v-model="data.level" value="Pro A" id="proA" name="proA">
                        <label for="proA">
                            Pro A
                        </label>
                    </div>
                </div>
                <div class="formGroup">
                    <label for="widthTeam">
                        Nombre de joueurs par équipe
                        <input class="inputText" type="number" v-model="data.widthTeam" id="widthTeam" name="widthTeam">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="numberTeam">
                        Nombre d'équipe
                        <input class="inputText" type="number" v-model="data.numberTeam" id="numberTeam" name="numberTeam">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="typeOfHen">
                        Nombre de poule
                        <input class="inputText" type="text" v-model="data.typeOfHen" id="typeOfHen" name="typeOfHen">
                    </label>
                </div>
            </div>
            <div class="prevNext" :class="step === 1 ? 'flexEnd' : ''">
                <button class="btn-secondary"  v-show="step > 1"  @click.prevent="prevStep">Précédent</button>
                <button class="btn-secondary" v-show="step < 3" :disabled="step > 2" @click.prevent="nextStep">Suivant</button>
                <button v-show="step === 3" class="submitBtn btn-primary" type="submit">Enregistrer</button>
            </div>
        </form>

    </div>
</template>

<script>
    import axios from 'axios';
    import { Datetime } from 'vue-datetime'
    // You need a specific loader for CSS files
    import 'vue-datetime/dist/vue-datetime.css'

    export default {
        name: "createTournament",
        components: {
            Datetime
        },
        data() {
            return {
                data: {
                    name: '',
                    description: '',
                    addressLocality: '',
                    addressRegion: '',
                    postalCode: '',
                    streetAddress: '',
                    date_begin: new Date(0,0,0,0),
                    date_end: new Date(0,0,0,0),
                    gender: '',
                    date_end_inscription: new Date(0,0,0,0),
                    widthTeam: 0,
                    numberTeam: 0,
                    level: [],
                    typeOfHen: '',
                    lattitude: 0,
                    longitude: 0,
                    publish: false,
                    file: '',
                },
                regions: [],
                suggestions: [],
                searchRegion:'',
                step: 1
            }
        },

        mounted() {
            this.getRegions();
        },

        methods: {

            getFile: function () {
                let select_file = document.querySelector('#image');
                select_file.focus();
            },
            nextStep: function() {
                this.step = this.step + 1;
                console.log(this.step)
            },
            prevStep: function() {
                this.step = this.step - 1
            },
            getRegions: async function () {
                try {
                    const response = await axios.get('https://geo.api.gouv.fr/regions?fields=nom,code');
                    this.regions = response.data;
                    console.log(this.regions)
                } catch (error) {
                    console.error(error);
                }
            },

            inputChange () {
                console.log(this.data.level);
                if(this.regions.length > 1) {
                    console.log('test2');
                    this.suggestions = [];
                    this.regions.filter(item => {
                        if (item.nom.toLowerCase().replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e").includes(this.searchRegion.toLowerCase().replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e"))) {
                            this.suggestions.push(item)
                        }
                    });
                } else {
                    this.suggestions = [];
                }
                // now `items` will be showed in the suggestion list
            },
            selectValue (nom, codeRegion) {
                this.data.searchRegion = nom;
                this.data.addressRegion = nom;
                this.data.codeRegion = codeRegion;
            },

            onSelect() {
                const file = this.$refs.file.files[0];
                this.data.file = file;
            },

            async sendFile() {

                const formData = new FormData();
                formData.append('file', this.data.file);
                formData.append('folder', 'tournament');
                try {
                    await this.$http.post(process.env.VUE_APP_API + '/file', formData);
                    this.getPositionMap()

                } catch (err) {
                    console.log(err)
                }
            },
            getPositionMap: async function() {
                    try {
                        const response = await this.$http.post('https://maps.googleapis.com/maps/api/geocode/json?address=' + this.data.streetAddress.replace(/ /g, '') + '+' + this.data.postalCode.replace(/ /g, '') + '+' + this.data.addressLocality.replace(/ /g, '') + '+' + this.data.addressRegion.replace(/ /g, '') + '&key=AIzaSyDavV_kx08t781jo6aZsNC5p9seLH01euQ')
                        this.data.lattitude = response.data.results[0].geometry.location.lat;
                        this.data.longitude = response.data.results[0].geometry.location.lng;
                        if (this.data.lattitude && this.data.longitude) {
                           this.createTournament()
                        }
                    } catch (err) {
                        console.log(err)
                    }

            },
            createTournament: async function() {
                this.data.level = this.data.level.join(' / ');

                try {
                    await this.$http.post(process.env.VUE_APP_API + '/tournament', this.data);
                } catch (err) {
                    console.log(err)
                }

            }
        }

    }
</script>

<style lang="scss">
    #createTournament {

        .background {
            height: 50vh;
            position: absolute;
            bottom: 0;
            width: 100vw;
            background-color: #FFDF7E;
            z-index: 0;
        }
        h3 {
            color: #FFCA28;
        }
        form {
            display: block;
            margin: 5% auto 0 auto;
            width: 50%;
            border: 3px solid #FFDF7E;
            border-radius: 1em;
            padding: 2% 2%;
            background-color: #FFFFFF;
            z-index: 100;
            position: relative;

            .container {
                display: flex;
                justify-content: space-between;
                .container-left {
                    width: 48%;
                }
                .container-right {
                    width: 48%;
                    .flexreg {
                        display: flex;
                        justify-content: space-between;
                        label {
                            width: 48%;
                            input {
                                margin: 18px auto 0 auto;
                                padding: 8px 15px;
                            }
                        }
                    }
                }
            }

            .prevNext {
                display: flex;
                justify-content: space-between;
                margin-top: 3vh;
            }
            .flexEnd {
                justify-content: flex-end;
                align-items: flex-end;
            }

            .formFlex {
                label {
                    width: 30%;
                    margin-right: 10%;
                }
            }

            .formGroup {
                display: flex;
                .vdatetime {
                    margin-top: 18px;
                    width: 100%;
                }
                margin-top: 5%;
                .checkbox {
                    display: flex;
                    text-align: left;
                    input {
                        margin: 0 20px 0 0px;
                    }
                }
                input[type=text], textarea {
                    display: block;
                    margin: 18px auto 0 auto;
                }

                .submitBtn {
                    margin: 10% auto 0 auto;
                    font-size: 1vw;
                }

                .inputText {
                    width: 100%;
                    padding: 8px 15px;
                }
                #image {
                    position: absolute;
                    visibility: hidden;
                    top: 0; left: 0;
                    width: 225px;
                    opacity: 0;
                    padding: 14px 0;
                    cursor: pointer;
                }
                .selectFile {
                    margin-top: 2%;
                    display: block;
                }
            }
            .postalCode {
                width: 25%;
            }
            .name {
                height: auto;
            }
            .description {
                height: 60%;
                textarea {
                    height: 75%;
                }
            }
        }
    }
</style>
