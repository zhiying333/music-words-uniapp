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
		<view class="play-tips">
			<u-notice-bar mode="horizontal" :list="list"></u-notice-bar>
		</view>
		<view class="start-play" v-if="!isPlay">
			<u-button
				type="primary"
				size="medium"
				class="pBtn"
				ripple
				@click="handleStartGame"
			>
				开始游戏
			</u-button>
		</view>
		<view class="words-song" v-else>
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
		<!-- <view class="music">
			<audio class="audio" style="text-align: left" :src="current.src" :poster="current.poster" :name="current.name" :author="current.author" :action="audioAction" controls></audio>
		</view> -->
		<!-- 倒计时 -->
		<view class="down-time" v-if="isPlay">
			<view class="timer">
				倒计时{{downTime}}秒
			</view>
		</view>
		<view class="voice-box">
			<view class="answer">
				<view class="gif-img" v-if="isVoice">
					<image class="left" src="/static/images/left.png" mode=""></image>
					<image class="right" src="/static/images/right.png" mode=""></image>
				</view>
				<view
					class="a-img"
					@touchstart="handleTouchStart"
					@touchend="handleTouchEnd"
				>
					<image class="img" src="/static/images/mkf.png"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Song from '../../../components/Song/song.vue'
	
	var plugin = requirePlugin("WechatSI")  
	let manager = plugin.getRecordRecognitionManager();
		
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
				isPlay: false,//是否开始游戏
				downTime: 30,//倒计时
				isVoice: false,//是否进行语音
				voiceState: "你可以这样说...",//语音识别内容
			}
		},
		
		onLoad(option) {
			this.initRecord();//初始化语音识别
			console.log(option.mode)
			const innerAudioContext = uni.createInnerAudioContext();
			// innerAudioContext.autoplay = true;
			innerAudioContext.src = 'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-d37bba87-d810-44a4-b984-a0f8cbd8f0e5/af824451-b901-4bb9-8de4-b6c3d2cb39fc.mp3';
			innerAudioContext.startTime = 82.79;
		},
		
		methods: {
			handleStartGame () {
				this.isPlay = true;
			},
			
			handleTouchStart () {
				console.log('手指触摸开始')
				this.isVoice = true;
				manager.start()
			},
			
			handleTouchEnd () {
				console.log('手指触摸结束')
				this.isVoice = false;
				manager.stop();
			},
			
			/**  
			* 初始化语音识别回调  
			* 绑定语音播放开始事件  
			*/  
			initRecord: function() {  
				manager.onStart = function(res) {  
					this.voiceState ="onStart:"+ res.msg+"正在录音"  
				};  
				//有新的识别内容返回，则会调用此事件  
				manager.onRecognize = (res) => {  
					this.voiceState = "onRecognize"+res.result;  
				}  

				// 识别结束事件  
				manager.onStop = (res) => {  

					this.voiceState ="onStop"+ res.result;  
				}  

				// 识别错误事件  
				manager.onError = (res) => {  

					this.voiceState = "onError"+res.msg;  

				}  
			},  
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
		.play-tips {
			margin-top: 10rpx;
		}
		.start-play {
			display: flex;
			justify-content: center;
			margin-top: 10rpx;
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
		.voice-box {
			position: absolute;
			bottom: 30rpx;
			left: 50%;
			transform: translate(-50%);
			.answer {
				display: flex;
				flex-direction: column;
				align-items: center;
				// margin-top: 10rpx;
				.gif-img {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 150rpx;
					height: 80rpx;
					border-radius: 20rpx;
					background: skyblue;
					margin-bottom: 10rpx;
					.left,
					.right {
						width: 64rpx;
						height: 32rpx;
					}
					.left {
						animation: left 0.3s linear infinite;
					}
					.right {
						animation: right 0.3s linear infinite;
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
