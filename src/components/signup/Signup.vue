<template>
    <div id="signup">
        <form @submit.prevent="sendSignUp" id="formPerson" enctype="multipart/form-data">
            <div class="formGroup">
                <label for="email">
                    Email
                    <input class="inputText" type="text" v-model="data.email" name="email">
                </label>
            </div>
            <div class="formGroup">
                <label for="password">
                    Mot de passe
                    <input class="inputText" type="password" v-model="data.password" name="password">
                </label>
            </div>
            <div class="formGroup">
                <label for="lastname">
                    Nom
                    <input class="inputText" type="text" v-model="data.lastname" name="lastname">
                </label>
            </div>
            <div class="formGroup">
                <label for="firstname">
                    Prénom
                    <input class="inputText" type="text" v-model="data.firstname" name="firstname">
                </label>
            </div>
            <div class="formGroup">
                <label for="postPlayer">
                    Genre
                    <select class="inputSelect"  v-model="data.genre" name="genre">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </label>
            </div>
            <div class="formGroup">
                <label for="birth">
                    Date de naissance
                    <input class="inputText" type="date" v-model="data.birth" name="birth">
                </label>
            </div>

            <div class="formGroup">
                <label for="image">
                    Photo
                    <input class="inputFile" ref="file" type="file" name="image" @change="onSelect">
                </label>
            </div>
            <div class="formGroup">
                <label for="height">
                    Taille
                    <input class="inputRange" type="range" min="0" max="250" v-model="data.height" name="height">
                    <p>{{ data.height / 100 }} m</p>
                </label>
            </div>
            <div class="formGroup">
                <label for="postPlayer">
                    Poste
                    <select class="inputSelect"  v-model="data.postPlayer" name="postPlayer">
                        <option value="R4">Receptionneur Attaquant</option>
                        <option value="central">Central</option>
                        <option value="pointu">Pointu</option>
                        <option value="passeur">Passeur</option>
                        <option value="libero">Libéro</option>
                    </select>
                </label>
            </div>
            <div class="formGroup">
                <label for="level">
                    Niveau
                    <select class="inputSelect"  v-model="data.level" name="level">
                        <option value="loisir">Loisir</option>
                        <option value="dep">Départemental</option>
                        <option value="reg">Régional</option>
                        <option value="preNat">Pré-Nationale</option>
                        <option value="N3">National 3</option>
                        <option value="N2">National 2</option>
                        <option value="N1">National 1</option>
                        <option value="proB">Pro B</option>
                        <option value="proA">Pro A</option>
                    </select>
                </label>
            </div>
            <div class="formGroup">
                <label for="club">
                    Club
                    <input class="inputText" type="text" v-model="data.club" name="club">
                </label>
            </div>

            <div class="formGroup">
                <button  class="submitBtn" type="submit">S'inscrire</button>
            </div>
        </form>

    </div>
</template>

<script>
    export default {
        name: "Signup",
        components: {},
        data() {
            return {
                data: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    genre: '',
                    birth: '',
                    file:'',
                    postPlayer: '',
                    club: '',
                    level: '',
                    height: 0,
                },


            }
        },

        methods: {

            onSelect() {
                const file = this.$refs.file.files[0];
                this.data.file = file;

            },
            async sendSignUp() {
                const formData = new FormData();
                formData.append('firstname', this.data.firstname);
                formData.append('lastname', this.data.lastname);
                formData.append('email', this.data.email);
                formData.append('password', this.data.password);
                formData.append('genre', this.data.genre);
                formData.append('birth', this.data.birth);
                formData.append('file', this.data.file);
                formData.append('postPlayer', this.data.postPlayer);
                formData.append('club', this.data.club);
                formData.append('level', this.data.level);
                formData.append('height', this.data.height);
                try {
                    await this.$http.post('http://localhost:3000/person', formData);
                    console.log(this.data.image);
                } catch(err) {
                    console.log(err)
                }

            },
            uploadFile(event) {
                console.log(event)
            }
        }

    }
</script>

<style lang="scss" scoped>
    #signup {
        form {
            display: block;
            margin: 10% auto 0 auto;
            width: 20%;

            .formGroup {
                margin-top: 10%;

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
