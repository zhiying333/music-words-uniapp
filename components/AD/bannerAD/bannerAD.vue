<template>
	<!-- 多平台兼容 -->
	<view class="ad-view">
	  <ad adpid="1111111111" :unit-id="id" appid="" apid="" type="feed"></ad>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				id:'',//微信小程序广告位id
			}
		}
	}
</script>

<style>
</style>
