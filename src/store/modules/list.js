import axios from 'axios'

const list = {
  namespaced: true,
  state: {
    list: [],
    filters: {},
    sorting: '',
  },
  mutations: {
    setList(state, payload) {
      // add prop favorite for each elem in list
      payload = payload.map((elem) => {
        elem.favorite = false
        if (!elem.Auth) elem.Auth = 'No'
        return elem
      })
      // set list
      state.list = payload
    },
    setFilters(state, payload) {
      const prop = Object.keys(payload)[0]
      // if selected all categories
      const isAllCategories =
        prop === 'Category' && payload[prop] === 'Все категории'
      // if found filter with the value
      if (payload[prop] === false || isAllCategories) {
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
    setSorting(state, payload) {
      state.sorting = payload
    },
  },
  actions: {
    async loadFullList({ commit }) {
      await axios
        .get('https://api.publicapis.org/entries', {
          // full list is too long
          params: { description: 'the' },
        })
        .then((res) => {
          commit('setList', res.data.entries)
        })
    },
  },
  getters: {
    getList: (state, getters) => {
      let list = Object.keys(state.filters).length
        ? getters.getFilteredList
        : state.list
      if (state.sorting) list = getters.getSortedList(list)
      return list
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
    getSortedList: (state) => (list) => {
      let newList = list.slice()
      const category = state.sorting
      newList = newList.sort((prev, val) => {
        if (prev[category].toLowerCase() > val[category].toLowerCase()) return 1
        if (prev[category].toLowerCase() < val[category].toLowerCase())
          return -1
        if (prev[category].toLowerCase() === val[category].toLowerCase())
          return 1
      })
      return newList
    },
  },
}

export default list
