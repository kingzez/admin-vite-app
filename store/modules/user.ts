const state = {
  authed: localStorage.getItem('token') !== null,
  user: JSON.parse(localStorage.getItem('user')) || {
    username: 'admin',
    role: 'admin',
  },
}

const mutations = {}

const actions = {}

const getters = {
  username: (state) => state.user.username,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
