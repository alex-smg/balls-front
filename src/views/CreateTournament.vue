<template>
    <div id="createTournament">
        <div class="background"></div>
        <form @submit.prevent="sendFile" id="formPerson" enctype="multipart/form-data">
            <div>
                <h3>Créer un nouveau tournois</h3>
            </div>
            <div v-show="step === 1" class="stepOne">
                <File @add-file="addFile"/>
                <div class="container">
                    <div class="container-left">
                        <div class="formGroup name">
                            <label for="name">
                                Nom
                                <input class="inputText" type="text" v-model="data.name" id="name" name="name">
                            </label>
                        </div>
                        <input-texta
                            v-bind:title="data.description"
                            v-on:update:title="data.description = $event"
                            label="Description"
                            name="description"
                            id="description"
                        />
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
                                    <input class="inputText" type="text"  @keydown="inputChange" v-model="searchRegion" id="addressRegion" name="addressRegion">
                                    <div class="suggestions" v-show="suggestions.length > 0">
                                        <ul v-show="suggestions.length > 0">
                                            <li v-for="result in suggestions" :key="result.id" >
                                                <button @click.prevent="selectValue(result.nom, result.code)">{{ result.nom }}</button>
                                            </li>
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
                        <datetime  type="datetime" :v-model="JSON.stringify(data.date_begin)"></datetime>
                    </label>
                    <label for="date_end">
                        Date de fin du tournois
                        <datetime  type="datetime" :v-model="JSON.stringify(data.date_end)"></datetime>
                    </label>
                </div>
                <div class="formGroup formFlex">
                    <label for="date_end_inscription">
                        Date de fin des inscriptions
                        <datetime  type="datetime" :v-model="JSON.stringify(data.date_end_inscription)"></datetime>
                    </label>
                    <label for="publish">
                        Publié
                        <input type="checkbox" id="publish" value=true v-model="data.publish" class="tgl tgl-light" name="publish">
                        <span class="tgl-btn"></span>
                    </label>
                </div>
            </div>


            <div v-show="step === 3" class="stepThree">
                <div class="formGroup">
                    <div class="noFlex">
                        <h4>Genre</h4>
                        <div>
                            <div class="btnRadio">
                                <input type="radio" id="male" name="gender" v-model="data.gender" value="Masculin">
                                <label for="male">Masculin</label>
                            </div>
                            <div class="btnRadio">
                                <input type="radio" id="female" name="gender" v-model="data.gender" value="Feminin">
                                <label for="female">Feminin</label>
                            </div>
                            <div class="btnRadio">
                                <input type="radio" id="mixte" name="gender" v-model="data.gender" value="Mixte">
                                <label for="mixte">Mixte</label>
                            </div>
                        </div>
                        <div class="number">
                            <label for="widthTeam">
                                Nombre de joueurs par équipe
                                <input class="inputText" type="number" v-model="data.widthTeam" id="widthTeam" name="widthTeam">
                            </label>
                            <label for="numberTeam">
                                Nombre d'équipe
                                <input class="inputText" type="number" v-model="data.numberTeam" id="numberTeam" name="numberTeam">
                            </label>
                            <label for="typeOfHen">
                                Nombre de poule
                                <input class="inputText" type="number" v-model="data.typeOfHen" id="typeOfHen" name="typeOfHen">
                            </label>
                        </div>

                    </div>


                    <div class="noFlex">
                        <h4>Niveau</h4>
                        <div class="levelCheckbox">
                            <div class="checkbox">
                                <input type="checkbox" v-model="data.level" value="loisir" id="loisir" name="loisir">
                                <span class="checkmark"></span>
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
                    </div>

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
    import File from '../components/fields/File';
    import InputTexta from '../components/fields/Textarea';
    import { Datetime } from 'vue-datetime'
    // You need a specific loader for CSS files
    import 'vue-datetime/dist/vue-datetime.css'

    export default {
        name: "createTournament",
        components: {
            Datetime,
            File,
            InputTexta
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
                    typeOfHen: 0,
                    lattitude: 0,
                    longitude: 0,
                    publish: false,
                    image: '',
                    creator: localStorage.idPerson
                },
                regions: [],
                suggestions: [],
                searchRegion:'',
                file:'',
                viewReg: false,
                nameFile: '',
                step: 1
            }
        },

        mounted() {
            if (!localStorage.isToken) {
                this.$router.push('/login')
            }
            this.getRegions();
        },

        methods: {
            addFile: function (file) {
                this.file = file;
                console.log(this.file)
            },
            nextStep: function() {
                this.step = this.step + 1;
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
                this.viewReg = true;
                console.log(this.data.level);
                if(this.searchRegion.length > 1) {
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
                this.suggestions= [];
                console.log(nom);
                this.viewReg = false;
                this.searchRegion = nom;
                this.data.addressRegion = nom;
                this.data.codeRegion = codeRegion;
            },

            async sendFile() {
                const formData = new FormData();
                formData.append('file', this.file);
                formData.append('folder', 'tournament');
                try {
                    const response = await this.$http.post(process.env.VUE_APP_API + '/file', formData);
                    this.data.image = response.data;
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
                    const response = await this.$http.post(process.env.VUE_APP_API + '/tournament', this.data);
                    console.log(response);
                    response.status === 200 ? this.$router.push('/') : alert('probleme');

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
            color: #FFC929;
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
            .suggestions {
                position: relative;
                ul {
                    position: absolute;
                    list-style: none;
                    width: min-content;
                    background-color: #ffffff;
                    overflow-x: hidden;
                    border-left: 2px solid #FFCA28;
                    border-right: 2px solid #FFCA28;
                    border-bottom: 2px solid #FFCA28;
                    ::-webkit-scrollbar-track {
                        box-shadow: inset 0 0 5px grey;
                        border-radius: 10px;
                    }
                    li {
                        white-space: nowrap;
                        button {
                            background-color: #ffffff;
                            padding: 5px 30px;
                            border: none;
                            font-weight: 600;
                            margin: 3px 0 3px 0;
                        }
                    }

                }
            }
            #addressRegion:focus + .suggestions {
                display: block;
            }

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
                        width: 100%;
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
                .noFlex {
                    width: 45%;
                    display: block;
                    h4 {
                        margin-bottom: 10px;
                    }
                    .btnRadio{
                        display: flex;
                        label {
                            margin: 5px 0;
                            width: min-content;
                        }
                        input {
                            margin: auto 10px auto 0;
                        }
                    }
                    .checkbox {
                        display: flex;
                        margin: 5px 0 5px 0;
                        label {
                            margin: 0 0 0 10px;
                        }
                    }
                    .number {
                        width: 80%;
                        margin-top: 10%;
                        label {
                            display: flex;
                            justify-content: space-between;
                            margin: 10px 0 10px 0;
                        }
                        input {
                            width: 20%;
                        }
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
                .selectFile {
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
