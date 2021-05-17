<template>
  <div class="search-list">
    <transition-group name="list" tag="ul">
      <li
          v-for="item in searches"
          :key="item"
          class="search-item">
        <span class="text">{{ item }}</span>
        <span class="icon">
        <i class="icon-delete"></i>
      </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'search-list',
  props: {
    searches: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-list {
  .search-item {
    display: flex;
    align-items: center;
    height: 40px;
    overflow: hidden;

    .text {
      flex: 1;
      color: $color-text-l;
    }

    .icon {
      @include extend-click();

      .icon-delete {
        font-size: $font-size-small;
        color: $color-text-d;
      }
    }
  }
}
</style>
