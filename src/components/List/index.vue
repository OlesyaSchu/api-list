<template>
  <!-- <p>{{ list }}</p> -->
  <ol>
    <Item v-for="item of list" :key="item.Link" :item="item" />
  </ol>
</template>

<script>
import { mapGetters } from 'vuex'
import Item from './Item'

export default {
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
