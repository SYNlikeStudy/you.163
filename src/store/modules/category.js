import {RECEIVE_CATEGORY} from '../mutation-types'
import {reqCategoryData} from '../../api'

const state = {
  categoryData: {}
}
const mutations = {
  [RECEIVE_CATEGORY] (state,data) {
    state.categoryData = data
  }
}
const actions = {
  async getCategoryData ({commit},callback) {
    const result = await reqCategoryData()
    if (result.code === 0) {
      commit(RECEIVE_CATEGORY, result.data)
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
