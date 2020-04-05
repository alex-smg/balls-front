<template>
    <div id="modalForm">
        <div class="background" @click.prevent="$emit('close-modal')"></div>
        <div class="containerForm">
            <form>
                <button @click.prevent="$emit('close-modal')">X</button>
                <div class="formGroup">
                    <label for="widthTeam">
                        Nom
                        <input class="inputText" type="text"  id="name" name="widthTeam">
                    </label>
                </div>
                <div class="formGroup">
                    <label for="widthTeam">
                        Description
                        <textarea class="inputText" type="text"  id="description" name="widthTeam"></textarea>
                    </label>
                </div>
                <div class="formGroup">
                    <label for="widthTeam">
                        Image
                        <textarea class="inputText" type="file"  id="file" name="widthTeam"></textarea>
                    </label>
                </div>
                <button>Enregistrer</button>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "modalTeam",
        data() {
            return{
                modalTeam : false,
                team: {
                    name: '',
                    description: '',
                    name: '',
                }
            }
        },
        methods: {
            createTeam: function () {

            }

        },
    }
</script>

<style lang="scss" scoped>
    #modalForm {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        display: flex;
        .background{
            position: absolute;
            z-index: 1;
            width: 100%;
            height: 100%;
            background-color: #3F3F3F;
            opacity: 0.5;
        }
        .containerForm {
            z-index: 1000;
            opacity: 1;
            background-color: #FFFFFF;
            width: min-content;
            border-radius: 1em;
            margin: auto;
            form {
                padding: 50px;
                width: 30vw;
                opacity: 1;
            }
        }
    }
</style>
