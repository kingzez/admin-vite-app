const state = {
  authed: localStorage.getItem('token') !== null,
  user: JSON.parse(localStorage.getItem('user')) || {
    username: '',
    role: 'admin',
  },
}

const mutations = {}

const actions = {}

const getters = {}

export default {
  state,
  getters,
  actions,
  mutations,
}
