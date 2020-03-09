// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import { Button,Input,Icon,Radio,Form,FormItem,Select,Option} from 'element-ui'

// import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Button)
Vue.use(Input)
Vue.use(Icon)
Vue.use(Radio)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)


Vue.config.productionTip = false




/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
