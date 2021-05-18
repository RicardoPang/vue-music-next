<template>
  <m-header></m-header>
  <tab></tab>
  <router-view :style="viewStyle" v-slot="{ Component }">
    <keep-alive>
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <router-view
      :style="viewStyle"
      name="user"
      v-slot="{ Component }"
  >
    <transition appear name="slide">
      <keep-alive>
        <component :is="Component"/>
      </keep-alive>
    </transition>
  </router-view>
  <player></player>
</template>

<script>
import Header from '@/components/header/header'
import Tab from '@/components/tab/tab'
import Player from '@/components/player/player'
import { mapState } from 'vuex'

export default {
  components: {
    Player,
    MHeader: Header,
    Tab
  },
  computed: {
    viewStyle () {
      const bottom = this.playlist.length ? '60px' : '0'
      return {
        bottom
      }
    },
    ...mapState([
      'playlist'
    ])
  }
}
</script>
