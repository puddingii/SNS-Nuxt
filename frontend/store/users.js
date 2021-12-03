export const state = () => ({
  me: null,
  followerList: [
    { id: 1, nickname: '건영1' },
    { id: 2, nickname: '건영2' },
    { id: 3, nickname: '건영3' }
  ],
  followingList: [
    { id: 1, nickname: 'gjgj' },
    { id: 2, nickname: 'gjg2j' },
    { id: 3, nickname: 'gjg3j' }
  ]
})

export const mutations = {
  setMe (state, payload) {
    state.me = payload
  },
  changeNickname (state, payload) {
    state.me.nickname = payload.nickname
  },
  addFollowing (state, payload) {
    state.followingList.push(payload)
  },
  addFollower (state, payload) {
    state.followerList.push(payload)
  },
  removeFollowing (state, payload) {
    const index = state.followingList.findIndex(v => v.id === payload.id)
    state.followingList.splice(index, 1)
  },
  removeFollower (state, payload) {
    const index = state.followerList.findIndex(v => v.id === payload.id)
    state.followerList.splice(index, 1)
  }
}

export const actions = {
  async signUp ({ commit }, payload) {
    const response = await this.$axios.post('http://localhost:3088/user/signUp', {
      email: payload.email,
      nickname: payload.nickname,
      password: payload.password
    }, {
      withCredentials: true // port번호가 다르기 때문에 서버에서 오는 cookie가 오지 않을 수도 있어서 설정함.
    })
    commit('setMe', response.data)
  },
  async logIn ({ commit }, payload) {
    const response = await this.$axios.post('http://localhost:3088/user/login', {
      email: payload.email,
      password: payload.password
    }, {
      withCredentials: true // port번호가 다르기 때문에 서버에서 오는 cookie가 오지 않을 수도 있어서 설정함.
    })
    commit('setMe', response.data)
  },
  async logOut ({ commit }) {
    try {
      await this.$axios.post('http://localhost:3088/user/logout', {}, {
        withCredentials: true // port번호가 다르기 때문에 서버에서 오는 cookie가 오지 않을 수도 있어서 설정함.
      })
      commit('setMe', null)
    } catch (e) {
      console.error(e)
    }
  },
  changeNickname ({ commit }, payload) {
    commit('changeNickname', payload)
  },
  addFollowing ({ commit }, payload) {
    commit('addFollowing', payload)
  },
  addFollowr ({ commit }, payload) {
    commit('addFollowr', payload)
  },
  removeFollowing ({ commit }, payload) {
    commit('removeFollowing', payload)
  },
  removeFollower ({ commit }, payload) {
    commit('removeFollower', payload)
  }
}
