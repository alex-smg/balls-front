<template>
    <div id="modalChoseTeam">
        <div v-if="teams.length === 0">
            <h4>Tu n'as pas encore créé de team</h4>
            <button class="btn-primary">Je créer ma team</button>
        </div>
        <div v-else>
            <form enctype="multipart/form-data">
                <h3>Séléctionne la team que tu veux inscrire</h3>
                <ul>
                    <li v-for="team in teams" :key="team.id">
                        <button @click.prevent="addTeam(idTournament, team._id)">{{team.name}}</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        name: "modalChoseTeam",
        components: {},
        props: ['idTournament'],
        data() {
            return {
                teams: []
            }
        },
        mounted() {
            this.teams = this.$store.state.userSession.teams
        },
        methods : {
            addTeam : async function(idTournament, idTeam) {

                try {
                    console.log(idTournament);
                    console.log(idTeam);
                    const value = {
                        idTournament : idTournament,
                        idTeam : idTeam
                    }
                    const response = await this.$http.post(process.env.VUE_APP_API + '/tournament/addTeam', value);
                    console.log(response);
                    this.$emit('update-tournament', response.data)
                }
                catch (e) {
                    console.log(e);
                }
            }
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
