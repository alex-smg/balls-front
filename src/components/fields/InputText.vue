<template>
    <div class="formGroup inputText">
        <label :for="name">
            <p v-show="showLabel">{{label}}</p>
            <input type="text" :placeholder="placeholder" class="inputText"  v-model="title" :id="id" :name="name" @input="$emit('update:title', $event.target.value)"/>
        </label>
        <span>{{error}}</span>
    </div>
</template>
<script>
    export default {
        name: "inputText",
        props: ['name', 'id', 'label', 'error', 'placeholder', 'showLabel', 'title'],
        components: {},
        data() {
            return {
                value: ''
            }
        },
        mounted() {
            console.log(this.title)
        }
    }
</script>
<style>
</style>
