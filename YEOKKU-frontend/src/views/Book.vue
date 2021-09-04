<template>
   <div id="detail" class="my-5 py-5">
    <div class="row justify-content-center">
    <BookList name="book" class="col-6 mx-5 diary"></BookList>
    <div class="diary col-4 mx-4">
    <router-link to="/book/BookDetail"></router-link>
    <router-view></router-view>
    </div>
    </div>
  </div>
</template>
<script>
import BookList from "../components/culture/BookList.vue";
// import MovieDetail from "../components/culture/MovieDetail.vue";
export default {
  components: { BookList },
  name: "Book",
  computed: {},
};
</script>

<style>
/* #detail {
  width: 100vw;
  height: 100vh;
} */
</style>
