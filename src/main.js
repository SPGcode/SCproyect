import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import {auth} from './firebase'

Vue.config.productionTip = false

auth.onAuthStateChanged(user =>{
  if(user){
   const userCurr = {
     email: user.email,
     uid: user.uid
   }
   store.dispatch('userModule/userCurrent', userCurr)
  }else {
   store.dispatch('userModule/userCurrent', user)
  }
})

const registerAxiosInterceptor = () => {
  axios.interceptors.request.use(
    async (config) => {

      config.headers = {
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      };
      return config;
    },
    (err) => Promise.reject(err)
  );
}

registerAxiosInterceptor();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
