<template>
	<view>
       <swiper
	   class="swiper"
	   :interval="interval"
	   :duration="duration"
	   indicator-dots
	   autoplay
	   circular>
            <swiper-item v-for="(item,index) in swiperPic" :key="item.src">
                <image :src="item.src"></image>
            </swiper-item>
        </swiper>
		<view class="price">
			<text>￥{{goodInfo.sell_price}}</text>
			<text>￥{{goodInfo.market_price}}</text>
		</view>
		<view class="title">{{goodInfo.title}}</view>
		<view class="info">
			<view class="goods_no">型号：{{goodInfo.goods_no}}</view>
			<view class="stock_quantity">库存：{{goodInfo.stock_quantity}}</view>
		</view>
		<view class="desc">
			<view class="desc_title">商品详情</view>
			<view class="content">
				<rich-text :nodes="goodDesc.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				interval: 3000,//切换间隔
				duration: 500,//滑动时长
				goodInfo: {},
				swiperPic: [
					{
						src: "https://img14.360buyimg.com/n1/s546x546_jfs/t1/179019/39/16091/119929/60fe673bE0aab998a/d8899f7a3cfd2cd7.jpg"
					},
					{
						src: "https://img14.360buyimg.com/n0/jfs/t1/171139/14/2025/74099/5ffabfeaE4390c106/ca4f898a8e5a75a2.jpg"
					},
					{
						src: "https://img14.360buyimg.com/n0/jfs/t1/164304/2/1993/38322/5ffabfe9E6d8d030e/77eb6e956a2f782d.jpg"
					}
				],
				goodDesc: {}
			}
		},
		onLoad(option) {
			this.getGoodInfo(option.id)
			this.getSwiperPic(option.id)
			this.getGoodDesc(option.id)
		},
		methods: {
			/**
			 * 获取商品信息
			 */
			getGoodInfo: async function(id) {
				const res = await this.$myRequest({
					url: "/api/goods/getinfo/" + id
				})
				this.goodInfo = res.data.message[0]
				console.log(this.goodInfo)
			},
			/**
			 * 获取详情页轮播图
			 */
			getSwiperPic: async function(id) {
				const res = await this.$myRequest({
					url: "/api/getthumimages/" + id
				})
				// this.swiperPic = res.data.message
			},
			/**
			 * 获取详细介绍
			 */
			getGoodDesc: async function(id) {
				const res = await this.$myRequest({
					url: "/api/goods/getdesc/" + id
				})
				console.log(res.data.message)
				this.goodDesc = res.data.message[0]
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #F1F1F1;
	}
	swiper{
		width: 750rpx;
		height: 750rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.price{
		color: $shop-color;
		font-size: 50rpx;
		line-height: 120rpx;
		padding-left: 30rpx;
		background-color: #FFFFFF;
		text:nth-child(2){
			color: #ccc;
			font-size: 36rpx;
			margin-left: 20rpx;
			text-decoration: line-through;
		}
	}
	.title{
		font-size: 36rpx;
		line-height: 50rpx;
		padding: 10rpx 30rpx;
		color: #333333;
		background-color: #FFFFFF;
	}
	.info{
		margin: 10rpx 0;
		padding: 0 30rpx;
		background-color: #FFFFFF;
		font-size: 36rpx;
		line-height: 60rpx;
	}
	.desc{
		padding: 0 30rpx;
		background-color: #FFFFFF;
		.desc_title{
			line-height: 100rpx;
			font-size: 36rpx;
		}
	}
</style>
