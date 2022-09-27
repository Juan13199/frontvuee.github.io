import { createStore } from 'vuex'

export default createStore({
  id: 'counter',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  mutations: {
  },
  actions: {
    increment() {
      this.counter++
    }
  },
  modules: {
  },
})
