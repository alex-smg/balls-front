<template>
    <nav id="header">
        <div class="containerHeader">
            <div class="containerLogo">
                <router-link to="/">
                    <img src="../assets/logo.svg">
                </router-link>

            </div>
            <div class="containerMenu">
                <router-link to="/search" exact>Trouver un tournois</router-link>
                <router-link  to="/create-tournament" exact>Créer un tournois</router-link>
                <router-link  to="/profil" id="profil" exact>
                    <div v-if="$store.state.count > 0" class="notif">{{$store.state.count}}</div>
                    <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                         viewBox="0 0 478 478" style="enable-background:new 0 0 478 478;" xml:space="preserve">
                                <g>
                                <g>
                                    <path class="st0" d="M411.7,73.6C366.6,26.5,304.2-0.1,238.9,0C107.1-0.2,0.2,106.6,0,238.4C-0.1,303.5,26.5,365.9,73.6,411
                                        c0.1,0.1,0.2,0.3,0.3,0.5c1.4,1.3,2.9,2.5,4.3,3.7c3.8,3.4,7.7,6.9,11.7,10.2c2.2,1.7,4.4,3.4,6.6,5c3.8,2.9,7.6,5.7,11.6,8.3
                                        c2.7,1.7,5.5,3.4,8.3,5.1c3.7,2.2,7.4,4.5,11.2,6.5c3.2,1.7,6.5,3.2,9.8,4.7c3.6,1.7,7.1,3.4,10.8,4.9c3.7,1.5,7.4,2.7,11.1,4.1
                                        s6.9,2.6,10.5,3.7c4,1.2,8.2,2.1,12.3,3.2c3.4,0.8,6.7,1.8,10.2,2.5c4.7,0.9,9.5,1.5,14.3,2.2c3,0.4,5.8,1,8.8,1.3
                                        c7.8,0.8,15.7,1.2,23.7,1.2s15.8-0.4,23.7-1.2c3-0.3,5.9-0.9,8.8-1.3c4.8-0.6,9.6-1.2,14.3-2.2c3.4-0.7,6.8-1.7,10.2-2.5
                                        c4.1-1,8.2-1.9,12.3-3.2c3.6-1.1,7-2.4,10.5-3.7s7.4-2.6,11.1-4.1s7.2-3.3,10.8-4.9c3.3-1.6,6.6-3,9.8-4.7c3.8-2,7.5-4.3,11.2-6.5
                                        c2.8-1.7,5.6-3.3,8.3-5.1c4-2.6,7.8-5.5,11.6-8.3c2.2-1.7,4.5-3.2,6.6-5c4-3.2,7.9-6.7,11.7-10.2c1.4-1.3,2.9-2.4,4.3-3.7
                                        c0.1-0.1,0.2-0.3,0.3-0.5C499.6,319.8,502.9,168.7,411.7,73.6z M373.3,393.1c-3.1,2.7-6.3,5.3-9.6,7.8c-1.9,1.5-3.8,2.9-5.8,4.3
                                        c-3.1,2.2-6.2,4.4-9.4,6.4c-2.3,1.5-4.7,2.9-7.1,4.3c-3,1.7-6.1,3.4-9.1,5.1c-2.7,1.4-5.5,2.7-8.3,4s-5.9,2.7-8.9,3.9
                                        s-6.2,2.4-9.4,3.4c-2.9,1-5.8,2-8.7,2.9c-3.4,1-7,1.9-10.5,2.7c-2.8,0.6-5.5,1.4-8.3,1.9c-4,0.8-8.2,1.3-12.3,1.9
                                        c-2.4,0.3-4.7,0.7-7.1,1c-6.6,0.6-13.2,1-19.9,1s-13.3-0.4-19.9-1c-2.4-0.2-4.7-0.7-7.1-1c-4.1-0.6-8.3-1.1-12.3-1.9
                                        c-2.8-0.5-5.5-1.3-8.3-1.9c-3.5-0.9-7-1.7-10.5-2.7c-2.9-0.9-5.8-1.9-8.7-2.9c-3.2-1.1-6.3-2.2-9.4-3.4c-3.1-1.2-6-2.5-8.9-3.9
                                        s-5.6-2.6-8.3-4c-3.1-1.6-6.1-3.3-9.1-5.1c-2.4-1.4-4.8-2.8-7.1-4.3c-3.2-2-6.3-4.1-9.4-6.4c-2-1.4-3.9-2.9-5.8-4.3
                                        c-3.2-2.5-6.5-5.1-9.6-7.8c-0.8-0.6-1.4-1.3-2.2-1.9c0.8-58.1,38.1-109.3,93.1-127.9c27.5,13.1,59.4,13.1,86.9,0
                                        c55,18.6,92.3,69.9,93.1,127.9C374.8,391.8,374.1,392.5,373.3,393.1z M179.4,136.8c18.5-32.9,60.1-44.5,93-26s44.5,60.1,26,93
                                        c-6.1,10.9-15.1,19.9-26,26c-0.1,0-0.2,0-0.3,0.1c-4.5,2.5-9.3,4.5-14.3,6c-0.9,0.3-1.7,0.6-2.6,0.8c-1.7,0.4-3.5,0.8-5.3,1.1
                                        c-3.3,0.6-6.7,0.9-10,1H238c-3.4-0.1-6.7-0.4-10-1c-1.7-0.3-3.5-0.6-5.3-1.1c-0.9-0.2-1.7-0.6-2.6-0.8c-5-1.5-9.7-3.5-14.3-6
                                        l-0.3-0.1C172.6,211.3,161,169.7,179.4,136.8z M405.8,357.3L405.8,357.3c-11-51.1-44.6-94.4-91.4-117.6
                                        c38.2-41.7,35.5-106.4-6.2-144.7s-106.4-35.5-144.7,6.2c-36,39.2-36,99.3,0,138.5c-46.8,23.3-80.4,66.6-91.4,117.6
                                        c-65.4-92.2-43.8-220,48.4-285.4s220-43.8,285.4,48.4c24.6,34.7,37.8,76.1,37.8,118.6C443.7,281.4,430.5,322.8,405.8,357.3z"/>
                                </g>
                            </g>
                        </svg>
                    <ul>
                        <li :key="request._id" v-for="request in $store.state.request">
                            <div>
                                <p> <b>{{ request.idApplicant.firstname + ' ' + request.idApplicant.lastname }}</b>  souhaite vous inviter dans la team <b>{{ request.idTeam.name}}</b></p>
                                <div class="containerBtn">
                                    <button  @click="acceptRequest(request.idTeam._id, request.idPlayer, $store.state.request.indexOf(request), request._id)">
                                        <img src="../assets/good.svg" />
                                    </button>
                                    <button @click="deleteRequest(request._id,  $store.state.request.indexOf(request))">
                                        <img src="../assets/close.svg" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </router-link>
            </div>
        </div>
    </nav>
</template>

<script>
    import Pusher from 'pusher-js';
    const pusher = new Pusher(process.env.VUE_APP_KEY, {
        cluster: process.env.VUE_APP_CLUSTER,
    });


    export default {
        name: "Navbar",
        data() {
            return {
            }
        },
        methods : {
            newNotification: function (data) {
                console.log(data);
                this.$store.dispatch('addCount');
                this.$store.dispatch('addRequest', data.requestTeam);
            },
            acceptRequest: async function(idTeam, idPlayer, index, idRequest) {
                const body = {
                    id: idTeam,
                    idPlayer: idPlayer
                };
                try {
                    const response = await this.$http.patch(process.env.VUE_APP_API + '/team/acceptRequest', body);
                    this.deleteRequest(idRequest, index);
                }catch (e) {
                    console.log(e)
                }
            },
            deleteRequest: async function(idRequest, index) {
                try {
                    const response = await this.$http.delete(process.env.VUE_APP_API + `/requestTeam/${idRequest}`);
                    this.$store.dispatch('deleteRequest', index)
                    this.$store.dispatch('lowCount');
                }catch (e) {
                    console.log(e)
                }
            },
        },
        mounted() {
            let id = JSON.stringify(localStorage.idPerson);
            var channel = pusher.subscribe('notif');
            channel.bind(`${id}`, this.newNotification);
            this.count = this.$store.state.request.length;
            console.log(this.count)
        }
    }
</script>

<style lang="scss" scoped>
    #header {
        .containerHeader {
            height: 9vh;
            position: sticky;
            display: flex;
            justify-content: space-between;
            width: 90%;
            margin: auto;
            a {
                text-decoration: none;
                margin: auto 0;
                color: #3F3F3F;
                img {
                    height: 5vh;
                }
            }
            .containerLogo {
                width: 8%;
                display: flex;
                img {
                    height: 90%;
                    display: block;
                    margin: auto;
                }
            }
            .containerMenu {
                width: 40%;
                display: flex;
                justify-content: space-between;
                #profil {
                    width: 12%;
                    position: relative;
                    .notif {
                        position: absolute;
                        background-color: #DB4437;
                        color: #FFFFFF;
                        padding: 5px 12px;
                        border-radius: 100%;
                        font-size: 12px;
                        right: 0;
                        bottom: -10px;
                    }
                    svg {
                        width: 50%;
                        margin: auto;
                        display: block;
                        .st0{
                            fill:#3F3F3F;
                            transition: 0.5s;
                        }
                    }
                    &:hover ul {
                        visibility: visible;
                        opacity: 1;
                    }
                    &:hover svg {
                        .st0{fill:#294FFF;}
                    }
                    ul {
                        visibility: hidden;
                        opacity: 0;
                        transition: visibility 0s, opacity 0.5s linear;
                        position: absolute;
                        width: min-content;
                        right: 0;
                        border: 3px solid #FFCA28;
                        border-radius: 20px;
                        padding: 8px;
                        background-color: #FFFFFF;
                        li {
                            list-style: none;
                            padding: 5px;
                            margin: 10px 0px;
                            .containerBtn {
                                width: 15%;
                                display:flex;
                                justify-content: space-between;
                                button {
                                    border: none;
                                    background-color: transparent;
                                    width: 45%;
                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                            p {
                                white-space: nowrap;
                            }
                        }
                    }
                }


            }
        }

    }

</style>
