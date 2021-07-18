<template>
	<view class="game-page">
		<view class="bg">
			<image src="../../../static/images/bg.gif" mode="" class="bg-img"></image>
		</view>
		<view class="play-user">
			<view class="user-item">
				<view class="avatar">
					<u-avatar :src="avatarSrc" mode="circle" show-sex></u-avatar>
				</view>
				<view class="nickname">
					之之酱
				</view>
			</view>
			<view class="user-item">
				<view class="avatar">
					<u-avatar :src="avatarSrc" mode="circle" show-sex></u-avatar>
				</view>
				<view class="nickname">
					人机小白白
				</view>
			</view>
		</view>
		<view class="song-turntable">
			<Song></Song>
		</view>
		<view class="words-song">
			<view class="tips">
				<!-- {{ player ? players : '人机小白白' }} -->
				人机小白白:
			</view>
			<view class="top">
				<text class="t-text">你骄傲的飞远</text>
				<text class="one">你骄傲的飞远</text>
			</view>
			<view class="bottom">
				<text class="b-text">我栖息的夏天</text>
				<text class="two">我栖息的夏天</text>
			</view>
		</view>
		<view class="play-tips">
			<u-notice-bar mode="horizontal" :list="list"></u-notice-bar>
		</view>
		<!-- <view class="music">
			<audio class="audio" style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
		</view> -->
		<!-- 倒计时 -->
		<view class="down-time">
			<view class="timer">
				倒计时{{downTime}}秒
			</view>
		</view>
		<view class="answer">
			<view class="gif-img">
				<image class="left" src="/static/images/left.png" mode=""></image>
				<image class="right" src="/static/images/right.png" mode=""></image>
			</view>
			<view class="a-img">
				<image class="img" src="/static/images/mkf.png" mode=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	import Song from '../../../components/Song/song.vue'
	export default {
		components: {
			Song
		},
		
		data () {
			return {
				avatarSrc: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				list: [
					'请以第二句歌词末尾的字或同音字开头，接两句歌词'
				],
				// current: {
				// 	poster: 'https://bjetxgzv.cdn.bspapp.com/VKCEYUGU-uni-app-doc/7fbf26a0-4f4a-11eb-b680-7980c8a877b8.png',
				// 	name: '致爱丽丝',
				// 	author: '暂无',
				// 	src: '../../../static/music/audio.mp3',
				// },//当前播放音乐数据
				downTime: 30,//倒计时
			}
		},
		
		onLoad(option) {
			console.log(option.mode)
		}
	}
</script>

<style lang="less">
	uni-page-body {
		height: 100%;
	}
	.game-page {
		height: 100%;
		.bg {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			// opacity: 0.7;
			z-index: -1;
			.bg-img {
				width: 100%;
				height: 100%;
			}
		}
		.play-user {
			display: flex;
			text-align: center;
			.user-item {
				flex: 1;
				padding: 30rpx;
				.avatar {
					margin-bottom: 10rpx;
				}
			}
		}
		.words-song {
			margin-top: 10rpx;
			padding: 30rpx;
			font-size: 16px;
			line-height: 35px;
			color: #fff;
			// background-color: rgba(0, 0, 0, .3);
			.top,
			.bottom {
				position: relative;
				height: 35px;
				font-size: 18px;
				font-weight: bold;
			}
			.top {
				margin-left: 20rpx;
				.t-text {
					position: absolute;
					top: 0;
					left: 0;
					width: 0;
					color: yellow;
					overflow: hidden;
				}
				.one {
					
				}
			}
			.bottom {
				.b-text {
					position: absolute;
					top: 0;
					width: 0;
					right: 30rpx;
					color: yellow;
					overflow: hidden;
				}
				.two {
					margin-left: 450rpx;
				}
			}
		}
		.play-tips {
			margin-top: 10rpx;
		}
		.down-time {
			display: flex;
			justify-content: center;
			margin-top: 20rpx;
			.timer {
				width: 300rpx;
				height: 80rpx;
				line-height: 80rpx;
				background: #f00;
				color: #fff;
				text-align: center;
				border-radius: 40rpx;
			}
		}
		.answer {
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 10rpx;
			.gif-img {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 150rpx;
				height: 80rpx;
				border-radius: 20rpx;
				background: skyblue;
				.left,
				.right {
					width: 64rpx;
					height: 32rpx;
				}
				.left {
					animation: left 0.8s linear infinite;
				}
				.right {
					animation: right 0.8s linear infinite;
				}
			}
			.a-img {
				.img {
					width: 128rpx;
					height: 128rpx;
				}
			}
		}
	}
	@keyframes textW {
		from {width: 0;}
		to {width: 100%;}
	}
	
	@keyframes left {
		0% {}
		50% {transform: scaleY(1.2);}
		100% {transform: scaleY(1);}
	}
	@keyframes right {
		0% {}
		50% {transform: scaleY(0.8);}
		100% {transform: scaleY(1);}
	}
</style>
