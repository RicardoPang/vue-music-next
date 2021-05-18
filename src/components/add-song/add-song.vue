<template>
  <teleport to="body">
    <transition name="slide">
      <div class="add-song" v-show="visible">
        <div class="header">
          <h1 class="title">添加歌曲到列表</h1>
          <div class="close" @click="hide">
            <i class="icon-close"></i>
          </div>
        </div>
        <div class="search-input-wrapper">
          <search-input
              v-model="query"
              placeholder="搜索歌曲"></search-input>
        </div>
        <div v-show="!query">
          <switches
              :items="['最近播放', '搜索历史']"
              v-model="currentIndex"></switches>
          <div class="list-wrapper">
            <scroll
                v-if="currentIndex===0"
                class="list-scroll">
              <div class="list-inner">
                <song-list :songs="playHistory"></song-list>
              </div>
            </scroll>
            <scroll
                v-if="currentIndex===1"
                class="list-scroll">
              <div class="list-inner">
                <search-list :searches="searchHistory" :show-delete="false"></search-list>
              </div>
            </scroll>
          </div>
        </div>
        <div class="search-result" v-show="query">
          <suggest
              :query="query"
              :show-singer="false"></suggest>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import SearchInput from '@/components/search/search-input'
import Suggest from '@/components/search/suggest'
import Scroll from '@/components/base/scroll/scroll'
import SongList from '@/components/base/song-list/song-list'
import SearchList from '@/components/base/search-list/search-list'
import Switches from '@/components/base/switches/switches'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'add-song',
  components: {
    SearchList,
    SongList,
    Scroll,
    Switches,
    Suggest,
    SearchInput
  },
  setup () {
    const visible = ref(false)
    const query = ref('')
    const currentIndex = ref(0)

    const store = useStore()
    const searchHistory = computed(() => store.state.searchHistory)
    const playHistory = computed(() => store.state.playHistory)

    function show () {
      visible.value = true
    }

    function hide () {
      visible.value = false
    }

    return {
      visible,
      query,
      currentIndex,
      searchHistory,
      playHistory,
      show,
      hide
    }
  }
}
</script>

<style lang="scss" scoped>
.add-song {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 300;
  background: $color-background;

  .header {
    position: relative;
    height: 44px;
    text-align: center;

    .title {
      line-height: 44px;
      font-size: $font-size-large;
      color: $color-text;
    }

    .close {
      position: absolute;
      top: 0;
      right: 8px;

      .icon-close {
        display: block;
        padding: 12px;
        font-size: 20px;
        color: $color-theme;
      }
    }
  }

  .search-input-wrapper {
    margin: 20px
  }

  .list-wrapper {
    position: absolute;
    top: 165px;
    bottom: 0;
    width: 100%;

    .list-scroll {
      height: 100%;
      overflow: hidden;

      .list-inner {
        padding: 20px 30px;
      }
    }
  }

  .search-result {
    position: fixed;
    top: 124px;
    bottom: 0;
    width: 100%;
  }
}

.message-title {
  text-align: center;
  padding: 18px 0;
  font-size: 0;

  .icon-ok {
    font-size: $font-size-medium;
    color: $color-theme;
    margin-right: 4px;
  }

  .text {
    font-size: $font-size-medium;
    color: $color-text;
  }
}
</style>
