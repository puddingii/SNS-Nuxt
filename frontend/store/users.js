export const state = () => ({
  me: null
})

export const mutations = {
  setMe (state, payload) {
    state.me = payload
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
  }
}
