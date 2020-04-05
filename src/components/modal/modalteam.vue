<template>
    <div id="modalForm">
        <div class="background" @click.prevent="$emit('close-modal')"></div>
        <div class="containerForm">
            <div class="header flex hind">
                <button @click.prevent="$emit('close-modal')">X</button>
            </div>
            <form>
                <h3>Créer une nouvelle team</h3>
                <div class="formGroup">
                        <input class="inputText" type="text"  id="name" name="name" v-model="team.name" placeholder="Nom de la team">
                </div>
                <div class="formGroup">
                        <textarea class="inputText" type="text"  id="description" name="description" v-model="team.description" placeholder="Une petite description..."></textarea>
                </div>
                <div class="formGroup">
                        <input class="inputText" type="file"  id="file" name="file">
                </div>
                <div class="formGroup">
                    <div class="flex" v-for="email in team.emailPlayer" :key="email.id">
                        <input class="inputText" type="text" v-model="team.emailPlayer[email.id].email"  name="player" placeholder="L'email du joueur que tu veux ajouter">
                        <button v-if="email.id > 0 " @click.prevent="deleteEmailPlayer(email.id)">X</button>
                    </div>
                    <button @click.prevent="addEmailPlayer" class="btn-secondary addEmail">+</button>
                </div>
                <button class="btn-primary submit"  @click.prevent="createTeam">Enregistrer</button>
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
                    emailPlayer: [
                        {
                            id: 0,
                            email: ''
                        }
                    ],
                },
                currentIdPlayer: 0
            }
        },
        methods: {
            createTeam: async function () {
                try {
                    const response = await this.$http.post('http://localhost:3000/team', this.team);
                    console.log(response)
                } catch(err) {
                    console.log(err)
                }


            },
            addEmailPlayer: function () {
                console.log(this.currentIdPlayer);
                this.currentIdPlayer = this.currentIdPlayer + 1;

                let newPlayer = {
                    id: this.currentIdPlayer,
                    email: ''
                };
                this.team.emailPlayer.push(newPlayer
                )
                console.log(this.team)
            },
            deleteEmailPlayer: function (id) {
                console.log(id);
                this.team.emailPlayer.splice(id, 1);
                console.log(this.team.emailPlayer)
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
            .header {
                position: relative;
                button {
                    position: absolute;
                    right: 2vh;
                    top: 1.5vh;
                    background-color: transparent;
                    border: none;
                    font-size: 24px;
                    font-weight: 800;
                    color: #FFCA28;
                    z-index: 1000;
                }
            }
            form {
                padding: 50px;
                width: 30vw;
                opacity: 1;
                position: relative;
                input, textarea {
                    margin: 20px 0px;
                }
                .addEmail {
                    width: 40px;
                    height: 40px;
                    padding: 0;
                    border-radius: 100%;
                    font-size: 24px;
                    font-weight: 800;
                    margin:  0px 0px 20px 0px;

                }
                .submit {
                    position: absolute;
                    right: 35px;
                }
                .flex {
                    input {
                        width: 90%;
                    }
                    button {
                        width: 20%;
                        background: transparent;
                        border: none;
                        font-weight: 600;
                        color: #294FFF;
                        font-size: 18px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
</style>
