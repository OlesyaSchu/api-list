<template>
  <tr class="item">
    <td v-if="isHead">{{ item.API }}</td>
    <td v-else>
      <a class="link" :href="item.Link">{{ item.API }}</a>
    </td>
    <td class="description">{{ item.Description }}</td>
    <td class="auth">{{ item.Auth }}</td>
    <td class="https">{{ item.HTTPS }}</td>
    <td class="category">{{ item.Category }}</td>
    <td class="favorite"><istar v-if="!isHead" :checked="item.favorite" /></td>
  </tr>
</template>

<script>
import istar from '@/components/icons/star'

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
  components: {
    istar,
  },
}
</script>

<style lang="scss">
.item {
  text-align: left;
  box-shadow: 0 1px 0 0 rgb(190, 190, 190);
  &:last-of-type {
    box-shadow: none;
  }

  & > * {
    vertical-align: middle;
    padding: 20px 10px;
  }
  .link {
    color: inherit;
    text-decoration: none;
  }
  .description {
    width: 45%;
  }
  .auth {
    width: 10%;
  }
  .https {
    width: 5%;
  }
  .category {
    width: 20%;
  }
  .favorite {
    width: 5%;
  }
}
</style>
