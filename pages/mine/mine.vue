<template>
	<view class="mine">
		<!-- 用户信息 -->
		<view class="userInfo">
			<view class="avatar">
				<u-avatar :src="src" mode="circle" show-sex></u-avatar>
			</view>
			<view class="user-nickname">
				<view class="top">
					<text class="nickname">之之酱</text>
				</view>
				<text class="level">等级1</text>
			</view>
		</view>
		<!-- 签到，帮助 -->
		<view class="other">
			
		</view>
		<view class="m-ad">
			<BannerAd/>
		</view>
	</view>
</template>

<script>
	import BannerAd from '../../components/AD/bannerAD/bannerAD.vue'
	export default {
		components:{
			BannerAd
		},
		
		data() {
			return {
				src: 'http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg',
				// text: '无头像'
			};
		}
	}
</script>

<style lang="less">
	.mine {
		.userInfo {
			display: flex;
			align-items: center;
			padding: 30rpx;
			border-bottom: 1rpx solid #ddd;
			.avatar {
				flex:1;
			}
			.user-nickname {
				flex:2;
				.top {
					margin-bottom: 10rpx;
					.nickname {
						font-size: 16px;
					}
				}
				.level {
					color: #999;
				}
			}
		}
	}
</style>
