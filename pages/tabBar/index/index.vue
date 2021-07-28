<template>
	<view>
		<!-- 轮播图 -->
       <swiper
	   class="swiper"
	   :interval="interval"
	   :duration="duration"
	   indicator-dots
	   autoplay
	   circular>
            <swiper-item v-for="(item,index) in swiperData" :key="item.id">
                <image :src="item.img"></image>
            </swiper-item>
        </swiper>
		<!-- 导航 -->
		<view class="nav">
			<navigator :url="item.path" class="nav_item" v-for="(item,index) in navList" :key="item.id">
				<view :class="item.icon"></view>
				<text>{{item.title}}</text>
			</navigator>
		</view>
		<!-- 热门商品 -->
		<view class="hot_goods">
			<view class="title">热门商品</view>
			<good-list :goodList="hotGoods" @itemClicked="goToDetail($event)"></good-list>
		</view>
		
	</view>
</template>

<script>
	import GoodList from "../../../components/goodList.vue" 
	export default {
		data() {
			return {
				swiperData: {},
				pageIndex: 1,
				interval: 3000,//切换间隔
				duration: 500,//滑动时长
				hotGoods: [],//热门商品列表
				navList: [//首页导航区域数据
					{
						id: 1,
						title: "优选超市",
						icon: "iconfont icon-ziyuan",
						path: "/pages/goods/goods"
					},
					{
						id: 2,
						title: "图片社区",
						icon: "iconfont icon-tupian",
						path: "/pages/pics/pics"
					},
					{
						id: 3,
						title: "联系我们",
						icon: "iconfont icon-guanyuwomen",
						path: "/pages/contact/contact"
					},
					{
						id: 4,
						title: "精选视频",
						icon: "iconfont icon-shipin",
						path: "/pages/videos/videos"
					}
				]
			}
		},
		components:{
			GoodList
		},
		onLoad() {
			this.getSwiperData()
			this.getHotGoods(this.pageIndex)
		},
		methods: {
			/**
			 * 获取轮播图数据
			 */
			getSwiperData: async function() {
				const res = await this.$myRequest({
					url: "/api/getlunbo"
				})
				this.swiperData = res.data.message
			},
			/**
			 * 获取热门商品数据
			 * @param {Object} index
			 */
			getHotGoods: async function(index) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=" + index
				})
				this.hotGoods = res.data.message
				console.log(this.hotGoods)
			},
			/**
			 * 跳转到详情
			 */
			goToDetail:function(val) {
				console.log(val)
				uni.navigateTo({
					url:"../../goodsDetail/goodsDetail?id=" + val
				})
			}
		}
	}
</script>

<style lang="scss">
	.swiper{
		width: 750rpx;
		height: 380rpx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.nav{
		display: flex;
		.nav_item{
			flex: 1;
			text-align: center;
			view{
				width: 120rpx;
				height: 120rpx;
				background-color: $shop-color;
				border-radius: 60rpx;
				color: #FFFFFF;
				font-size: 60rpx;
				line-height: 120rpx;
				margin: 20rpx auto;
			}
			text{
				font-size: 30rpx;
				margin-bottom: 20rpx;
			}
		}
	}
	.hot_goods{
		margin-top: 20rpx;
		background: #EEEEEE;
		overflow: hidden;//形成BFC
		.title{
			height: 50px;
			line-height: 50px;
			letter-spacing: 20rpx;
			color: $shop-color;
			background: #FFFFFF;
			text-align: center;
			margin: 7rpx 0;
		}
	}
</style>
