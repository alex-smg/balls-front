<template>
    <div>
        <p>{{team.id}}</p>
        <p>{{team.name}}</p>
        <p>{{team.description}}</p>
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
                this.team = this.$store.state.userSession.teams.find(team => team.id === id)
            }
        },
        mounted() {
            this.getTeam(this.idTeam);
        }
    }
</script>
<style>
</style>
