<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#icon-'+icon"></use>
  </svg>
</template>
<script lang='ts' setup>
import {computed, useSlots} from 'vue'
const slots = useSlots()
const icon = computed(() => {
  if (slots.default) return slots.default()[0].children?.trim()
  console.warn('blank icon name')
  return ''
})
</script>
<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
