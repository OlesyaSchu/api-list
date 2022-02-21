<template>
  <div class="sorting">
    <span v-for="filter of filters" :key="filter.key" class="filter">
      <Checkbox
        v-if="filter.type === 'checkbox'"
        @changeFilterValue="check(filter)"
        :filter="filter"
      />
      <Selector
        v-if="filter.type === 'select'"
        @select="(value) => select(value, filter)"
        :filter="filter"
      />
    </span>
  </div>
</template>

<script>
import axios from 'axios'
import Checkbox from './Checkbox'
import Selector from './Selector'

export default {
  data() {
    return {
      filters: [
        {
          type: 'checkbox',
          name: 'Избранное',
          key: 'favorite',
          value: false,
        },
        {
          type: 'checkbox',
          name: 'HTTPS',
          key: 'HTTPS',
          value: false,
        },
        {
          type: 'select',
          name: 'Категория',
          key: 'Category',
          value: 'Все категории',
          values: ['Все категории'],
        },
        {
          type: 'select',
          name: 'Сортировать по',
          key: 'sorting',
          value: 'Category',
          values: ['Category', 'API', 'Auth'],
        },
      ],
    }
  },
  mounted() {
    new Promise(() => {
      axios.get('https://api.publicapis.org/categories').then((res) => {
        let filter = this.filters.find((filter) => filter.key === 'Category')
        filter.values.push(...res.data.categories)
      })
    })
  },
  methods: {
    check(filter) {
      filter.value = !filter.value
      this.addFilter({ [filter.key]: filter.value })
    },
    select(value, filter) {
      filter.value = value
      if (filter.key === 'sorting') {
        this.$store.commit('list/setSorting', value)
      } else {
        this.addFilter({ [filter.key]: filter.value })
      }
    },
    addFilter(data) {
      this.$store.commit('list/setFilters', data)
    },
  },
  components: {
    Checkbox,
    Selector,
  },
}
</script>

<style lang="scss">
.sorting {
  margin-top: 20px;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 576px) {
    margin-top: 16px;
    gap: 10px;
  }
}
</style>
