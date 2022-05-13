<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { TSize, useSize } from '@/sizes'
import { touchRipple as vTouchRipple } from '@vuemod/vue-touch-ripple'

const props = defineProps({
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
  }
})

const classes = computed(() => {
  let classes = ['btn', 'hoverable', 'test']

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
</script>

<template>
  <button
    :class="classes"
    :style="style"
    v-touch-ripple="ripple"
    tabindex="0"
  >
    <span class="focus-helper" tabindex="-1"></span>
    <slot v-if="!label" />
    <template v-else>{{ label }}</template>
  </button>
</template>

<style lang="sass" scoped>
.btn
  text-decoration: none
  text-align: center
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

.hoverable:hover
  > .focus-helper
    background: currentColor
    opacity: .15
    &:before
      opacity: .1
    &:after
      opacity: .4
</style>