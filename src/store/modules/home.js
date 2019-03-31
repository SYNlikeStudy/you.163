import {RECEIVE_HOMEDATA} from '../mutation-types'
import {reqHomeData} from '../../api'

const state = {
  homeData: {}
}

const mutations = {
  [RECEIVE_HOMEDATA] (state,homeData) {
    state.homeData = homeData
  }
}

const actions = {
  async getHomeData ({commit}){
    const result = await reqHomeData()
    if (result.code === 0) {
      commit(RECEIVE_HOMEDATA, result.data)
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
