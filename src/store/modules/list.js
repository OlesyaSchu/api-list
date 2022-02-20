import axios from 'axios'

const list = {
  namespaced: true,
  state: {
    list: [],
    filters: {},
  },
  mutations: {
    setList(state, payload) {
      // add prop favorite for each elem in list
      payload = payload.map((elem) => {
        elem.favorite = false
        return elem
      })
      // set list
      state.list = payload
    },
    setFilters(state, payload) {
      const prop = Object.keys(payload)[0]
      // if selected all categories
      const isAllCategories = prop === 'Category' && payload[prop] === 'All'
      // if filters contain the filter
      const hasProperty =
        Object.prototype.hasOwnProperty.call(state.filters, prop) &&
        state.filters[prop] === payload[prop]
      // if found filter with the value
      if (hasProperty || isAllCategories) {
        // delete it
        delete state.filters[prop]
      }
      // if didn't
      else {
        // set new value
        state.filters[prop] = payload[prop]
      }
      // refresh filters
      state.filters = Object.assign({}, state.filters)
    },
    setFavorites(state, payload) {
      state.list.forEach((item) => {
        if (item.Link === payload) item.favorite = !item.favorite
      })
    },
  },
  actions: {
    async loadFullList({ commit }) {
      await axios.get('https://api.publicapis.org/entries').then((res) => {
        commit('setList', res.data.entries)
      })
    },
  },
  getters: {
    getList: (state, getters) => {
      return Object.keys(state.filters).length
        ? getters.getFilteredList
        : state.list
    },
    getFilteredList: (state) => {
      let newList = []
      // for each list item
      newList = state.list.filter((item) => {
        // compare with each filter
        return Object.keys(state.filters).reduce((prev, filter) => {
          return prev && item[filter] === state.filters[filter]
        }, true)
      })
      return newList
    },
  },
}

export default list
