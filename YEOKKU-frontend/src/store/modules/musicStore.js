import http from "@/util/http-common.js";
const musicStore = {
    namespaced: true,
    state: {
        detailMusic: {},
    },
    actions: {
        SET_MUSIC_ID({ commit }, data) {
            http
                .get("pointinfo/music/detail/" + data)
                .then(({ data }) => {

                    // console.log(this.detailMovie);
                    commit("set_music_id", data);
                })
                .catch((err) => {
                    console.dir(err);
                });
        }
    },
    getters: {
        GET_DETAIL_MUSIC(state) {
            return state.detailMusic;
        },
    },
    mutations: {
        set_music_id(state, data) {
            state.detailMusic = data;
        }
    },
};

export default musicStore;
