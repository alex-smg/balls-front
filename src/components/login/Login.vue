<template>
    <div id="login">
        <form action="POST">
            <h3> Se connecter </h3>
            <div class="formGroup">
                <label for="email">
                    Email
                    <input class="inputText" type="text" v-model="email" name="email">
                </label>
            </div>
            <div class="formGroup">
                <label for="password">
                    Password
                    <input class="inputText" type="password" v-model="password" name="password" autocomplete="on">
                </label>
            </div>
            <div class="formGroup">
                <input @click="login" class="submitBtn" type="submit" value="Connexion">
            </div>
            <router-link to="signup">S'incrire</router-link>
        </form>
    </div>
</template>

<script>
    export default {
        name: "login",
        components: {},
        data() {
            return {
                email : '',
                password: '',

            }
        },
        methods : {
            login : function(e) {
                e.preventDefault();
                this.$http.post('http://localhost:3000/person/login', {
                    email: this.email,
                    password: this.password
                }).then((response) => {
                    /* eslint-disable */
                    console.log(response);
                    if (response.data.isToken) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('isToken', response.data.isToken);
                        this.$router.push({ name: `profil` });
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="scss">
    #login {
        display: flex;

        form{
            display: block;
            margin: 10% auto 0 auto;
            width: 20%;
            .formGroup{
                margin-top: 10%;
                input{
                    display: block;
                    margin: 5% auto 0 auto;
                }
                .submitBtn{
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
