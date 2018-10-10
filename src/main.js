import Vue from 'vue'
import App from './App'

import filters from '@/filters'
Vue.prototype.$filter = filters

import MpvueRouterPatch from 'mpvue-router-patch'
Vue.use(MpvueRouterPatch)

// global filter
for (let key in filters) {
  Vue.filter(key, filters[key])
}

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
