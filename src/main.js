import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import pigUi from '@zhenwf/test2'
import '@zhenwf/test2/pig-ui.css'

Vue.config.productionTip = false
Vue.use(pigUi)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
