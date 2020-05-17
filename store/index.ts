import { createStore } from 'vuex'
import getters from './getters'
import modules from './modules'

const store = createStore({
  modules,
  getters,
})

export default store
