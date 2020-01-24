<template>
    <nav id="header">
        <div class="containerHeader">
            <div class="containerLogo">
                <img src="" alt="">
                <router-link to="home">Home</router-link>

            </div>
            <div class="containerMenu">
                <a href="">Trouver un tournois</a>
                <a href="">Créer un tournois</a>
                <a href="">Se connecter</a>
                <router-link to="profil">Mon Profil</router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
    #header {
        .containerHeader {
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: auto;
            a {
                text-decoration: none;
            }
            .containerLogo {
                width: 10%;
            }
            .containerMenu {
                width: 40%;
                display: flex;
                justify-content: space-between;
            }
        }

    }

</style>
