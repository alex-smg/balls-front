<template>

    <div v-if="!teamCreated">
        <form @submit.prevent="sendFile" enctype="multipart/form-data">
            <h3>Créer une nouvelle team</h3>
            <input-text
                    v-bind:title.sync="team.name"
                    label="Nom de la team"
                    placeholder="Nom de la team"
                    name="name"
                    id="name"
                    showLabel=false
            />
            <input-num
                v-bind:title="team.nbrPlayer"
                v-on:update:title="team.nbrPlayer = $event"
                label="Nombre de joueur"
                placeholder="0"
                name="nbrPlayer"
                id="nbrPlayer"
                showLabel=false
            />
            <input-texta
                    v-bind:title.sync="team.description"
                    label="Description"
                    name="description"
                    id="description"
                    placeholder="Une petite description..."
            />
            <File @add-file="addFile"/>
            <div class="formGroup">
                <p class="addplayer">Ajouter des joueurs</p>
                <div class="flex" v-for="email in emailPlayer" :key="email.id">
                    <input class="inputText" type="text" v-model="emailPlayer[email.id].email"  name="player" placeholder="L'email du joueur que tu veux ajouter">
                    <button v-if="email.id > 0 " @click.prevent="deleteEmailPlayer(email.id)">X</button>
                </div>
                <button @click.prevent="addEmailPlayer" class="btn-secondary addEmail">+</button>
            </div>
            <button class="btn-primary submit">Enregistrer</button>
        </form>
    </div>
</template>

<script>
    import store from '../../store/index';
    import File from '../fields/File';
    import InputText from '../fields/InputText';
    import InputTexta from '../fields/Textarea';
    import InputNum from '../fields/InputNum';
    export default {
        name: "modalCreateTeam",
        components: {
            File,
            InputText,
            InputTexta,
            InputNum
        },
        props: ['update', 'teamUp'],
        data() {
            return{
                updateTeam: {},
                modalTeam : false,
                teamCreated: false,
                file: [],
                team: {
                    name: '',
                    description: '',
                    image: '',
                    nbrPlayer: 0,
                    player_creator: localStorage.idPerson,
                    player_admin: localStorage.idPerson,
                },
                emailPlayer: [
                    {
                        id: 0,
                        email: '',
                        idPlayer: ''
                    }
                ],
                currentIdPlayer: 0
            }
        },
        methods: {
            addFile: function (file) {
                this.file = file;
            },
            createTeam: async function () {
                try {
                    const response = await this.$http.post(process.env.VUE_APP_API +'/team', this.team);
                    let idTeam = response.data._id;
                    this.emailPlayer.forEach( async (player) => {
                        const response = await this.$http.get(process.env.VUE_APP_API + '/person/search/email',
                            {
                                params: {email: player.email },
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded'
                                }
                            }
                        );
                        player.idPlayer = response.data;
                        this.addRequestTeam(player.idPlayer, idTeam)
                    })

                    store.dispatch('addTeam', response.data);
                    this.teamCreated = true;


                } catch(err) {
                    console.log(err)
                }
            },
            async sendFile() {
                const formData = new FormData();
                formData.append('file', this.file);
                formData.append('folder', 'team');
                try {
                    const response = await this.$http.post(process.env.VUE_APP_API + '/file', formData);
                    this.team.image = response.data;
                    this.createTeam()

                } catch (err) {
                    console.log(err)
                }
            },
            resetTeamCreated: function() {
                this.teamCreated = false;
            },
            addRequestTeam: async function(idPlayer, id) {
                try{
                    let requestTeam = {
                        idTeam: id,
                        nameTeam: this.team.name,
                        idApplicant: localStorage.idPerson,
                        idPlayer: idPlayer,
                    };
                    const response = await this.$http.post(process.env.VUE_APP_API + '/requestTeam', requestTeam)
                    console.log('ici');
                    this.$emit('validation-team')
                }

                catch(error) {
                    console.log(error)
                }
            },
            addEmailPlayer: function () {
                this.currentIdPlayer = this.currentIdPlayer + 1;

                let newPlayer = {
                    id: this.currentIdPlayer,
                    email: '',
                    idPlayer: ''
                };
                this.emailPlayer.push(newPlayer
                )
            },
            deleteEmailPlayer: function (id) {
                this.emailPlayer.splice(id, 1);
                this.currentIdPlayer = this.currentIdPlayer - 1;
            }

        },
    }
</script>

<style lang="scss">
    #modalForm {
        #nbrPlayer {
            width: 20%;
        }
        .containerModal {
            form {
                padding: 50px;
                width: 30vw;
                opacity: 1;
                position: relative;
                h3 {
                    margin-bottom: 32px;
                }
                .inputText, .textarea {
                    p {
                        font-weight: 600;
                        font-size: 14px;
                    }
                }
                .addplayer {
                    font-weight: 600;
                    font-size: 14px;
                    margin-top: 20px;
                }
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
