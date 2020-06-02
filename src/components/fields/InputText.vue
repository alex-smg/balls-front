<template>
    <div class="formGroup inputText">
        <label :for="name">
            <p v-show="showLabel">{{label}}</p>
            <input type="text" :placeholder="placeholder" class="inputText"  v-model="value" :id="id" :name="name" @keyup="$emit('update:title', value)"/>
        </label>
        <span>{{error}}</span>
    </div>
</template>
<script>
    export default {
        name: "inputText",
        props: ['name', 'id', 'label', 'error', 'placeholder', 'showLabel'],
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
