import Vue from 'vue'
import Vuex from 'vuex'
import stats from './stats'
Vue.use(Vuex)

const getters = {
  stats: state => state.stats
}

const state = {
  ...stats.state,
  cardIndex: 0
}

const mutations = {
  // SET_CARD_INDEX (state, payload) {
  //   state.cardIndex = payload
  // },
}

const actions = {
}

console.log('stats.state', state)
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
