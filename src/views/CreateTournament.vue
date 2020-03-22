<template>
    <div id="createTournament">
        <form @submit.prevent="CreateTournament" id="formPerson" enctype="multipart/form-data">

            <div v-show="step === 1" class="stepOne">
                <div class="formGroup">
                    <div class="formGroup">
                        <label for="image">
                            Image
                            <input class="inputFile" ref="file" type="file" id="image" name="image" @change="onSelect">
                        </label>
                    </div>
                    <label for="name">
                        Nom
                        <input class="inputText" type="text" v-model="data.name" id="name" name="name">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="description">
                        Description
                        <textarea class="inputText" type="text" v-model="data.description" id="description" name="description"></textarea>
                    </label>
                </div>
                <div class="formGroup">
                    <label for="streetAddress">
                        Adresse
                        <input class="inputText" type="text" v-model="data.streetAddress" id="streetAddress" name="streetAddress">
                    </label>
                    <label for="postalCode">
                        Code Postal
                        <input class="inputText" type="text" v-model="data.postalCode" id="postalCode" name="postalCode">
                    </label>
                    <div>
                        <label for="addressRegion">
                            Région
                            <input class="inputText" type="text"  @keydown="inputChange" v-model="data.searchRegion" id="addressRegion" name="addressRegion">
                            <div class="suggestions">
                                <ul>
                                    <li v-for="result in suggestions"><button @click.prevent="selectValue(result.nom, result.code)">{{ result.nom }}</button></li>
                                </ul>
                            </div>
                        </label>
                        <label for="addressLocality">
                            Ville
                            <input class="inputText" type="text" v-model="data.addressLocality" id="addressLocality" name="addressLocality">
                        </label>
                    </div>
                </div>
            </div>
            <div v-show="step === 2" class="stepTwo">
                <div class="formGroup">
                    <label for="date_begin">
                        Date de début du tournois
                        <input class="inputText" type="datetime-local" v-model="data.date_begin" id="date_begin" name="date_begin">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="date_end">
                        Date de début du tournois
                        <input class="inputText" type="datetime-local" v-model="data.date_end" id="date_end" name="date_end">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="date_end_inscription">
                        Date de fin des inscriptions
                        <input class="inputText" type="datetime-local" v-model="data.date_end_inscription" id="date_end_inscription" name="date_end_inscription">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="publish">
                        Publié
                        <input type="checkbox" id="publish" name="publish">
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

                <div class="formGroup">
                    <button  class="submitBtn" type="submit">Enregistrer</button>
                </div>
            </div>
            <div class="formGroup">
                <button v-show="step < 1" :disabled="step < 2" @click="prevStep">Précédent</button>
                <button v-show="step < 3" :disabled="step > 2" @click="nextStep">Suivant</button>
            </div>
        </form>

    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "createTournament",
        components: {},
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
            nextStep: function() {
                this.step = this.step + 1
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

            async CreateTournament() {
                try {
                    const response = await this.$http.post('https://maps.googleapis.com/maps/api/geocode/json?address='+this.data.streetAddress.replace(/ /g, '') + '+'+ this.data.postalCode.replace(/ /g, '') +'+'+ this.data.addressLocality.replace(/ /g, '') +'+'+ this.data.addressRegion.replace(/ /g, '') +'&key=AIzaSyDavV_kx08t781jo6aZsNC5p9seLH01euQ')
                    this.data.lattitude = response.data.results[0].geometry.location.lat;
                    this.data.longitude = response.data.results[0].geometry.location.lng;
                } catch(err) {
                    console.log(err)
                }

                if (this.data.lattitude && this.data.longitude) {
                    let levelsChose = this.data.level.join(' / ');
                    const formData = new FormData();
                    formData.append('name', this.data.name);
                    formData.append('description', this.data.description);
                    formData.append('addressLocality', this.data.addressLocality);
                    formData.append('addressRegion', this.data.addressRegion);
                    formData.append('postalCode', this.data.postalCode);
                    formData.append('streetAddress', this.data.streetAddress);
                    formData.append('codeRegion', this.data.codeRegion);
                    formData.append('lattitude', this.data.lattitude);
                    formData.append('longitude', this.data.longitude);
                    formData.append('date_begin', this.data.date_begin);
                    formData.append('date_end', this.data.date_end);
                    formData.append('date_end_inscription', this.data.date_end_inscription);
                    formData.append('file', this.data.file);
                    formData.append('widthTeam', this.data.widthTeam);
                    formData.append('numberTeam', this.data.numberTeam);
                    formData.append('level', levelsChose);
                    formData.append('typeOfHen', this.data.typeOfHen);
                    formData.append('publish', this.data.publish);
                    try {
                        await this.$http.post('http://localhost:3000/tournament', formData);
                        console.log(this.data.image);
                    } catch(err) {
                        console.log(err)
                    }
                }
            },
            uploadFile(event) {
                console.log(event)
            }
        }

    }
</script>

<style lang="scss" scoped>
    #createTournament {
        form {
            display: block;
            margin: 10% auto 0 auto;
            width: 20%;

            .formGroup {
                margin-top: 10%;
                .checkbox {
                    display: flex;
                    text-align: left;
                    input {
                        margin: 0 20px 0 0px;
                    }
                }
                input {
                    display: block;
                    margin: 5% auto 0 auto;
                }

                .submitBtn {
                    margin: 10% auto 0 auto;
                    font-size: 1vw;
                }

                .inputText {
                    width: 100%;
                    padding: 2% 4%;
                }
            }
        }
    }
</style>
