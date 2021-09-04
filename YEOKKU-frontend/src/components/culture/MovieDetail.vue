<template>
  <div>
    <div id="movieDetail" v-if="Object.keys(this.GET_DETAIL_MOVIE).length > 0">
      <div class="card mb-3" style="user-select: auto" >
        <h3 class="card-header" style="user-select: auto">영화 정보</h3>
        <div class="card-body" style="user-select: auto">
          <h5 class="card-title" style="user-select: auto">
            {{ this.GET_DETAIL_MOVIE.movieTitle }}
            <span class="badge rounded-pill bg-light" style="user-select: auto;">{{ this.GET_DETAIL_MOVIE.rating }}</span>
          </h5>
          <h6 class="card-subtitle text-muted" style="user-select: auto">
            {{ this.GET_DETAIL_MOVIE.genre }}
          </h6>
        </div>
        <img
          v-if="this.GET_DETAIL_MOVIE.imageUrl != null"
          :src="this.GET_DETAIL_MOVIE.imageUrl"
          class="d-block user-select-none"
          width="50%"
          title="이미지"
          style=" display: block;
margin-left: auto;
margin-right: auto; font-size: 1.125rem; text-anchor: middle; user-select: auto"
        />
        <img
          v-if="this.GET_DETAIL_MOVIE.imageUrl == null"
          src="https://via.placeholder.com/150"
          class="d-block user-select-none"
          width="50%"
          height="50%"
          align="center"
          title="기본이미지"
          style="          display: block;
margin-left: auto;
margin-right: auto; font-size: 1.125rem; text-anchor: middle; user-select: auto"
        />
        <div class="card-body" style="user-select: auto">
          <p class="card-text" style="user-select: auto">
            {{ this.GET_DETAIL_MOVIE.plot }}
          </p>
        </div>
        <table>
          <tbody style="user-select: auto">
            <tr style="user-select: auto">
               <td style="user-select: auto">개봉년도</td>
              <td scope="col" style="user-select: auto"> {{ this.GET_DETAIL_MOVIE.prodYear }}년</td>
            </tr>
                        <tr style="user-select: auto">
               <td style="user-select: auto">러닝타임</td>
              <td scope="col" style="user-select: auto">{{ this.GET_DETAIL_MOVIE.runtime }}분 </td>
            </tr>
          </tbody>
        </table>

              <div class="card" style="user-select: auto">
        <div class="card-body" style="user-select: auto">
          <h4 class="card-title" style="user-select: auto">출연 / 제작</h4>
          <h6 class="card-subtitle mb-2 text-muted" style="user-select: auto">
            {{ this.GET_DETAIL_MOVIE.director }}
          </h6>
          <span
            class="card-text"
            style="user-select: auto"
            v-for="actor in this.GET_DETAIL_MOVIE.actors"
            :key="actor.actorId"
          >
            {{ actor }}
          </span>
        </div>
      </div>
        <div class="card-body" style="user-select: auto">
          <a
            :href="this.GET_DETAIL_MOVIE.infoUrl"
            target="blank"
            class="card-link"
            style="user-select: auto"
          >
            관련 link
          </a>
        </div>
        <!-- <div class="card-footer text-muted" style="user-select: auto">2 days ago</div> -->
      </div>


    </div>
  </div>
</template>

<script>
// import http from "@/util/http-common.js";
import { mapGetters } from "vuex";
// import { movieID } from "./MovieList.vue";
export default {
  name: "MovieList",
  data() {
    return {
      continentOptions: [],
      countryOptions: [],
      cityOptions: [],
      beforeCoutry: "",
      selected: "선택",
      movieList: [],
      msg: "서비스준비중입니다",
      detailMovie: {},
      mid: "",
    };
  },
  created() {
    console.log("movie detail created.");
    // console.log(this.$router.params.movieID);
  },
  mounted() {
    // this.mid = this.$router.params.movieID;
  },
  computed: {
    ...mapGetters("movieStore", ["GET_DETAIL_MOVIE"]),
  },
  watch: {
    detailMovie: function () {
      console.log("detail component watch");
    },
  },
  methods: {},
  beforeupdate() {},
};
</script>

<style>
#movieList {
  width: 50vw;
  height: 50vh;
}
</style>
