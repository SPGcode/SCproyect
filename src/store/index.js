import Vue from 'vue'
import Vuex from 'vuex'
import postModule from './modules/postModule'
import userModule from './modules/userModule'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    postModule,
    userModule
  }
})
