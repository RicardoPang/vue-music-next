import { ref, watch, computed, nextTick } from 'vue'

export default function useFixed (props) {
  // data
  const groupRef = ref(null)
  const listHeights = ref([])
  const scrollY = ref(0)
  const currentIndex = ref(0)

  const fixedTitle = computed(() => {
    if (scrollY.value < 0) {
      return ''
    }
    const currentGroup = props.data[currentIndex.value]
    return currentGroup ? currentGroup.title : ''
  })

  // watch
  watch(() => props.data, async () => {
    await nextTick()
    calculate()
  })

  watch(scrollY, (newY) => {
    const listHeightsVal = listHeights.value
    for (let i = 0; i < listHeightsVal.length - 1; i++) {
      const heightTop = listHeightsVal[i]
      const heightBottom = listHeightsVal[i + 1]
      if (newY >= heightTop && newY <= heightBottom) {
        currentIndex.value = i
      }
    }
  })

  // 辅助函数
  function calculate () {
    const list = groupRef.value.children
    const listHeightsVal = listHeights.value
    listHeightsVal.length = 0

    let height = 0
    listHeightsVal.push(height)

    for (let i = 0; i < list.length; i++) {
      height += list[i].clientHeight
      listHeightsVal.push(height)
    }
  }

  function onScroll (pos) {
    scrollY.value = -pos.y
  }

  return {
    groupRef,
    onScroll,
    fixedTitle
  }
}
