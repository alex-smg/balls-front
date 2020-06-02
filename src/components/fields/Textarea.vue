<template>
    <div class="formGroup textarea">
        <label :for="name">
            <p>{{label}}</p>
            <textarea class="inputText" :placeholder="placeholder" v-model="value" :id="id" :name="name" @keyup="$emit('update:title', value)"></textarea>
        </label>
    </div>
</template>
<script>
    export default {
        name: "textarea",
        props: ['name', 'id', 'label', 'placeholder'],
        components: {},
        data() {
            return {
                value: ''
            }
        }
    }
</script>
<style>
</style>
