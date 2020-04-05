<template>
    <div id="profil">
        <!--<h2>Profil</h2>
        <button  class="btn-primary">Créer une équipe</button>-->
        <div class="containerProfile">
            <div class="containerLeft">
                <div class="containerImg">
                    <div class="maskImg">
                        <img :src="'http://localhost:3000/'+ currentUser.image">
                    </div>

                </div>
                <div>
                    <button class="btn-primary">Modifier mon profil</button>
                    <button class="btn-secondary">Créer un tournois</button>
                    <button class="btn-secondary" @click="openModalTeam">Créer une team</button>

                    <button @click="logout">déconnexion</button>
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
                    <h3 class="hind">Mes teams</h3>
                </section>
            </div>
        </div>
        <modal-team @close-modal="closeModalTeam" v-show="modalTeam"></modal-team>

    </div>
</template>

<script>
    import store from '../../store/index';
    import ModalTeam from "../modal/modalteam";
    export default {
        name: "Profil",
        components: {ModalTeam},
        data() {
            return{
                modalTeam : false,
                currentUser: [],
                birth: '',
                age: '',
            }
        },
        methods: {
            openModalTeam: function() {
                this.modalTeam = true
            },
            closeModalTeam: function() {
               this.modalTeam = false
            },
            logout: function() {
                store.dispatch('logout')
            },
            formatDate: function() {
                this.currentUser = this.$store.state.userSession;
                if(this.currentUser.birth) {
                    let birth = new Date(this.currentUser.birth).toLocaleDateString()
                    this.birth = birth;
                    let age = new Date(this.currentUser.birth).getFullYear();
                    let currentYear = new Date().getFullYear();
                    this.age = currentYear - age + 'ans'
                }
            }
        },
        mounted() {
            this.formatDate();
        }
    }
</script>

<style lang="scss" scoped>
    #profil {
        display: flex;
        .containerProfile {
            width: 70%;
            margin: auto;
            .containerLeft {
                button {
                    display: block;
                    min-width: 100%;
                    text-overflow: clip;
                    margin: 2vh 0 2vh 0 ;
                }
                .containerImg {
                    width: 100%;
                    .maskImg {
                        width: 10vw;
                        height: 10vw;
                        overflow: hidden;
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

                    .hr {
                        width: 5px;
                        background-color: #FFCA28;
                        margin: 0 20px;
                        border-radius: 5em;
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
