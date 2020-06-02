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
                    <button class="btn-secondary" @click="openModalTeam">Créer une team</button>

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
                    <h3 class="hind">Mes tournois</h3>
                </section>
                <section>
                    <div class="hr"></div>
                    <div>
                        <h3 class="hind">Mes teams</h3>
                        <ul class="teams">
                            <li :key="team.id" v-for=" team in currentUser.teams">
                                <div class="containerImg" :style="{ backgroundImage:  'url(http://localhost:3000/'+ team.image+')'}">

                                </div>
                                <p>
                                    {{team.name}}
                                </p>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
        <modal type="modalTeam" @close-modal="closeModalTeam" v-show="modalTeam"></modal>

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
            }
        },
        methods: {
            openModalTeam: function () {
                this.modalTeam = true
            },
            closeModalTeam: function () {
                this.modalTeam = false
            },
            logout: function () {
                store.dispatch('logout')
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

                    console.log(response.data)
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
                        img {
                            position: absolute;
                            width: 110%;
                        }
                    }
                }

            }
            .containerRight {
                section {
                    margin: 4vh 0 4vh 0;
                    display: flex;
                    .flex {
                        margin: 16px 0;
                    }
                    h2 {
                        margin: 8px 0px;
                    }
                    .teams {
                        width: 50%;
                        display: block;
                        .containerImg {
                            background-size : contain;
                            background-position : 50% 50%;
                        }
                        li {
                            width: 22%;
                            display: inline-block;
                            margin-right: 20px;
                            margin-bottom: 10px;
                            list-style: none;
                            border-radius: 12px;
                            border: 2px solid #5472FB;
                            overflow: hidden;
                            height: 18vh;
                            text-align: center;
                            div {
                                max-width: 100%;
                                min-width: 100%;
                                overflow: hidden;
                                height: 70%;
                                margin-bottom: 10px;
                                img {
                                    min-width: 100%;
                                    min-height: 100%;
                                }
                            }
                        }
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
