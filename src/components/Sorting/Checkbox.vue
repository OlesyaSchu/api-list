<template>
  <span @click="$emit('changeFilterValue')" class="checkbox">
    <icheckbox :checked="filter.value" />
    <p class="name">{{ filter.name }}</p>
  </span>
</template>

<script>
import icheckbox from '@/components/icons/checkbox'
export default {
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  components: {
    icheckbox,
  },
}
</script>

<style lang="scss">
.checkbox {
  & > * {
    vertical-align: middle;
  }
  .name {
    display: inline;
    margin-left: 8px;
    padding-top: 4px;
  }
}
</style>
