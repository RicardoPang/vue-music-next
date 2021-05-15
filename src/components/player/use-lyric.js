import { useStore } from 'vuex'
import { computed, ref, watch } from 'vue'
import { getLyric } from '@/service/song'
import Lyric from 'lyric-parser'

export default function useLyric() {
  const currentLyric = ref(null)

  const store = useStore()
  const currentSong = computed(() => store.getters.currentSong)

  watch(currentSong, async (newSong) => {
    if (!newSong.url || !newSong.id) return

    const lyric = await getLyric(newSong)
    store.commit('addSongLyric', {
      song: newSong,
      lyric
    })

    if (currentSong.value.lyric !== lyric) return

    currentLyric.value = new Lyric(lyric, handleLyric)
  })

  function handleLyric() {

  }
}
