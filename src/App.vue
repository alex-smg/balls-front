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
      padding: 5px 45px;
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
  .btn-red {
    border: 2px solid #294FFF;
    color: #294FFF;
  }
  .formGroup {
    label {
      font-weight: 600;
      width: 100%;
    }
    input[type=text], textarea, input[type=number] {
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
      margin-top: 18px;
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

  input[type=radio] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-color: #FFFFFF;
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 40px;
    border: 1px solid #8C8C8C;
  }

  input[type=radio]:checked {
    background: #294FFF;
    margin: 0px;
    position: relative;
    &:before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      right: 50%;
      bottom: 50%;
      transform: translate(-50%, -50%);
      display: block;
      background-color: #ffffff;
      width: 8px;
      height: 8px;
      border-radius: 20px;
      transition: 0.5s;
    }
  }

  input[type=checkbox] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
  }
  input[type=checkbox] {
    border-radius: 4px;
    height: 25px;
    width: 25px;
    background: #fff;
    border: 1px solid #ccc;
    margin: auto 0 auto 0;
    cursor: pointer;
  }
  input[type="checkbox"]:checked {
    background: #294FFF;
    margin:0px;
    position: relative;
    &:before {
      content: url(assets/check.svg);
      display: block;
      color: grey;
      position: absolute;
    }
  }

  input[type=number] {

  }

  button {
    cursor: pointer;
  }
</style>
