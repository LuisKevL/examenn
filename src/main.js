import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/main.css'
import Layout from "@/components/Layout.vue";


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.component("Layout", Layout);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
