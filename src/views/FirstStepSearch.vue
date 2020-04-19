<template>
  <div id="home">
    <div class="home_side_left">
      <div class="searchTitle">
        <h2>Trouver un tournois près de chez vous !</h2>
        <Search></Search>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from "../components/search/Search.vue"
export default {
  name: 'firsStepSearch',
  components: {
    Search
  }
}
</script>

<style lang="scss" scoped>
  #home {
  display: flex;
    justify-content: space-between;
    height: 82vh;
    .home_side_left{
      display: flex;
      width: 100%;
      text-align: center;
      .searchTitle{
        width: 70%;
        margin: auto;
        h2 {
          margin-bottom: 3%;
        }
      }
    }
    .home_side_right {
      position: fixed;
      top: 0;
      right: 0;
      width: 30vw;
      .deco{
        position: absolute;
        transform: rotate(45deg);
        border-radius: 5em;
      }
      .deco_opa{
        background-color: #FFCA28;
        top: 0;
        width: 55vw;
        height: 55vw;
        right: -40vw;
        opacity: 0.28;
      }
      .deco_tall {
        width: 55vw;
        height: 55vw;
        display: flex;
        top: 30vh;
        right: -30vw;
        background-color: #FFCA28;
        .deco_little{
          background-color: #FFD042;
          transform: rotate(90deg);
          margin: auto;
          width: 30vw;
          height: 30vw;
          border-radius: 5em;
        }
      }
      /*img {
        position: absolute;
        top: -8vh;
        right: 0;
      }*/
    }
  }

</style>
