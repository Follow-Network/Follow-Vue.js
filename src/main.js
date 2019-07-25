import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import store from './store'

Vue.use(Vuetify)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store,
  vuetify
}).$mount('#app')
