<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: "Home",
    components: {
      Navbar
    }
  }
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  outline: none;
  box-sizing: border-box;

}

h1, h2, h3, h4, h5, p, a, button, input, label {
  font-family: 'Nunito', sans-serif;
}
  .btn-primary {
      background-color: #294FFF;
      border-radius: 2em;
      border: none;
      color: #FFFFFF;
      padding: 1% 4%;
      font-weight: 700;
      font-size: 16px;
      width: min-content;
  }
</style>
