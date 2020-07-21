import Vue from 'vue'
import App from './App.vue'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  // vue初始化中加上这一句
  vuetify,
  render: h => h(App)
}).$mount('#app')
