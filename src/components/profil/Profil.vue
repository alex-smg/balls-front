<template>
    <div>
        <h2>Profil</h2>
        <p>{{this.$store.userSession}}</p>
        <button @click="logout">déconnexion</button>
    </div>
</template>

<script>
    import store from '../../store/index';
    export default {
        name: "Profil",

        methods: {
            logout: function () {
                store.dispatch('logout')
            }
        },
        mounted() {
            console.log(this.$store.state)
        }
    }
</script>

<style scoped>

</style>
