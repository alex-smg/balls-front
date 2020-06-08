<template>
    <div>
        <p>{{team._id}}</p>
        <p>{{team.name}}</p>
        <p>{{team.description}}</p>
        <button class="btn-primary" @click="updateTeam">Modifier</button>
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
            updateTeam: function () {
                this.$emit('update-team', 'modalCreateTeam');
            }
        },
        mounted() {
            this.getTeam(this.idTeam);
        }
    }
</script>
<style>
</style>
