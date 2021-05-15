export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
