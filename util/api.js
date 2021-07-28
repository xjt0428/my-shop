var BASE_URL = "http://localhost:8082"
// #ifdef APP-PLUS
BASE_URL = "http://10.0.2.2:8082"
// #endif

export const myRequest = options => {
	return new Promise((resolve, reject)=> {
		uni.request({
			url: BASE_URL + options.url,
			data: options.data || {},
			header: options.header || {},
			method: options.method || 'GET',
			success: (res) => {
				if(res.data.status !== 0){
					return uni.showToast({
						title:"获取数据失败"
					})
				}
				resolve(res)
			},
			fail: (err) => {
				uni.showToast({
					title:"请求接口失败"
				})
				reject(err)
			}
		})
	})
}
export const formatDate = date => {
	return date.slice(0, 10)
}