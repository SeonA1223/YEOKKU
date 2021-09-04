import http from '@/util/http-common.js';
import router from '@/router/index.js';
const optimalRouteStore = {
	namespaced: true,
	state: {
		optimalList: Object,
		optimalDetail: Object,
		cur_mode: '',
		cur_way: '',
		markers: [],
		polyline: [],
	},
	actions: {
		set_optimal_detail({ commit }, data) {
			http
				.post('/path/detail', {
					roundPathCriteria: data.roundPathCriteria,
					pointsInOrder: data.pointsInOrder,
					totalDuration: data.totalDuration,
					totalDistance: data.totalDistance,
					travelMode: data.travelMode,
					message: data.message,
					// detailDirections: null,
				})

				.then((res) => {
					console.log('please data come');
					console.log(res);
					commit('SET_OPTIMAL_DETAIL', res);
				})
				.then(() => router.push({ name: 'PathDetail' }));
		},
	},
	getters: {
		GET_OPTIMAL_LIST(state) {
			return state.optimalList;
		},
		GET_OPTIMAL_DETAIL(state) {
			return state.optimalDetail;
		},
		GET_OPTIMAL_OPTIONS(state) {
			const data = {
				mode: state.cur_mode,
				way: state.cur_way,
			};
			return data;
		},
		GET_POLYLINE(state) {
			return state.polyline;
		},
		GET_MARKERS(state) {
			return state.markers;
		},
	},
	mutations: {
		SET_OPTIMAL_LIST(state, data) {
			state.cur_mode = data.mode;
			state.cur_way = data.way;
			state.optimalList = data;
		},
		SET_OPTIMAL_DETAIL(state, data) {
			state.polyline = [];
			state.markers = [];
			let temp = data.data;
			for (const index in temp) {
				if (index == 0) {
					let marker = {
						lat: temp[index].startPoint.lat,
						lng: temp[index].startPoint.lng,
						pointName: temp[index].startPoint.pointName,
					};
					state.markers.push(marker);
				}
				let marker = {
					lat: temp[index].endPoint.lat,
					lng: temp[index].endPoint.lng,
					pointName: temp[index].endPoint.pointName,
				};
				state.markers.push(marker);
				state.polyline.push(temp[index].polyline);
			}
			state.optimalDetail = data;
		},
	},
};
export default optimalRouteStore;
