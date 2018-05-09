import Vue from 'vue'
import Vuex from 'vuex'
import logger from 'vuex/dist/logger'

Vue.use(Vuex)
const state = {cartList:[]}
import getters from './getter'
import mutations from './mutations'
import actions from './actions'


export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  plugins: [logger],
  strict: true
})
