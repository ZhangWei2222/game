const state = {
  userInfo: {}
}

const types = {
  SET_USERINFO: 'SET_USERINFO'
}

const actions = {
  setUserInfo ({commit}, info) {
    commit(types.SET_USERINFO, info)
  }
}

const mutations = {
  [types.SET_USERINFO] (state, payload) {
    state.userInfo = payload
  }
}

export default {
  state,
  actions,
  mutations
}
