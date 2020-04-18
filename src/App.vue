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

  h1, h2, h3, h4, h5, p, a, input, label, span, textarea {
    font-family: 'Open Sans', sans-serif;
    color: #3F3F3F;
  }
  .hind, button {
    font-family: 'Hind', sans-serif;
  }
  .btn-primary {
      background-color: #294FFF;
      border-radius: 2em;
      border: none;
      color: #FFFFFF;
      padding: 5px 35px;
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
      padding: 5px 35px;
      font-weigFht: 600;
      font-size: 16px;
      width: min-content;
      white-space: nowrap;
  }
  .formGroup {
    label {
      font-weight: 600;
    }
    input[type=text], textarea {
      width: 100%;
      /*
      box-shadow: 0px 2px 15px #DFDDDD;*/
      padding: 10px 20px;
      border-radius: 0.5em;
      border: 1px solid #DEDED7;
      resize: none;
      transition: 0.5s;
    }
    input:focus, textarea:focus {
      border: 2px solid #294FFF;
    }
  }
  .flex {
    display: flex;
  }

  input[type="checkbox"]:disabled:not(:checked) {
    box-shadow: none;
    border-color: black;
    background-color: #e9e9e9;
  }

  .tgl {
    display: none;

    // add default box-sizing for this scope
    &,
    &:after,
    &:before,
    & *,
    & *:after,
    & *:before,
    & + .tgl-btn {
      box-sizing: border-box;
      &::selection {
        background: none;
      }
    }

    + .tgl-btn {
      outline: 0;
      display: block;
      width: 3em;
      height: 1.5em;
      position: relative;
      cursor: pointer;
      user-select: none;
      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }

      &:after {
        left: 0;
      }

      &:before {
        display: none;
      }
    }

    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }
  .tgl-light {
    + .tgl-btn {
      background: #f0f0f0;
      border-radius: 2em;
      padding: 2px;
      transition: all .4s ease;
      &:after {
        border-radius: 50%;
        background: #fff;
        transition: all .2s ease;
      }
    }
    &:checked + .tgl-btn {
      background: #294FFF;
    }
  }

  button {
    cursor: pointer;
  }
</style>
