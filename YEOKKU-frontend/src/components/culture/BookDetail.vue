<template>
  <div>
    <div id="bookDetail" >
      <div class="card mb-3" style="user-select: auto" >
        <h3 class="card-header" style="user-select: auto">책 정보</h3>
        <div class="card-body" style="user-select: auto">
          <h5 class="card-title" style="user-select: auto">
            {{ this.GET_DETAIL_BOOK.titleInfo }}
             <span class="badge rounded-pill bg-light" style="user-select: auto;">isbn : {{ this.GET_DETAIL_BOOK.isbn }}</span>
          </h5>
          <h6 class="card-subtitle text-muted" style="user-select: auto">
            {{ this.GET_DETAIL_BOOK.authorInfo }}
          </h6>
        </div>
        <img
          v-if="this.GET_DETAIL_BOOK.imageUrl != null"
          :src="this.GET_DETAIL_BOOK.imageUrl"
          class="d-block user-select-none"
          width="50%"
          title="이미지"
          style=" display: block;
margin-left: auto;
margin-right: auto; font-size: 1.125rem; text-anchor: middle; user-select: auto"
        />
        <img
          v-if="this.GET_DETAIL_BOOK.imageUrl == null"
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

        </div>
        <table >
          <tbody style="user-select: auto">
            <tr style="user-select: auto">
               <td class="ml-3" style="user-select: auto">출판사</td>
              <td class="mr-3" style="user-select: auto"> {{ this.GET_DETAIL_BOOK.pubInfo }}</td>
            </tr>
            <tr style="user-select: auto">
               <td  class="ml-3" style="user-select: auto">출판일</td>
              <td  class="ml-3" style="user-select: auto">{{ this.GET_DETAIL_BOOK.expDate }} </td>
            </tr>
             <tr style="user-select: auto">
               <td class="ml-3" style="user-select: auto">가격</td>
              <td style="user-select: auto">{{ this.GET_DETAIL_BOOK.price }}원 </td>
            </tr>
          </tbody>
        </table>

      </div>
      <!-- <div>
        <br />
        가격: {{ this.GET_DETAIL_BOOK.price }} ({{
          this.GET_DETAIL_BOOK.currency_code
        }})<br />
        isbn : {{ this.GET_DETAIL_BOOK.isbn }}
      </div> -->

  </div>
  </div>
</template>

<script>
// import http from "@/util/http-common.js";
import { mapGetters } from "vuex";
// import { bookList } from "./BookList.vue";
export default {
  name: "BookDetail",
  data() {
    return {
      continentOptions: [],
      countryOptions: [],
      cityOptions: [],
      beforeCoutry: "",
      selected: "선택",
      bookList: [],
      msg: "서비스준비중입니다",
      detailBookInfo: {},
      isbn: "",
    };
  },
  created() {
    console.log("book detail created.");
    // console.log(bookList);
    // console.log(this.$router.params.movieID);
  },
  mounted() {
    // this.mid = this.$router.params.movieID;
  },
  computed: {
    ...mapGetters("bookStore", ["GET_DETAIL_BOOK"]),
  },
  watch: {
    detailBook: function () {
      console.log("detail component watch");
    },
  },
  methods: {},
  beforeupdate() {},
};
</script>

<style>
#bookList {
  width: 50vw;
  height: 50vh;
}
</style>
