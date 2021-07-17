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
		<view class="words-song">
			<view class="tips">
				<!-- {{ player ? players : '人机小白白' }} -->
				人机小白白:
			</view>
			<view class="top">
				<text class="t-text">你骄傲的飞远</text>
			</view>
			<view class="bottom">
				<text class="b-text">我栖息的夏天</text>
			</view>
		</view>
		<view class="play-tips">
			请以首字为天或天的同音字的歌词接下句
		</view>
	</view>
</template>

<script>
	export default {
		data () {
			return {
				avatarSrc: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
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
			margin-top: 30rpx;
			padding: 30rpx;
			font-size: 16px;
			line-height: 30px;
			color: #fff;
			background-color: rgba(0, 0, 0, .7);
			.top,
			.bottom {
				height: 30px;
				font-size: 18px;
				font-weight: bold;
			}
			.top {
				margin-left: 20rpx;
				.t-text {
					float: left;
				}
			}
			.bottom {
				.b-text {
					float: right;
				}
			}
		}
	}
</style>
