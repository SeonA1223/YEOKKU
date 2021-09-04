<template>
	<div>
		<div v-cloak></div>
		<p></p>
		<div
			v-for="(data, index) in GET_OPTIMAL_LIST.data"
			v-bind:key="`round${index}`"
			@click="detailOptimal(data)"
		>
		<p></p>
			<h2>{{ GET_OPTIMAL_LIST.way | setWay() }}

			{{ data.pathCriteria | setType() }}</h2>
	
			<li v-for="(path, index) in data.pointsInOrder" v-bind:key="`p${index}`">
				{{ path.pointName }}
			</li>
			<p></p>
			{{ data.totalDistance }}
			{{ data.totalDuration }}
			{{ data.travelMode | setMode() }}
		</div>
		<div class="mt-3">
			<button v-on:click="mvList" type="button" class="btn btn-outline-primary" style="user-select: auto;">경로리스트이동</button>
		</div>
		<p></p>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import http from '@/util/http-common.js';
export default {
	name: 'OptimalList',
	data() {
		return {
			// pathType: '',
		};
	},
	computed: {
		...mapGetters('optimalRouteStore', ['GET_OPTIMAL_LIST']),
	},
	filters: {
		setType(val) {
			if (val == 'distance') return '거리';
			else return '시간';
		},
		setMode(val) {
			if (val == 'driving') return '차';
			else if (val == 'transit') return '대중교통';
			else if (val == 'bicycling') return '자전거';
			else return '도보';
			//나중에 이미지로 변경
		},
		setWay(val) {
			if (val == 'oneway') return '편도';
			else return '순환';
		},
	},
	methods: {
		...mapActions('optimalRouteStore', ['set_optimal_detail']),
		detailOptimal(data) {
			this.set_optimal_detail(data);
		},
		mvList: function () {
			this.$router.push('/map/route');
		},
	},
};
</script>

<style>
[v-cloak]::before {
	content: '최적경로를 찾고 있습니다.';
}
[v-cloak] > * {
	display: none;
}
</style>
