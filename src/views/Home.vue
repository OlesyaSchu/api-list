<template>
  <div class="home">
    <h1>Список API</h1>
    <Sorting />
    <List />
  </div>
</template>

<script>
import Sorting from '@/components/Sorting'
import List from '@/components/List'

export default {
  name: 'Home',
  components: {
    Sorting,
    List,
  },
}
</script>
