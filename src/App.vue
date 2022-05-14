<script lang="ts" setup>
import VueButton from './components/VueButton.vue'
import { sizes as _sizes, TSize } from './sizes'
import { randomInt } from './utils/math'
import { ref } from 'vue'
import { SpringSpinner } from 'epic-spinners'

const sizes = Object.keys(_sizes) as TSize[]

function showAlert () {
  alert('Nice to see that you clicked')
}

let dSize = ref<TSize>('md')
let dSizeInterval: number | undefined
function toggleDSize () {
  if (dSizeInterval) {
    clearInterval(dSizeInterval)
    return
  }

  setInterval(() => {
    dSize.value = sizes[randomInt(0, sizes.length-1)]
  }, 1500)
}

const loading = ref(false)
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
    <vue-button label="Disabled" disabled @click="showAlert" />

    <vue-button label="Dynamic size" :size="dSize" @click="toggleDSize" />

    <vue-button color="black" text-color="white" @click="showAlert"><b>Click me</b></vue-button>

    <vue-button :loading="loading" label="LOad" @click="loading = !loading" />
    <vue-button loading label="Custom loading" @click="showAlert">
      <template #loading="{ spinnerStyle }">
        <spring-spinner v-bind="spinnerStyle" />
        <span style="padding-left: 10px">Loading</span>
      </template>
    </vue-button>
  </div>
</template>

<style lang="sass">
.container
  display: flex
  gap: 10px
  align-items: center
  align-content: flex-start
  justify-content: center
  flex-wrap: wrap
</style>
