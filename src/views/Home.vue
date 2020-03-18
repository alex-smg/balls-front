<template>
  <div id="home">
    <div class="home_side_left">
      <div class="searchTitle">
        <h2>Home !</h2>
      </div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
  }
}
</script>

<style lang="scss" scoped>
  #home {
  display: flex;
    height: 100vh;
    .home_side_left{
      display: flex;
      width: 100%;
      text-align: center;
      .searchTitle{
        width: 90%;
        margin: auto;
      }
    }

  }

</style>
