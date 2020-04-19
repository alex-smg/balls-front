<template>
    <div class="insideCard">
        <div class="imgTournament">
            <img :src="baseUrl +'/'+ data.image">
        </div>
        <div>
            <h5>{{data.name}}</h5>
            <p>{{date_begin}}</p>
        </div>
        <div class="picto">
            <img src="../../assets/team.svg">
            <img src="../../assets/gender.svg">
            <img src="../../assets/jauge.svg">
        </div>
        <div class="link">
            <router-link class="btn-primary" :to="{path: 'tournament/' + data._id}">Voir</router-link>
        </div>
    </div>
</template>
<script>
    // @ is an alias to /src
    export default {
        name: 'home',
        props: ['tournament'],
        components: {
        },
        data () {
            return {
                data: this.tournament,
                baseUrl : process.env.VUE_APP_API,
                date_begin: ''
            }
        },

        mounted() {
            this.date_begin = new Date(this.data.date_begin);
            this.date_begin = this.date_begin.toLocaleDateString();
        }
    }
</script>

<style lang="scss" scoped>
.card {
    width: 15%;
    padding: 2% 2%;
    border: 2px solid #FFCA28;
    border-radius: 2em;
    .imgTournament {
        width: 8vw;
        height: 8vw;
        border: 4px solid #FFCA28;
        margin: auto;
        overflow: hidden;
        border-radius: 8vw;
        display: flex;
        img {
            width: 100%;
            display: block;
            margin: auto;
        }
    }
    .picto {
        display: flex;
        justify-content: space-between;
        margin: 7% 0;
        img {
            margin: auto;
        }
    }
    .link {
        a {
            display: block;
            margin: auto;
            text-decoration: none;
        }
    }
    h5 {
        width: 100%;
        text-align: center;
        margin: 7% 0;
    }
    p {
        text-align: center;
    }
}

</style>
