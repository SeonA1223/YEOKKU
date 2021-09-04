<template>
  <div id="detail" class="my-5 py-5">
    <div class="row justify-content-center">
      <MusicList name="music" class="col-6 mx-5 diary"></MusicList>
      <div class="diary col-4 mx-4">
        <router-link to="/music/musicDetail"></router-link>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import MusicList from "../components/culture/MusicList.vue";
// import MovieDetail from "../components/culture/MovieDetail.vue";
export default {
  components: { MusicList },
  name: "Music",
  computed: {},
};
</script>

<style>
/* #detail {
  width: 100vw;
  height: 100vh;
} */
</style>
