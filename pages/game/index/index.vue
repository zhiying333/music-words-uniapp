<template>
	<view class="content">
		<image class="logo" src="../../../static/logo.png" mode=""></image>
		<view class="play-cate">
			<view class="cate-item man-machine" @click="handleSkipGame(1)">
				人机接龙
			</view>
			<view class="cate-item on-line" @click="handleSkipGame(2)">
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
			uniCloud.callFunction({
				name:'handleControl',
				data: {
					action: 'test/sayHello',
				}
			}).then( res => {
				console.log('响应',res)
			})
			
			uniCloud.callFunction({
				name:'handleControl',
				data: {
					action: 'test/uploadMusic',
				}
			}).then( res => {
				console.log('响应2',res)
			})
		},
		methods: {
			//跳转至游戏界面
			handleSkipGame (flag) {
				uni.navigateTo({
					url: '/pages/game/game/game?mode=' + flag
				})
			}
		}
	}
</script>

<style lang="less">
	/*#ifdef MP-WEIXIN*/
	page {
		height: 100%;
	}
	/*#endif*/
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