<template>
    <div id="modalForm">
        <div class="background" @click="$emit('close-modal')"></div>
        <div  class="containerModal">
            <div class="header flex hind">
                <button @click="close">X</button>
            </div>
            <modal-team v-if="type === 'modalTeam'"></modal-team>
            <modal-chose-team :id-tournament="idTournament" v-if="type === 'modalChoseTeam'"></modal-chose-team>
            <validation  v-if="type === 'validation'" @close-modal="$emit('close-modal')" @reset-teamcreated="resetTeamCreated"></validation>
        </div>
    </div>
</template>
<script>
    import ModalTeam from "./modalteam";
    import ModalChoseTeam from "./ModalChoseTeam";
    import Validation from "./Validation";
    export default {
        name: "",
        components: {Validation, ModalChoseTeam, ModalTeam},
        props: ['type', 'idTournament'],
        data() {
            return {}
        },
        methods : {
            close : function () {
                console.log('test');
                this.$emit('close-modal')
            }
        }
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
