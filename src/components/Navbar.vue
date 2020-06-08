<template>
    <nav id="header">
        <div class="containerHeader">
            <div class="containerLogo">
                <router-link to="/">
                    <img src="../assets/logo.svg">
                </router-link>

            </div>
            <div class="containerMenu">
                <router-link to="/search" exact>Trouver un tournois</router-link>
                <router-link  to="/create-tournament" exact>Créer un tournois</router-link>
                <router-link  to="/profil" exact>Mon Profil</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import Pusher from 'pusher-js';
    const pusher = new Pusher(process.env.VUE_APP_KEY, {
        cluster: process.env.VUE_APP_CLUSTER,
    });


    export default {
        name: "Navbar",
        data() {
            return {
                messages: '',
            }
        },
        mounted() {
            let id = JSON.stringify(localStorage.idPerson);
            var channel = pusher.subscribe('notif');
            channel.bind(`${id}`, function(data) {
                console.log(data);
                this.messages = JSON.stringify(data);
            });
        }
    }
</script>

<style lang="scss" scoped>
    #header {
        .containerHeader {
            height: 9vh;
            position: sticky;
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: auto;
            a {
                text-decoration: none;
                margin: auto;
                color: #3F3F3F;
            }
            .containerLogo {
                width: 8%;
                display: flex;
                img {
                    height: 90%;
                    display: block;
                    margin: auto;
                }
            }
            .containerMenu {
                width: 40%;
                display: flex;
                justify-content: space-between;
            }
        }

    }

</style>
