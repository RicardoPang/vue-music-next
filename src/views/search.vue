<template>
  <div class="search">
    <div class="search-input-wrapper">
      <search-input v-model="query"></search-input>
    </div>
  </div>
</template>

<script>
import SearchInput from '@/components/search/search-input'
import { ref, watch } from 'vue'

export default {
  name: 'search',
  components: { SearchInput },
  setup () {
    const query = ref('')

    watch(query, (val) => {
      console.log(val)
    })

    return {
      query
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  display: flex;
  flex-direction: column;

  .search-input-wrapper {
    margin: 20px;
  }
}
</style>
