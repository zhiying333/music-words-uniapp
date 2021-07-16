<template>
	<view class="content">
		<image class="logo" src="../../static/logo.png" mode=""></image>
		<view class="play-cate">
			<view class="cate-item man-machine">
				人机接龙
			</view>
			<view class="cate-item on-line">
				歌词联机
			</view>
		</view>
		<view class="welcome">
			From 三三 with Love ❤
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="less">
	uni-page-body {
		height: 100%;
	}
	.content {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		.logo {
			margin: 20rpx;
		}
		.play-cate {
			.cate-item {
				width: 275rpx;
				height: 100rpx;
				line-height: 100rpx;
				background-color: skyblue;
				margin: 20rpx;
				text-align: center;
				border-radius: 20rpx;
				color: #f00;
			}
		}
		.welcome {
			position: absolute;
			bottom: 30rpx;
		}
	}
</style>