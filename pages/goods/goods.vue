<template>
	<view class="goods">
		<GoodsList :goodList="goods" @itemClicked="goToDetail($event)"></GoodsList>
		<view class="footer" v-if="dataFlag">没有更多数据了</view>
	</view>
</template>

<script>
	import GoodsList from "../../components/goodList.vue"
	export default {
		data() {
			return {
				goods: [],
				pageindex: 1,
				dataFlag: false
			}
		},
		components:{
			GoodsList
		},
		onLoad() {
			this.getGoodsList()
		},
		onReachBottom() {
			if(this.goods.length < this.pageindex * 10) return this.dataFlag = true
			this.pageindex ++
			this.getGoodsList()
		},
		onPullDownRefresh() {
			console.log("下拉刷新")
			this.dataFlag = false
			this.goods = []
			this.pageindex = 1
			this.getGoodsList(()=>{
				uni.stopPullDownRefresh()
			})
		},
		methods: {
			getGoodsList: async function(callback) {
				const res = await this.$myRequest({
					url: "/api/getgoods?pageindex=" + this.pageindex
				})
				this.goods = this.goods.concat(res.data.message)
				callback && callback()//如果callback存在就调用
			},
			/**
			 * 跳转到详情
			 */
			goToDetail:function(val) {
				console.log(val)
				uni.navigateTo({
					url:"../goodsDetail/goodsDetail?id=" + val
				})
			}
		}
	}
</script>

<style lang="scss">
.goods{
	background: #EEEEEE;
	.footer{
		height: 120rpx;
		line-height: 120rpx;
		color: #C0C0C0;
		text-align: center;
	}
}
</style>
