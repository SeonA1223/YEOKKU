import http from "@/util/http-common.js";
const movieStore = {
	namespaced: true,
	state: {
        detailMovie: {},
	},
    actions: {
        SET_MOVIE_ID( { commit }, data) {
            http
            .get("pointinfo/movie/detail/" + data)
            .then(({ data }) => {

                // console.log(this.detailMovie);
                commit("set_movie_id",data);
            })
            .catch((err) => {
              console.dir(err);
            });
        }
    },
	getters: {
        GET_DETAIL_MOVIE(state) {
            return state.detailMovie;
        },
	},
	mutations: {
        set_movie_id(state, data) {
            state.detailMovie = data;
        }
	},
};

export default movieStore;
