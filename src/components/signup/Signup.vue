<template>
    <div id="signup">
        <form @submit.prevent="sendFile" id="formPerson" enctype="multipart/form-data">
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
                    <select class="inputSelect"  v-model="data.gender" name="genre">
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

            <File @add-file="addFile"/>
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
                        <option value="Réceptionneur Attaquant">Receptionneur Attaquant</option>
                        <option value="Central">Central</option>
                        <option value="Pointu">Pointu</option>
                        <option value="Passeur">Passeur</option>
                        <option value="Libéro">Libéro</option>
                    </select>
                </label>
            </div>
            <div class="formGroup">
                <label for="level">
                    Niveau
                    <select class="inputSelect"  v-model="data.level" name="level">
                        <option value="Loisir">Loisir</option>
                        <option value="Départemental">Départemental</option>
                        <option value="Régional">Régional</option>
                        <option value="Pré-Nationale">Pré-Nationale</option>
                        <option value="National 3">National 3</option>
                        <option value="National 2">National 2</option>
                        <option value="National 1">National 1</option>
                        <option value="Pro B">Pro B</option>
                        <option value="Pro B">Pro A</option>
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
    import File from '../fields/File'
    export default {
        name: "Signup",
        components: {
            File
        },
        data() {
            return {
                data: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    gender: '',
                    birth: '',
                    image: '',
                    postPlayer: '',
                    club: '',
                    level: '',
                    height: 0,
                },
                file:'',


            }
        },

        methods: {

            onSelect() {
                const file = this.$refs.file.files[0];
                this.data.file = file;
            },
            addFile: function (file) {
                this.file = file;
            },
            async sendFile() {
                const formData = new FormData();
                formData.append('file', this.file);
                formData.append('folder', 'profil');
                try {
                    const response = await this.$http.post(process.env.VUE_APP_API + '/file', formData);
                    this.data.image = response.data;
                    this.sendSignUp()

                } catch (err) {
                    console.log(err)
                }
            },
            async sendSignUp() {
                try {
                    await this.$http.post(process.env.VUE_APP_API + '/person', this.data);
                    this.$router.push('/login')
                } catch(err) {
                    console.log(err)
                }

            },
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
