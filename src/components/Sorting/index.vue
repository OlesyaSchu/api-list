<template>
  <div class="sorting">
    <input
      @click="addFilter({ HTTPS: true })"
      type="checkbox"
      id="https"
      name="https"
    />
    <label for="https">HTTPS</label>
    <select v-if="categories.length" name="select">
      <option @click="addFilter({ Category: 'All' })" value="all">All</option>
      <option
        @click="addFilter({ Category: category })"
        v-for="category of categories"
        :key="category"
        :value="category"
      >
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      categories: [],
    }
  },
  mounted() {
    new Promise(() => {
      axios.get('https://api.publicapis.org/categories').then((res) => {
        this.categories = res.data.categories
      })
    })
  },
  methods: {
    addFilter(data) {
      this.$store.commit('list/setFilters', data)
    },
  },
}
</script>

<style></style>
