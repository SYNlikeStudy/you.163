import {RECEIVE_THINGSNAV,RECEIVE_THINGSDATA} from '../mutation-types'
import {reqThingsNav,reqThingsData} from '../../api'

const state = {
  thingsNav: [],
  thingsData: []
}
const mutations ={
  [RECEIVE_THINGSNAV] (state,data) {
    state.thingsNav = data
  },
  [RECEIVE_THINGSDATA] (state,data) {
    state.thingsData = data
  }
}
const actions = {
  async getThingsNav ({commit},callback) {
    const result = await reqThingsNav()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSNAV,result.data)
      callback()
    }
  },
  async reqThingsData({commit}) {
    const result = await reqThingsData()
    if (result.code*1 === 200) {
      commit(RECEIVE_THINGSDATA,result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
