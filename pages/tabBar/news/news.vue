<template>
	<view>
		<newsItem v-for="(item,index) in newsList" :key="item.id" :newsInfo="item"></newsItem>
	</view>
</template>

<script>
	import newsItem from "../../../components/newsItem.vue"
	export default {
		data() {
			return {
				newsList: []
			}
		},
		components:{
			newsItem
		},
		onLoad() {
			this.getNewsList()
		},
		methods: {
			getNewsList: async function() {
				const res = await this.$myRequest({
					url: "/api/getnewslist"
				})
				this.newsList = res.data.message
				console.log(this.newsList)
			}
		}
	}
</script>

<style>

</style>
