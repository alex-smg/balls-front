<template>
    <div id="modalForm">
        <div class="background" @click="$emit('close-modal')"></div>
        <div  class="containerModal">
            <div class="header flex hind">
                <button @click="close">X</button>
            </div>
            <modal-create-team v-if="type === 'modalCreateTeam'" @validation-team="validationTeam" :update="update" :teamUp="team"></modal-create-team>
            <modal-chose-team :id-tournament="idTournament"  @update-tournament="updateTournament" v-if="type === 'modalChoseTeam'"></modal-chose-team>
            <modal-team v-if="type === 'modalTeam'" @update-team="updateTeam" @close-modal="close" :id-tournament="idTournament" :idTeam="idTeam"></modal-team>
            <validation  v-if="type === 'validation'" :message="message" @close-modal="close" @reset-teamcreated="resetTeamCreated"></validation>
        </div>
    </div>
</template>
<script>
    import ModalCreateTeam from "./ModalCreateTeam";
    import ModalTeam from "./ModalTeam";
    import ModalChoseTeam from "./ModalChoseTeam";
    import Validation from "./Validation";
    export default {
        name: "modal",
        components: {Validation, ModalChoseTeam, ModalCreateTeam, ModalTeam},
        props: ['type', 'idTournament', 'idTeam', 'update', 'message'],
        data() {
            return {
                team: {},
            }
        },
        methods : {
            close : function () {
                this.$emit('close-modal')
            },
            updateTournament: function(data) {
                this.$emit('update-tournament', data)
            },
            updateTeam: function (type, team) {
                this.team = team;
                this.$emit('update-team', type)
            },
            validationTeam: function () {
                console.log('la');
                this.$emit('validation-team')
            }
        },
    }
</script>
<style lang="scss">
    #modalForm {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        .background{
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: #3F3F3F;
            opacity: 0.5;
        }
        .containerModal {
            z-index: 1000;
            opacity: 1;
            background-color: #FFFFFF;
            width: min-content;
            border-radius: 1em;
            margin: auto;
            padding: 32px;
            .header {
                position: relative;
                button {
                    position: absolute;
                    right: -6px;
                    top: -16px;
                    background-color: transparent;
                    border: none;
                    font-size: 24px;
                    font-weight: 800;
                    color: #FFCA28;
                    z-index: 1000;
                }
            }
        }
    }

</style>
