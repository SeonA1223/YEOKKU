<template>
  <div>
    <!-- 대륙 -->
    <label for="exampleSelect1" class="form-label mt-4">어떤 영화 보실래요?</label>
    <div class="form-group row mx-auto" id="selectArea">
      <div class="col-2"></div>
      <div class="col-4">
        <select
          name="continent"
          id="continent"
          class="form-select"
          ref="continent"
          @change="selectContinent($event)"
        >
          <option>Select Continent</option>
          <option v-for="option in continentOptions" :key="option.continentName">
            {{ option.continentName }}
          </option>
        </select>
      </div>
      <!-- 나라 -->
      <div class="col-4">
        <select
          name="country"
          id="country"
          ref="country"
          class="form-select"
          @change="selectCountry($event)"
        >
          <option
            v-for="option in countryOptions"
            :key="option.countryCode"
            :continentvalue="option"
          >
            {{ option.countryName }}
          </option>
        </select>
      </div>

      <div id="movieList">
        <!-- <ul>
          <li
            v-for="movie in movieList"
            :key="movie.movieID"
            v-on:click="movieDetail(movie.movieID)"
          >
            영화제목:{{ movie.movieTitle }} 개봉년도:{{ movie.prodYear }} 장르 :
            {{ movie.genre }}

            <button>스크랩하기</button>
          </li>
        </ul> -->

        <table class="table table-hover" style="user-select: auto">
          <thead style="user-select: auto">
            <tr style="user-select: auto">
              <th scope="col" style="user-select: auto">영화제목</th>
              <th scope="col" style="user-select: auto">장르</th>
              <th scope="col" style="user-select: auto">개봉년도</th>
              <th scope="col" style="user-select: auto">스크랩</th>
            </tr>
          </thead>
          <tbody style="user-select: auto">
            <tr
              class="table-secondary"
              style="user-select: auto"
              v-for="movie in movieList"
              :key="movie.movieID"
              v-on:click="movieDetail(movie.movieID)"
            >
              <th scope="row" style="user-select: auto">{{ movie.movieTitle }}</th>
              <td style="user-select: auto">{{ movie.genre }}</td>
              <td style="user-select: auto">{{ movie.prodYear }}</td>
              <td style="user-select: auto">
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" style="user-select: auto;">
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import http from "@/util/http-common.js";
import { mapActions } from "vuex";
export default {
  name: "MovieList",
  data() {
    return {
      continentOptions: [],
      countryOptions: [],
      cityOptions: [],
      beforeCoutry: "",
      selected: "Select Country",
      movieList: [],
      msg: "서비스준비중입니다",
    };
  },
  created() {
    http
      .get("select/continent")
      .then(({ data }) => {
        this.continentOptions = data;
      })
      .catch((err) => {
        console.dir(err);
      });
  },
  mounted() {},
  computed: {},
  methods: {
    ...mapActions("movieStore", ["SET_MOVIE_ID"]),
    selectContinent(event) {
      //데이터 변경될 때,
      let continent = event.target.value;
      http
        .get("select/country/" + continent)
        .then(({ data }) => {
          this.countryOptions = data;
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    selectCountry(event) {
      //데이터 변경될 때,
      let country = event.target.value;
      console.log("pointinfo/movie/" + country);
      http
        .get("pointinfo/movie/" + country)
        .then(({ data }) => {
          this.movieList = data;
          console.log(this.movieList);
          if (this.movieList.length == 0) {
            this.isAvailservice = false;
            alert(this.msg);
          }
        })
        .catch((err) => {
          console.dir(err);
        });
    },
    movieDetail: function (mid) {
      // console.log(mid);
      this.SET_MOVIE_ID(mid);
      this.$router.push("/movie/moviedetail");
    },
  },
};
</script>

<style>
#movieList {
  width: 50vw;
  /* height: 50vh; */
}

.form-select {
  display: block;
  width: 100%;
  padding: 0.375rem 2.25rem 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23333' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 16px 12px;
  border: 2px solid #333;
  border-radius: 55px 225px 15px 25px/25px 25px 35px 355px !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
.form-select:focus {
  border-color: #333;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(51, 51, 51, 0.25);
}
.form-select[multiple],
.form-select[size]:not([size="1"]) {
  padding-right: 0.75rem;
  background-image: none;
}
.form-select:disabled {
  background-color: #f7f7f9;
}
.form-select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #212529;
}
.form-select-sm {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  font-size: 0.875rem;
}
.form-select-lg {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  font-size: 1.25rem;
}
</style>
