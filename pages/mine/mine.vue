<template>
	<view class="mine">
		<!-- 用户信息 -->
		<view class="userInfo">
			<view class="avatar">
				<u-avatar
					:src="userInfo.avatarUrl ? userInfo.avatarUrl : src"
					mode="circle"
					:show-sex="userInfo.gender"
					:sex-icon="genderCate"
				>
				</u-avatar>
			</view>
			<view class="user-nickname">
				<view class="top">
					<text class="nickname">{{userInfo.nickName ? userInfo.nickName : '之之酱'}}</text>
				</view>
				<text class="level">等级1</text>
			</view>
			<view class="login" v-if="!userInfo.nickName">
				<button
					type="default"
					@click="handleGetUserProfile"
					v-if="isUserProfile"
				>
					登录
				</button>
				<button
					type="default"
					plain
					open-type="getUserInfo"
					@getuserinfo="handleGetUserInfo"
					v-else
				>
					登录
				</button>
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
				isUserProfile: false,//判断uni.getUserProfile是否可以
				// userInfo: {},//用户信息 在vuex中定义后，可在页面直接使用
			};
		},
		
		onLoad() {
			if (uni.getUserProfile) {
				this.isUserProfile = true
			}
		},
		
		computed: {
			genderCate () {
				// if (this.userInfo.gender) {
				// 	return this.userInfo.gender === 2 ? 'woman' : 'man'
				// }
				
				if (this.userInfo.gender) {
					return this.userInfo.gender === 2 ? 'woman' : 'man'
				}
			}
		},
		
		methods: {
			handleGetUserProfile () {
				let that = this;
				uni.getUserProfile({
					desc: '用户授权登录',
					success(res) {
						console.log(res)
						// that.userInfo = res.userInfo
						//在uViewui封装的vuex中修改状态数据
						that.$u.vuex('userInfo',res.userInfo)
					}
				})
			},
			handleGetUserInfo (e) {
				console.log(e.detail.userInfo)
			}
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
			.login {
				flex: 1;
				.btn {
					font-size: 16px;
					// border: none;
				}
			}
		}
	}
</style>
