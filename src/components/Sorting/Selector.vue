<template>
  <span>
    <p class="selector-name">{{ filter.name }}:</p>
    <span class="selector">
      <div @click="isOpened = !isOpened">
        <p class="value">{{ filter.value }}</p>
        <iarrow :class="{ up: isOpened }" />
      </div>
      <div v-if="isOpened" class="options-wrapper">
        <div class="options">
          <p
            @click="selectCategory(option)"
            v-for="(option, index) of filter.values"
            :key="index"
            class="option"
          >
            {{ option }}
          </p>
        </div>
      </div>
    </span>
  </span>
</template>

<script>
import iarrow from '@/components/icons/arrow'

export default {
  data() {
    return {
      isOpened: false,
    }
  },
  props: {
    filter: {
      type: Object,
      required: true,
    },
  },
  methods: {
    selectCategory(category) {
      this.isOpened = !this.isOpened
      this.$emit('select', category)
    },
  },
  components: {
    iarrow,
  },
}
</script>

<style lang="scss">
.selector-name {
  display: inline;
  margin-right: 10px;
}
.selector {
  position: relative;
  display: inline-block;
  padding: 6px 16px;
  border: 1px solid #bebebe;
  border-radius: 8px;
  cursor: pointer;

  .value {
    display: inline;
    margin-right: 16px;
  }
  .options-wrapper {
    padding: 6px 4px;
    position: absolute;
    top: 28px;
    left: 0;
    background: white;
    border: 1px solid #bebebe;
    border-radius: 10px;
    z-index: 1000;
    .options {
      min-width: 200px;
      max-height: 200px;
      overflow: auto;
      border-radius: 4px;

      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background-color: inherit;
      }
      &::-webkit-scrollbar-thumb {
        background: #bebebe;
        border-radius: 4px;
        z-index: 10;
      }

      .option {
        padding: 8px 12px;
        text-align: left;
        &:hover {
          border-radius: 4px;
          background: #e6e6e6;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .options-wrapper {
      .options {
        min-width: 158px;
      }
    }
  }
}
</style>
