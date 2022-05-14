<script setup lang="ts">
// Source from https://github.com/epicmaxco/epic-spinners/blob/master/src/components/lib/LoopingRhombusesSpinner.vue
// Cut out to save space

import { computed, ref } from 'vue'

const props = defineProps({
  animationDuration: {
    type: Number,
    default: 2500
  },
  size: {
    type: Number,
    default: 15
  },
  color: {
    type: String,
    default: '#fff'
  }
})

const rhombusesNum = ref(3)

const spinnerStyle = computed(() => ({
  height: `${props.size}px`,
  width: `${props.size * 4}px`
}))

const rhombusStyle = computed(() => ({
  height: `${props.size}px`,
  width: `${props.size}px`,
  backgroundColor: props.color,
  animationDuration: `${props.animationDuration}ms`,
  left: `${props.size * 4}px`
}))

const rhombusesStyles = computed(() => {
  const rhombusesStyles = []
  const delay = -props.animationDuration / 1.5
  for (let i = 1; i <= rhombusesNum.value; i++) {
    const style = Object.assign({
      animationDelay: `${i * delay}ms`
    }, rhombusStyle.value)
    rhombusesStyles.push(style)
  }
  return rhombusesStyles
})
</script>

<template>
  <div class="looping-rhombuses-spinner" :style="spinnerStyle">
    <div
      class="rhombus"
      v-for="(rs, index) in rhombusesStyles"
      :key="index"
      :style="rs"
    ></div>
  </div>
</template>

<style lang="sass" scoped>
.looping-rhombuses-spinner, .looping-rhombuses-spinner *
  box-sizing: border-box

.looping-rhombuses-spinner
  width: calc(15px * 4)
  height: 15px
  position: relative

  .rhombus
    height: 15px
    width: 15px
    background-color: #ff1d5e
    left: calc(15px * 4)
    position: absolute
    margin: 0 auto
    border-radius: 2px
    transform: translateY(0) rotate(45deg) scale(0)
    animation: looping-rhombuses-spinner-animation 2500ms linear infinite

    &:nth-child(1)
      animation-delay: calc(2500ms * 1 / -1.5)

    &:nth-child(2)
      animation-delay: calc(2500ms * 2 / -1.5)

    &:nth-child(3)
      animation-delay: calc(2500ms * 3 / -1.5)

@keyframes looping-rhombuses-spinner-animation
  0%
    transform: translateX(0) rotate(45deg) scale(0)
  50%
    transform: translateX(-233%) rotate(45deg) scale(1)
  100%
    transform: translateX(-466%) rotate(45deg) scale(0)
</style>