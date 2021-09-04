<template>
	<div>
		<div>
			<span
				><p>
					{{ SPECIFIC_SPOT_DETAIL.pointName }}
				</p>
				<p>{{ SPECIFIC_SPOT_DETAIL.cityName }}</p>
			</span>
			<p>{{ SPECIFIC_SPOT_DETAIL.desc }}</p>
		</div>
		<div>
			<button v-on:click="mvRouteList" type="button" class="btn btn-outline-primary" style="user-select: auto;">경로추가</button>
			<button v-on:click="mvList" type="button" class="btn btn-outline-primary" style="user-select: auto;">경로리스트이동</button>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
	name: 'TourSpotDetail',
	data() {
		return {};
	},
	computed: {
		...mapGetters('mapStore', ['SPECIFIC_SPOT_DETAIL', 'GET_ISAVAILABLE_SPOT']),
	},
	methods: {
		...mapMutations('mapStore', ['SET_ADD_SPOT_IN_ROUTE']),

		mvRouteList: function () {
			console.log(this.SPECIFIC_SPOT_DETAIL.pointName);
			let data = {
				lat: this.SPECIFIC_SPOT_DETAIL.lat,
				lng: this.SPECIFIC_SPOT_DETAIL.lng,
				pointId: this.SPECIFIC_SPOT_DETAIL.pointId,
				pointName: this.SPECIFIC_SPOT_DETAIL.pointName,
				address: this.SPECIFIC_SPOT_DETAIL.address,
			};
			this.SET_ADD_SPOT_IN_ROUTE(data);
			if (this.GET_ISAVAILABLE_SPOT === true) {
				this.$router.push('/map/route');
			} else {
				alert('이미 저장된 관광지이거나 관광지 10개 이상을 추가하였습니다!');
			}
			// console.log('isREturn' + ret);
			// if (ret == false) {
			// 	alert('이미 저장된 관광지입니다!');
			// } else {
			// 	//router 이동
			// 	console.log('경로가 추가됨?');
			// 	this.$router.push('/route');
			// }
		},
		mvList: function () {
			this.$router.push('/map/route');
		},
	},
};
</script>

<style></style>
