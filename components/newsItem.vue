<template>
	<view class="newItem">
		<image :src="imgUrl"></image>
		<view class="right">
			<view class="title">{{newsInfo.title}}</view>
			<view class="info">
				<text>发表时间：{{newsInfo.add_time | formatDate}}</text>
				<text>浏览：{{newsInfo.click}}次</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				imgUrl:"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg"
			}
		},
		props:["newsInfo"]
	}
</script>

<style lang="scss">
	page{
		padding: 10rpx;
	}
	.newItem{
		display: flex;
		padding: 20rpx;
		border-bottom: 1rpx solid #EEEEEE;
		image{
			width: 220rpx;
			height: 80px;
			margin-right: 20rpx;
		}
		.right{
			flex: 1;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			.title{
				font-size: 30rpx;
			}
			.info{
				display: flex;
				justify-content: space-between;
				text {
					font-size: 24rpx;
				}
				
			}
		}
	}
</style>
