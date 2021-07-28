<template>
	<view class="good_list">
		<view
		class="good_item"
		v-for="(item, index) in goodList"
		:key="item.id"
		@click="clickGoodItem(item.id)">
			<image src="../static/pic/img.png"></image>
<!-- 			<image :src="item.img_url"></image> -->
			<view class="price">
				<text>￥{{item.sell_price}}</text>
				<text>￥{{item.market_price}}</text>
			</view>
			<view class="name">{{item.title}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"goodList",
		data() {
			return {

			}
		},
		props:["goodList"],
		methods:{
			/**
			 * 点击某一商品
			 */
			clickGoodItem: function(id) {
				this.$emit('itemClicked', id)
				console.log("clk")
			}
		}
	}
</script>

<style lang="scss">
	.good_list{
		display: flex;
		flex-wrap: wrap;
		padding: 0 15rpx;
		justify-content: space-between;
		.good_item{
			width:355rpx;
			background-color: #FFFFFF;
			border-radius: 20rpx;
			margin: 8rpx 0;
			padding: 15rpx;
			box-sizing: border-box;
			image{
				width: 100%;
				height: 150px;
			}
			.price{
				color: $shop-color;
				font-size: 36rpx;
				text:nth-of-type(2){
					color: #CCCCCC;
					font-size: 28rpx;
					text-decoration: line-through;
					margin-left: 17rpx;
				}
				
			}
			.name{
				font-size: 28rpx;
				line-height: 50rpx;
				padding: 10rpx 0 15rpx 0;
			}
		}
	}
</style>
