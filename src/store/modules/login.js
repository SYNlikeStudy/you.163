import {RECEIVE_USER,LOGOUT} from '../mutation-types'
import {reqUserInfo,reqLogout} from '../../api'

const state = {
  userInfo: ''
}
const mutations = {
  [RECEIVE_USER] (state, data) {
    state.userInfo = data
  },
  [LOGOUT] (state) {
    state.userInfo = ''
  }
}
const actions = {
  async getUserInfo ({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      commit(RECEIVE_USER,result.data.name || result.data.phone)
    }
  },
  async logout ({commit},callback) {
    const result = await reqLogout()
    if (result.code === 0) {
      commit(LOGOUT)
      callback()
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
