<template>
  <tr class="item">
    <td class="link" v-if="isHead">{{ item.API }}</td>
    <td class="link" v-else>
      <a class="link-text" :href="item.Link">{{ item.API }}</a>
    </td>
    <td class="description">{{ item.Description }}</td>
    <td class="auth">{{ item.Auth }}</td>
    <td class="https">{{ item.HTTPS }}</td>
    <td class="category">{{ item.Category }}</td>
    <td class="favorite">
      <istar
        @click.native="setFavorite(item.Link)"
        v-if="!isHead"
        :checked="item.favorite"
      />
    </td>
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
  methods: {
    setFavorite(link) {
      this.$store.commit('list/setFavorites', link)
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
    width: 15%;
    &-text {
      color: rgb(123, 111, 228);
      text-decoration: none;
    }
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

  @media (max-width: 992px) {
    & > * {
      padding: 16px 8px;
    }
    .link {
      max-width: 100px;
    }
    .category {
      max-width: 80px;
    }
  }
  @media (max-width: 768px) {
    & > * {
      padding: 10px 6px;
    }
    .description {
      max-width: 160px;
    }
    .auth {
      max-width: 60px;
    }
  }
}
</style>
