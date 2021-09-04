// import http from "@/util/http-common.js";
const bookStore = {
	namespaced: true,
	state: {
        detailBook: {},
	},
    actions: {
        SET_BOOK_ISBN( { commit }, data) {
           
            commit("set_book_isbn",data);
            
        }
    },
	getters: {
        GET_DETAIL_BOOK(state) {
            return state.detailBook;
        },
	},
	mutations: {
        set_book_isbn(state, data) {
            state.detailBook = data;
        }
	},
};

export default bookStore;
