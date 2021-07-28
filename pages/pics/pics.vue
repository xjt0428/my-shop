<template>
	<view class="pic">
		<scroll-view
			class="left"
			scroll-y
			show-scrollbar>
			<view
				class="menuItem"
				:class="{activeItem : activeItemId === item.id}" 
				v-for="(item, index) in menuData"
				@click="menuItemClick(item.id)">
				{{item.title}}
			</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="imgItem" v-for="(item, index) in rightList">
				<image :src="item.img_url" @click="clickImg(item.img_url)"></image>
				<view class="img_title">{{item.title}}</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				menuData: [],//右侧详细的数据
				activeItemId: 0,
				rightList: [
					{
						"id":40,
						"title":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果",
						"img_url":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201804%2F28%2F20180428114906_ulvqd.jpg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg",
						"zhaiyao":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，因为欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果，也吸取了洛可可风格中唯美、律…"
					},
					{
						"id":41,
						"title":"欧式风格继承了巴洛克风格中豪华",
						"img_url":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fbbs.gd163.cn%2FUpFile%2FUpAttachment%2F2015-11%2F20151110184126.jpg&refer=http%3A%2F%2Fbbs.gd163.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629795943&t=b17cc0bbef35c009b0bf76e542cdb46c",
						"zhaiyao":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，因为欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果，也吸取了洛可可风格中唯美、律…"
					},
					{
						"id":41,
						"title":"欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果",
						"img_url":"https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fcdn.duitang.com%2Fuploads%2Fitem%2F201406%2F27%2F20140627164916_BkFdE.jpeg&refer=http%3A%2F%2Fcdn.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1629796238&t=81af04143fd5e6ec1d372931606542b4",
						"zhaiyao":"继上编欧式客厅装修效果图之后，今天，小编为大家带来的是一组不同类型的欧式卧室装修效果图。欧式卧室的设计风格按不同的地域文化可分为北欧卧室、简欧卧室和传统欧式卧室。在中国，因为欧式风格继承了巴洛克风格中豪华、动感、多变的视觉效果，也吸取了洛可可风格中唯美、律…"
					}
				]
				// rightList: []
			}
		},
		onLoad() {
			this.getMenuData(this.getInitData)
		},
		methods: {
			/**
			 * 获取左侧图片分类
			 */
			getMenuData:async function (callback){
				const res = await this.$myRequest({
					url: "/api/getimgcategory"
				})
				this.menuData = res.data.message
				console.log(this.menuData)
				callback && callback()
			},
			/**
			 * 获取右侧图片详情
			 */
			getPicData: async function(id) {
				const res = await this.$myRequest({
					url: "/api/getimages/" + id
				})
				// this.rightList = res.data.message
				console.log(this.rightList)
			},
			getInitData: function() {
				this.activeItemId = this.menuData[0].id
				this.getPicData(this.menuData[0].id)
			},
			menuItemClick: function(id) {
				this.activeItemId = id
				this.getPicData(id)
			},
			/**
			 * 预览图片
			 */
			clickImg: function(current) {
				const urls = this.rightList.map((item)=>{
					return item.img_url
				})
				uni.previewImage({
					current,
					urls
				})
			}
			
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pic{
		display:flex;
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1rpx solid #EEEEEE;
			box-sizing: border-box;
			.menuItem{
				font-size: 28rpx;
				color: $uni-text-color;
				line-height: 120rpx;
				text-align: center;
				height: 120rpx;
				border-top: 1rpx solid #EEEEEE;
			}
			.activeItem{
				background-color: $shop-color;
				color: #FFFFFF;
			}

		}
		.right{
			width: 520rpx;
			margin: 20rpx auto;
			.imgItem{
				padding-bottom: 20px;
			}
			.img_title{
				font-size: 30rpx;
				line-height: 60rpx;
			}
		}
	}
</style>
