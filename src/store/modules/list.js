import axios from 'axios'

const list = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    setList(state, payload) {
      state.list = payload
    },
  },
  actions: {
    async loadFullList({ commit }) {
      await axios.get('https://api.publicapis.org/entries').then((res) => {
        commit('setList', res.data)
      })
    },
  },
  getters: {
    getList: (state) => {
      return state.list
    },
    // TODO: add getFavorites
  },
}

export default list
