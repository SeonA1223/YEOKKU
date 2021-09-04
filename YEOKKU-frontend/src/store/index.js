import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import mapStore from '@/store/modules/mapStore.js';
import optimalRouteStore from '@/store/modules/optimalRouteStore.js';
import movieStore from './modules/movieStore';
import musicStore from './modules/musicStore';
import bookStore from './modules/bookStore';

const store = new Vuex.Store({
	modules: {
		mapStore: mapStore,
		optimalRouteStore: optimalRouteStore,
		movieStore: movieStore,
		bookStore: bookStore,
		musicStore: musicStore,
	},
});

export default store;
