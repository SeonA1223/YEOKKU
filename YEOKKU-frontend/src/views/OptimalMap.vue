<template>
	<div id="detail" class="my-5 py-5">
		<div class="row justify-content-center">
				<Map name="map" class="col-6 mx-4 diary"></Map>
				<div class="diary col-4 mx-4">
					<router-link to="/map/spotdetail"></router-link>
					<router-link to="/map/pathdetail"></router-link>
					<router-link to="/map/optlist"></router-link>
					<router-link to="/map/route"></router-link>
					<router-view></router-view>
				</div>
		</div>
	</div>
</template>
<script>
import Map from '../components/optimalmap/Map.vue';

export default {
	components: { Map },
	name: 'OptimalMap',
	computed: {},
};
</script>

<style>
/* #detail {
	width: 100vw;
	height: 100vh;
} */
</style>
