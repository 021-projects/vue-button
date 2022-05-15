<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { loadingSpinnerSize, TSize, useSize } from '../sizes'
import { touchRipple as vTouchRipple } from '@vuemod/vue-touch-ripple'
import { stopAndPrevent } from '../utils/event'
import LoopingRhombusesSpinner from './LoopingRhombusesSpinner.vue'

const emit = defineEmits(['click'])

const props = defineProps({
  align: {
    type: String as PropType<'left' | 'center' | 'right'>,
    default: 'center'
  },
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String as PropType<TSize>,
    default: 'md'
  },
  color: {
    type: String,
    default: '#27ae60'
  },
  textColor: {
    type: String,
    default: '#fff'
  },
  rounded: {
    type: Boolean,
    default: false
  },
  ripple: {
    type: Boolean,
    default: false
  },
  flat: {
    type: Boolean,
    default: false
  },
  noCaps: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  loadingAnimationDuration: {
    type: Number,
    default: 2500
  }
})

const classes = computed(() => {
  let classes = [
    'btn',
    'hoverable',
    `text-${props.align}`
  ]

  if (props.rounded)
    classes.push('btn--rounded')

  if (props.disabled)
    classes.push('disabled')

  if (props.flat)
    classes.push('btn--flat')

  if (props.noCaps)
    classes.push('btn--no-uppercase')

  return classes.join(' ')
})

const style = computed(() => {
  const sizeStyle = useSize(props.size)

  return Object.assign({}, sizeStyle.value, {
    backgroundColor: props.color,
    color: props.textColor
  })
})

const loadingSpinnerStyle = computed(() => {
  const sizeStyle = loadingSpinnerSize(props.size)

  return Object.assign({}, sizeStyle.value, {
    color: props.textColor,
    animationDuration: props.loadingAnimationDuration
  })
})

const active = computed(() => !props.disabled && !props.loading)

function emitClick ( e: Event ) {
  if (e === void 0 || e.defaultPrevented)
    return

  stopAndPrevent(e)

  active.value && emit('click', e)
}
</script>

<template>
  <button
    :class="classes"
    :style="style"
    v-touch-ripple="ripple"
    tabindex="0"
    @click="emitClick"
    :disabled="disabled"
  >
    <span class="focus-helper" tabindex="-1"></span>
    <span :class="['label', loading ? 'label--hidden' : '']">
      <slot v-if="!label" />
      <template v-else>{{ label }}</template>
    </span>
    <transition name="fade">
      <span v-if="loading" class="loading">
        <slot v-if="$slots.loading" name="loading" :spinner-style="loadingSpinnerStyle"></slot>
        <looping-rhombuses-spinner v-bind="loadingSpinnerStyle" v-else />
      </span>
    </transition>
  </button>
</template>

<style lang="sass" scoped>
.btn
  text-decoration: none
  letter-spacing: .5px
  flex-direction: column
  align-items: stretch
  position: relative
  cursor: pointer
  outline: none
  border: none
  border-radius:  5px
  display: inline-flex
  padding:  15px 20px
  margin:  0
  overflow: hidden
  vertical-align: middle
  -webkit-tap-highlight-color: transparent
  transition: .2s ease-out
  text-transform: uppercase
  width: auto
  height: auto
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px
  font-family: Roboto, -apple-system, Helvetica Neue, Helvetica, Arial, sans-serif

  &.disabled
    opacity: .7 !important

  &--rounded
    border-radius: 15px

  &--no-uppercase
    text-transform: none

  &--flat
    box-shadow: none

.text-left
  text-align: left

.text-center
  text-align: center

.text-right
  text-align: right

.label
  text-overflow: ellipsis
  white-space: nowrap
  overflow: hidden
  max-width: 100%
  transition: opacity .3s
  z-index: 0

  &--hidden
    opacity: 0
    pointer-events: none

.loading
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  display: flex
  justify-content: center
  align-items: center

.focus-helper
  position: absolute
  top: 0
  left: 0 #{"/* rtl:ignore */"}
  width: 100%
  height: 100%
  pointer-events: none
  border-radius: inherit
  opacity: 0
  transition: background-color .3s cubic-bezier(.25,.8,.5,1), opacity .4s cubic-bezier(.25,.8,.5,1)

  &:before, &:after
    content: ''
    position: absolute
    top: 0
    left: 0 #{"/* rtl:ignore */"}
    width: 100%
    height: 100%
    opacity: 0
    border-radius: inherit
    transition: background-color .3s cubic-bezier(.25,.8,.5,1), opacity .6s cubic-bezier(.25,.8,.5,1)

  &:before
    background: #000
  &:after
    background: #fff

.hoverable:hover:not(.disabled)
  > .focus-helper
    background: currentColor
    opacity: .15
    &:before
      opacity: .1
    &:after
      opacity: .4

.fade-enter-active,
.fade-leave-active
  transition: opacity .3s ease-out

.fade-enter-from,
.fade-leave-to
  opacity: 0
</style>