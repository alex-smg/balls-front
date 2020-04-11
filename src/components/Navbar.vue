<template>
    <nav id="header">
        <div class="containerHeader">
            <div class="containerLogo">
                <router-link to="home">
                    <img src="../assets/logo.svg">
                </router-link>

            </div>
            <div class="containerMenu">
                <router-link to="search">Trouver un tournois</router-link>
                <router-link  to="create-tournament">Créer un tournois</router-link>
                <router-link  to="profil">Mon Profil</router-link>
                <router-link  to="profil">{{messages}}</router-link>
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
            var channel = pusher.subscribe('balls-notification');
            channel.bind('my-event', function(data) {
                console.log(data);
                this.messages = JSON.stringify(data);
            });
        }
    }
</script>

<style lang="scss" scoped>
    #header {
        .containerHeader {
            height: 8vh;
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
                width: 10%;
                display: flex;
                img {
                    height: 90%;
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
