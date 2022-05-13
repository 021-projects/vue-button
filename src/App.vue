<script lang="ts" setup>
import VueButton from '@/components/VueButton.vue'
import { sizes as _sizes, TSize } from '@/sizes'

const sizes = Object.keys(_sizes) as TSize[]

function showAlert () {
  alert('Nice to see that you clicked')
}
</script>

<template>
  <div class="container">
    <vue-button label="Test" />
    <vue-button label="No caps" no-caps />
    <vue-button label="Test" class="custom-btn" />
    <vue-button label="Rounded" rounded />
    <vue-button label="Rounded ripple" rounded ripple />
    <vue-button label="Ripple flat" ripple flat />

    <vue-button
      v-for="size in sizes"
      :key="size"
      :label="size"
      ripple
      :size="size"
    />

    <vue-button label="Dark" color="black" text-color="white" />

    <vue-button color="black" text-color="white" @click="showAlert"><b>Click me</b></vue-button>
  </div>
</template>

<style lang="sass">
.container
  display: flex
  gap: 10px
  align-items: center
  align-content: flex-start
  justify-content: center
</style>
