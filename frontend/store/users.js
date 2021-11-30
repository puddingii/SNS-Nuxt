export const state = () => ({
  me: null,
  followerList: ['건영1', '건영2', '건영3'],
  followingList: ['허허', '하하', '히히', '무야호']
})

export const mutations = {
  setMe (state, payload) {
    state.me = payload
  },
  changeNickname (state, payload) {
    state.me.nickname = payload.nickname
  }
}

export const actions = {
  signUp ({ commit, dispatch }, payload) {
    commit('setMe', payload)
  },
  logIn ({ commit, dispatch }, payload) {
    commit('setMe', payload)
  },
  logOut ({ commit, dispatch }, payload) {
    commit('setMe', null)
  },
  changeNickname ({ commit }, payload) {
    commit('changeNickname', payload)
  }
}
