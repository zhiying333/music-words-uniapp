<template>
	<view class="wrap">
		<view class="song on">
			<view class="turntable">
				<image src="../../static/images/bg.gif" class="s-img"></image>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="less">
	.wrap {
		display: flex;
		justify-content: center;
		align-items: center;
		.song {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 300rpx;
			height: 300rpx;
			border-radius: 50%;
			background: skyblue;
			transition: transform 60s;
			animation: turntable 10s linear infinite;
			.turntable {
				width: 280rpx;
				height: 280rpx;
				border-radius: 50%;
				overflow: hidden;
				.s-img {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	@keyframes turntable {
		from {transform: rotate(0deg);}
		to {transform: rotate(360deg);}
	}
</style>
