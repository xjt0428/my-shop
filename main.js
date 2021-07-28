import Vue from 'vue'
import App from './App'
import { myRequest, formatDate} from 'util/api.js'

Vue.prototype.$myRequest = myRequest

Vue.config.productionTip = false
Vue.filter("formatDate", formatDate)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
