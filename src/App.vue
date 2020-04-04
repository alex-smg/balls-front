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

  h1, h2, h3, h4, h5, p, a, input, label, span {
    font-family: 'Open Sans', sans-serif;
  }
  .hind, button {
    font-family: 'Hind', sans-serif;
  }
  .btn-primary {
      background-color: #294FFF;
      border-radius: 2em;
      border: none;
      color: #FFFFFF;
      padding: 7px 35px;
      font-weight: 600;
      font-size: 16px;
      width: min-content;
      white-space: nowrap;
  }
  .btn-secondary {
      background-color: transparent;
      border-radius: 2em;
      border: 2px solid #294FFF;
      color: #294FFF;
      padding: 7px 35px;
      font-weight: 600;
      font-size: 16px;
      width: min-content;
      white-space: nowrap;
  }
  .flex {
    display: flex;
  }
</style>
