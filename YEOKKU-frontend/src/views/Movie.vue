<template>
  <div id="detail" class="my-5 py-5">
    <div class="row justify-content-center">
    <MovieList name="movie" class="col-6 mx-5 diary"></MovieList>
    <div class="diary col-4 mx-4">
    <router-link to="/movie/movieDetail"></router-link>
    <router-view></router-view>
    </div>
    </div>
  </div>
</template>
<script>
import MovieList from "../components/culture/MovieList.vue";
// import MovieDetail from "../components/culture/MovieDetail.vue";
export default {
  components: { MovieList },
  name: "Movie",
  computed: {},
};
</script>

<style>
/* #detail {
  width: 100vw;
  height: 100vh;
} */
</style>
