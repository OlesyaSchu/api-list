<template>
  <p>{{ list }}</p>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
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

<style></style>
