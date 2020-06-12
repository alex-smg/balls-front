<template>
    <div>
        <p>{{team._id}}</p>
        <p>{{team.name}}</p>
        <p>{{team.description}}</p>
        <button class="btn-primary" @click="updateTeam">Modifier</button>
        <button class="btn-secondary btn-red" @click="deleteTeam(team._id)">Supprimer</button>
    </div>
</template>
<script>
    export default {
        name: "",
        components: {},
        props: ['idTeam'],

        data() {
            return {
                team: {}
            }
        },
        methods: {
            getTeam : function (id) {
                this.team = this.$store.state.userSession.teams.find(team => team._id === id)
            },
            deleteTeam : async function (id) {
                await this.$http.delete(process.env.VUE_APP_API + `/team/${this.team._id}`)
                this.$store.dispatch('deleteTeam', id)
                this.$emit('close-modal');
            },
            updateTeam: function () {
                this.$emit('update-team', 'modalCreateTeam', this.team);
            },
        },
        mounted() {
            this.getTeam(this.idTeam);
        }
    }
</script>
<style>
</style>
