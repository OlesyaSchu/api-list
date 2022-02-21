<template>
  <div class="list-wrapper">
    <table class="list">
      <Item :item="head" :isHead="true" />
      <Item v-for="item of list" :key="item.Link" :item="item" />
    </table>
  </div>
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

<style lang="scss">
.list-wrapper {
  .list {
    margin: 20px 0;
  }
  @media (max-width: 992px) {
    .list {
      max-width: 800px;
    }
  }
  @media (max-width: 576px) {
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .list {
      margin: 10px 0;
    }
  }
}
</style>
