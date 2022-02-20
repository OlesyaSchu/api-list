<template>
  <table class="list">
    <Item :item="head" :isHead="true" />
    <Item v-for="item of list" :key="item.Link" :item="item" />
  </table>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item'

export default {
  data() {
    return {
      head: {
        API: 'API',
        Description: 'Description',
        Auth: 'Auth',
        HTTPS: 'HTTPS',
        Category: 'Category',
      },
    }
  },
  mounted() {
    this.$store.dispatch('list/loadFullList')
  },
  computed: {
    ...mapGetters({
      list: 'list/getList',
    }),
  },
  components: {
    Item,
  },
}
</script>

<style></style>
