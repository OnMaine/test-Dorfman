<template>
  <AppDropdown
    id="country-switch"
    :options="countries"
    @change="$emit('change', $event)"
  />
</template>

<script setup lang="ts">
import AppIconFlagUSA from '~icons/icon/flag-usa'
import AppIconFlagPortugal from '~icons/icon/flag-portugal'
import AppIconFlagSpain from '~icons/icon/flag-spain'

defineEmits<{
  change: [value: string]
}>()

const countries = [
  { value: 'US', label: 'United States', icon: AppIconFlagUSA },
  { value: 'PT', label: 'Portugal', icon: AppIconFlagPortugal },
  { value: 'ES', label: 'Spain', icon: AppIconFlagSpain }
]
</script>

<style lang="scss">
#country-switch {
  .dropdown__icon {
    display: block;
    min-width: 16px;
    stroke: none;

    &:hover {
      stroke: none;
    }
  }
}
</style>
