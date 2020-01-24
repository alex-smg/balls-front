<template>
    <div id="signup">
        <form @submit.prevent="sendSignUp" enctype="multipart/form-data">
            <div class="formGroup">
                <label for="email">
                    Email
                    <input class="inputText" type="text" v-model="email" name="email">
                </label>
            </div>
            <div class="formGroup">
                <label for="password">
                    Mot de passe
                    <input class="password" type="text" v-model="password" name="password">
                </label>
            </div>
            <div class="formGroup">
                <label for="lastname">
                    Nom
                    <input class="inputText" type="text" v-model="lastname" name="lastname">
                </label>
            </div>
            <div class="formGroup">
                <label for="firstname">
                    Prénom
                    <input class="inputText" type="text" v-model="firstname" name="firstname">
                </label>
            </div>
            <div class="formGroup">
                <label for="postPlayer">
                    Genre
                    <select class="inputSelect"  v-model="genre" name="genre">
                        <option value="homme">Homme</option>
                        <option value="femme">Femme</option>
                    </select>
                </label>
            </div>
            <div class="formGroup">
                <label for="birth">
                    Date de naissance
                    <input class="inputText" type="date" v-model="birth" name="birth">
                </label>
            </div>

            <div class="formGroup">
                <label for="image">
                    Photo
                    <input class="inputFile" type="file" name="image" @change="uploadFile">
                </label>
            </div>
            <div class="formGroup">
                <label for="height">
                    Taille
                    <input class="inputRange" type="range" v-model="height" name="height">
                </label>
            </div>
            <div class="formGroup">
                <label for="postPlayer">
                    Poste
                    <select class="inputSelect"  v-model="postPlayer" name="postPlayer">
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
                    <select class="inputSelect"  v-model="level" name="level">
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
                    <input class="inputText" type="text" v-model="club" name="club">
                </label>
            </div>

            <div class="formGroup">
                <button  type="submit">S'inscrire</button>
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
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                genre: '',
                birth: '',
                image: '',
                postPlayer: '',
                club: '',
                level: '',
                height: '',
            }
        },

        methods: {
            async sendSignUp(event) {
                const formData = new FormData();
                formData.append('file', event)
                try {
                    await axios.post('http://localhost:3000/person');
                }catch(err) {
                    console.log(err)
                }

            },
            uploadFile(event) {
                console.log(event)
            }
        }

    }
</script>

<style scoped>

</style>
