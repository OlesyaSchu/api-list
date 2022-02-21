<template>
  <div class="wrapper">
    <h1 class="title">Список API</h1>
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

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  .title {
    font-size: 36px;
    margin-top: 50px;
  }
  @media (max-width: 768px) {
    max-width: calc(100% - 20px);
  }
  @media (max-width: 576px) {
    margin: 0 20px;

    .title {
      font-size: 30px;
      margin-top: 20px;
    }
  }
}
</style>
