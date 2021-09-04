const mapStore = {
	namespaced: true,
	state: {
		specificSpot: Object,
		//Map을 쓰고 싶었는데 vue2에서는 사용 불가.. 3부터 가능하다고 함
		routeList: [],
		specificRoute: [],
		isAvailableStoreinRouteList: true,
		isDuplicateCity: false,
		curCountry: '',
	},
	actions: {},
	getters: {
		SPECIFIC_SPOT_DETAIL(state) {
			console.log(state.specificSpot);
			return state.specificSpot;
		},
		GET_ISAVAILABLE_SPOT(state) {
			if (state.isAvailableStoreinRouteList == false) return false;
			else return true;
		},
		GET_CURRENT_ROUTE(state) {
			return state.specificRoute;
		},
		GET_ISDUPLICATECITY(state) {
			return state.isDuplicateCity;
		},
		GET_CURCOUNTRY(state) {
			return state.curCountry;
		},
	},
	mutations: {
		SET_SPECIFIC_SPOT(state, data) {
			console.log(state.specificSpot);
			state.specificSpot = data;
		},
		SET_ADD_SPOT_IN_ROUTE(state, data) {
			state.isAvailableStoreinRouteList = true;
			console.log('이미 저장된 관광지 데이터 보기 ');
			console.log(state.specificRoute);
			//10개 초과하는 경우 저장 불가
			if (state.specificRoute.length > 10) {
				state.isAvailableStoreinRouteList = false;
			}
			if (state.specificRoute.length > 0 && state.specificRoute.length <= 10) {
				for (const point of state.specificRoute) {
					//이미 루트에 저장된 값이면 저장 불가
					if (point.pointId == data.pointId) {
						state.isAvailableStoreinRouteList = false;
					}
				}
			}
			//조건에 다 만족하는 경우 데이터 추가
			if (state.isAvailableStoreinRouteList == true) {
				state.specificRoute.push(data);
				console.log(state.specificRoute);
			}
		},
		CHANGE_TOUR_LIST(state, payload) {
			console.log(payload);

			//이전 도시에 경로들 routeList 우선 추가
			if (state.specificRoute.length > 0) {
				let data = {
					country: payload.beforeCnt,
					list: state.specificRoute,
				};
				state.routeList.push(data);
				console.log(state.routeList);
			}

			state.isDuplicateCity = false;
			if (state.routeList.length > 0) {
				for (const index in state.routeList) {
					//현재 선택한 값이 중복된 값이 있을 경우,
					if (state.routeList[index].country == payload.curCnt) {
						state.isDuplicateCity = true;
						state.specificRoute = [];
						state.specificRoute = state.routeList[index].list;
						//이미 추가했던 값이 있다면 해당하는 값 지우기
						//그래야 중복되지 않고 routeList에 저장가능
						state.routeList.splice(index, 1);
					}
				}
			}

			if (state.isDuplicateCity == false) {
				state.specificRoute = [];
			}

			//중복된 값이 없을 경우, 이전 값은 저장하고 specificRoute를 초기화시킨다.
		},
		DELETE_A_TOUR(state, idx) {
			state.specificRoute.splice(idx, 1);
		},
		SET_CUR_COUNTRY(state, country) {
			state.curCountry = country;
		},
	},
};

export default mapStore;
