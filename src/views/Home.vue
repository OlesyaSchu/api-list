<template>
  <div class="home">
    <h1>Список API</h1>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  mounted() {
    this.$store.dispatch('list/loadFullList')
  },
  computed: {
    ...mapGetters({
      list: 'list/getList',
    }),
  },
}
</script>
