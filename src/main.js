import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(Vuex);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDavV_kx08t781jo6aZsNC5p9seLH01euQ',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
})

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');
