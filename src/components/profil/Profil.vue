<template>
    <div id="profil">
        <!--<h2>Profil</h2>
        <button  class="btn-primary">Créer une équipe</button>-->
        <div class="containerProfile">
            <div class="containerLeft">
                <div class="containerImg">
                    <div class="maskImg" :style="{ backgroundImage:  'url(http://localhost:3000/'+ currentUser.image+')'}">
                        <!--<img :src="'http://localhost:3000/'+ currentUser.image">-->
                    </div>

                </div>
                <div>
                    <button class="btn-primary">Modifier mon profil</button>
                    <button class="btn-secondary">Créer un tournois</button>
                    <button class="btn-secondary" @click="openModalTeam('modalCreateTeam')">Créer une team</button>

                    <button class="btn-secondary btn-red" @click="logout">Déconnexion</button>
                </div>

            </div>
            <div class="containerRight">
                <section>
                    <div class="hr"></div>
                    <div>
                        <h3 class="hind">Mon profil</h3>
                        <h2>{{ currentUser.firstname + ' ' + currentUser.lastname }}</h2>
                        <span>{{ currentUser.gender + ' - ' + birth + ' - ' + age}}</span>
                        <div class="flex">
                            <div class="infos">
                                <p class="min-title hind">Email</p>
                                <p class="dataMin-title"> {{ currentUser.email }}</p>
                            </div>
                            <div class="infos">
                                <p class="min-title hind">Mot de passe</p>
                                <p class="dataMin-title">*********</p>
                            </div>
                        </div>
                        <div class="flex">
                            <div class="infos">
                                <p class="min-title hind">Poste</p>
                                <p class="dataMin-title"> {{ currentUser.postPlayer }}</p>
                            </div>
                            <div class="infos">
                                <p class="min-title hind">Niveau</p>
                                <p class="dataMin-title">{{ currentUser.level }}</p>
                            </div>
                        </div>
                        <div class="infos">
                            <p class="min-title hind">Club</p>
                            <p class="dataMin-title">{{ currentUser.club }}</p>
                        </div>

                    </div>
                </section>
                <section>
                    <div class="hr"></div>
                    <div class="containerInfos">
                    <h3 class="hind">Mes tournois</h3>
                        <ul class="tournament">
                            <li :key="tournament.id" v-for="tournament in currentUser.tournaments">
                                <div class="containerInfoTournament">
                                    <div class="containerImg" :style="{ backgroundImage:  'url(http://localhost:3000/'+ tournament.image+')'}">
                                    </div>
                                    <div class="infoTournament">
                                        <h5>
                                            {{tournament.name}}
                                        </h5>
                                        <p>
                                            {{
                                            new Date(tournament.date_begin).toLocaleDateString()
                                            }}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section>
                    <div class="hr"></div>
                    <div class="containerInfos">
                        <h3 class="hind">Mes teams</h3>
                        <ul class="teams">
                            <li :key="team.id" v-for="team in currentUser.teams" @click="selectTeam(team._id)">
                                <div class="infoTeam">
                                    <h5>
                                        {{team.name}}
                                    </h5>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <modal
            :type="typeModal"
            @close-modal="closeModalTeam"
            :user="currentUser"
            :idTeam="idTeam"
            v-show="modalTeam"
            :update="update"
            @update-team="updateTeam"
            @validation-team="validationTeam"
            :message="message"
        ></modal>

    </div>
</template>

<script>
    import store from '../../store/index';
    import Modal from "../modal/Modal";
    import axios from 'axios';
    export default {
        name: "Profil",
        components: {Modal},
        data() {
            return {
                modalTeam: false,
                currentUser: [],
                birth: '',
                age: '',
                idTeam: '',
                typeModal: '',
                update: false,
                message: ''
            }
        },
        methods: {
            openModalTeam: function (typemodal) {
                this.typeModal = typemodal;
                this.modalTeam = true;
                this.update = false;
            },
            closeModalTeam: function () {
                this.modalTeam = false;
                this.typeModal = '';
            },
            logout: function () {
                store.dispatch('logout')
            },
            selectTeam: function(id) {
                this.idTeam = id;
                this.openModalTeam('modalTeam');
            },
            updateTeam: function (type) {
                this.typeModal = type;
                this.update = true;
            },
            validationTeam: function () {
                console.log('hello');
                this.typeModal = 'validation';
                this.message = 'Ta team a été créée'
            },
            formatDate: function () {
                this.currentUser = this.$store.state.userSession;
                    let birth = new Date(this.currentUser.birth).toLocaleDateString()
                    this.birth = birth;
                    let age = new Date(this.currentUser.birth).getFullYear();
                    let currentYear = new Date().getFullYear();
                    this.age = currentYear - age + ' ans';
            },
            getPerson: async function (id) {
                try {
                    const response = await axios.get(process.env.VUE_APP_API +`/person/${id}`, {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        }
                    });
                    store.dispatch('populateUserSession', response.data);
                    this.formatDate();
                } catch (error) {
                    console.log(error)
                }
            },
        },
        mounted() {
            this.getPerson(localStorage.idPerson);
        },
    }

</script>

<style lang="scss" scoped>
    #profil {
        display: flex;
        height: 91vh;
        .containerProfile {
            width: 70%;
            margin: auto;
            .containerLeft {
                button {
                    display: block;
                    min-width: 100%;
                    text-overflow: clip;
                    margin: 2vh 0 2vh 0 ;
                    &:last-child {
                        margin-top: 100px;
                    }
                }
                .containerImg {
                    width: 100%;
                    .maskImg {
                        background-size: cover;
                        background-position : 50% 50%;
                        background-repeat: no-repeat;
                        width: 10vw;
                        height: 10vw;
                        overflow: hidden;
                        margin: auto;
                        border-radius: 100%;
                        border: 6px solid #FFCA28;
                        position: relative;
                    }
                }

            }
            .containerRight {
                width: 70%;
                section {
                    margin: 4vh 0 4vh 0;
                    display: flex;
                    width: 100%;
                    .flex {
                        margin: 16px 0;
                    }
                    h2 {
                        margin: 8px 0px;
                    }

                    .hr {
                        width: 5px;
                        background-color: #FFCA28;
                        margin: 0 20px;
                        border-radius: 5em;
                        min-width: 5px;
                    }
                    .min-title {
                        color: #CFCFCF;
                        font-weight: 600;
                    }
                    .dataMin-title {
                        font-weight: 600;
                    }

                    .containerInfos {
                        width: 100%;
                        .teams {
                            margin-top: 8px;
                            li {
                                margin: 5px;
                                .infoTeam {
                                    width: 100%;
                                    height: 100%;
                                    display: flex;
                                    h5 {
                                        color: #FFFFFF;
                                        margin: auto;
                                        text-align: center;
                                        text-transform: uppercase;
                                    }
                                }

                                background-color: #294FFF;
                                width: 20%;
                                margin-right: 20px;
                                height: 5vh;
                                border-radius: 12px;
                                transition: 0.5s;
                                cursor: pointer;
                                &:hover {
                                    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                                }
                            }
                        }
                        .tournament {
                            li {
                                border: 3px solid #FFCA28;
                                width: 30%;
                                height: 8vh;
                                border-radius: 12px;
                                transition: 0.5s;
                                cursor: pointer;
                                &:hover {
                                    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
                                }
                                .containerInfoTournament {
                                    display: flex;
                                    height: 100%;
                                    .infoTournament {
                                        width: 60%;
                                        margin: auto 12px auto 12px;
                                    }
                                    .containerImg {
                                        background-size: cover;
                                        background-position : 50% 50%;
                                        background-repeat: no-repeat;
                                        width: 40%;
                                        height: 100%;
                                        border-radius: 8px;
                                    }
                                }
                            }
                        }
                        ul {
                            width: 100%;
                            li {
                                display: inline-block;
                                list-style: none;
                                padding: 8px;
                            }
                        }

                    }
                    .infos {
                        margin-right: 40px;
                    }
                }
            }
            display: flex;
            h3 {
                color: #FFCA28;
            }
        }
    }

</style>
