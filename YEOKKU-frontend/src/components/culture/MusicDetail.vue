<template>
  <div class="musicDetail">
    <div id="musicDetail" v-if="Object.keys(this.GET_DETAIL_MUSIC).length > 0">
      <div class="card mb-3" style="user-select: auto">
        <h3 class="card-header" style="user-select: auto">음악 정보</h3>
        <div class="card-body" style="user-select: auto">
          <h5 class="card-title" style="user-select: auto">
            {{ this.GET_DETAIL_MUSIC.songTitle }}
            <span class="badge rounded-pill bg-light" style="user-select: auto"
              >{{ this.GET_DETAIL_MUSIC.chartRank }}위</span
            >
          </h5>
        </div>
        <img
          v-if="this.GET_DETAIL_MUSIC.albumInfoLink != null"
          :src="this.GET_DETAIL_MUSIC.albumInfoLink"
          class="d-block user-select-none"
          width="40%"
          title="이미지"
          style="font-size: 1.125rem; text-anchor: middle; user-select: auto"
        />
        <img
          v-if="this.GET_DETAIL_MUSIC.albumInfoLink == null"
          src="https://via.placeholder.com/150"
          class="d-block user-select-none"
          width="100%"
          title="기본이미지"
          style="font-size: 1.125rem; text-anchor: middle; user-select: auto"
        />
        <br />
        <table>
          <tbody style="user-select: auto">
            <tr style="user-select: auto">
              <!-- <td style="user-select: auto">Singer</td> -->
              <td scope="col" style="user-select: auto">
                {{ this.GET_DETAIL_MUSIC.singer }}
              </td>
            </tr>
          </tbody>
        </table>

        <div class="card-body" style="user-select: auto">
          <a
            :href="this.GET_DETAIL_MUSIC.albumImageLink"
            target="blank"
            class="card-link"
            style="user-select: auto"
          >
            SPOTIFY로 듣기
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
  name: "MusicList",
  data() {
    return {
      continentOptions: [],
      countryOptions: [],
      cityOptions: [],
      beforeCoutry: "",
      selected: "선택",
      musicList: [],
      msg: "서비스준비중입니다",
      detailMusic: {},
      mid: "",
    };
  },
  created() {
    console.log("music detail created.");
    // console.log(this.$router.params.movieID);
  },
  mounted() {
    // this.mid = this.$router.params.movieID;
  },
  computed: {
    ...mapGetters("musicStore", ["GET_DETAIL_MUSIC"]),
  },
  watch: {
    detailMusic: function () {
      console.log("detail component watch");
    },
  },
  methods: {},
  beforeupdate() {},
};
</script>

<style>
.musicDetail {
  width: 30vw;
  height: 20vh;
}
.d-block {
  border: black solid 3px;
  margin: auto;
}
</style>
