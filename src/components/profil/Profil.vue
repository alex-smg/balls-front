<template>
    <div>
        <h2>Profil</h2>
        <button @click="openModalTeam" class="btn-primary">Créer une équipe</button>
        <modal-team @close-modal="closeModalTeam" v-show="modalTeam"></modal-team>

        <button @click="logout">déconnexion</button>
    </div>
</template>

<script>
    import store from '../../store/index';
    import ModalTeam from "../modal/modalteam";
    export default {
        name: "Profil",
        components: {ModalTeam},
        data() {
            return{
               modalTeam : false,
            }
        },
        methods: {
            openModalTeam: function () {
                this.modalTeam = true
            },
            closeModalTeam: function() {
                console.log('test')
               this.modalTeam = false
            },
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
