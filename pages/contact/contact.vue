<template>
	<view class="contact">
		<image src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<view class="info">
			<view @click="makePhoneCall">联系电话： {{phoneNum}}</view>
			<view>地址： 河南省郑州市高新技术产业开发区长春路100号</view>
		</view>
		<map latitude="34.75168" longitude="113.783414"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phoneNum: "40088889999"
			}
		},
		methods: {
			makePhoneCall: function(){
				uni.makePhoneCall({
					phoneNumber: this.phoneNum
					// success: () => {
					// 	console.log("拨打电话成功")
					// },
					// fail: () => {
					// 	console.log("拨打电话失败")
					// }
				})
			}
		}
	}
</script>

<style lang="scss">
	.contact{
		image{
			width: 750rpx;
			height: 320rpx;
		}
		.info{
			font-size: 32rpx;
			padding: 0 20rpx;
			view{
				line-height: 80rpx;
				border-bottom: 1rpx solid #EEEEEE;
			}
		}
		map{
			width: 730rpx;
			height: 500rpx;
			margin: 0 auto;
		}
	}
</style>
