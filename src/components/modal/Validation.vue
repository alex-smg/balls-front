<template>
    <div id="validation">
       <div>
           <img src="../../assets/validation.svg">
       </div>
        <div>
            <p>{{message}}</p>
        </div>
        <div>
            <button class="btn-primary" @click.prevent="close()">Fermer</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "validation",
        props: ['message'],
        data() {
            return{
            }
        },
        methods: {
            close: function () {
                this.$emit('reset-teamcreated')
                this.$emit('close-modal');
            }
        }

    }
</script>

<style lang="scss" scoped>
    #validation {
        width: 100%;
        white-space: nowrap;
        padding: 50px;
        font-weight: 700;
        div{
            margin: auto;
            button {
                display: block;
                margin: 30px auto 0 auto;

            }
        }
    }
</style>
