const LIMIT = 10

export const state = () => ({
  mainPosts: [],
  hasMorePost: true
})

export const mutations = {
  addMainPost (state, payload) {
    state.mainPosts.unshift(payload)
  },
  removeMainPost (state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.id)
    state.mainPosts.splice(index, 1)
  },
  addComment (state, payload) {
    const index = state.mainPosts.findIndex(v => v.id === payload.postId)
    state.mainPosts[index].Comments.unshift(payload)
  },
  loadPosts (state) {
    const fakePosts = Array(LIMIT).fill().map(v => ({
      id: Math.floor(Math.random() * 100000),
      User: {
        id: 1,
        nickname: '건여여여어'
      },
      content: `Hello1!! 건여여어  - ${Math.random()}`,
      Comments: [],
      Images: []
    }))
    state.mainPosts = state.mainPosts.concat(fakePosts)
    state.hasMorePost = fakePosts.length === LIMIT
  }
}

export const actions = {
  add ({ commit }, payload) {
    commit('addMainPost', payload)
  },
  remove ({ commit }, payload) {
    commit('removeMainPost', payload)
  },
  addComment ({ commit }, payload) {
    commit('addComment', payload)
  },
  loadPosts ({ commit, state }, payload) {
    if (state.hasMorePost) {
      commit('loadPosts')
    }
  }
}
