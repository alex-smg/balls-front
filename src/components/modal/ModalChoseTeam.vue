<template>
    <div id="modalChoseTeam">
        <div v-if="teams.length === 0">
            <h4>Tu n'as pas encore créé de team</h4>
            <button class="btn-primary">Je créer ma team</button>
        </div>
        <div v-else>
            <h3>Séléctionne la team que tu veux inscrire</h3>
            <ul>
                <li v-for="team in teams" :key="team.id">
                    <button>{{team.name}}</button>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: "modalChoseTeam",
        components: {},
        data() {
            return {
                teams: []
            }
        },
        mounted() {
            this.teams = this.$store.state.userSession.teams
        }
    }
</script>
<style lang="scss">
    #modalChoseTeam {
        padding: 50px;
        div {
            width: min-content;
            h4 {
                white-space: nowrap;
                display: block;
            }
            button {
                display: block;
                margin: 16px auto 0 auto;
            }
        }

    }
</style>
