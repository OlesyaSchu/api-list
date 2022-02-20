<template>
  <li class="item">
    <a :href="item.Link">{{ item.API }}</a>
    <p>{{ item.Description }}</p>
    <p>{{ item.Auth }}</p>
    <p>{{ item.HTTPS }}</p>
    <p>{{ item.Category }}</p>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    isHead: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.item {
  display: flex;
}
</style>
