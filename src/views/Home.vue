<template>
  <div class="home">
    <h1>Список API</h1>
    <List />
  </div>
</template>

<script>
import List from '@/components/List'

export default {
  name: 'Home',
  components: {
    List,
  },
}
</script>
