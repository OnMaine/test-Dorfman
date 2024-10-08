<template>
  <div class="filters">
    <AppDropdown :options @change="$emit('change', $event)" />
  </div>
</template>

<script setup lang="ts">
import AppIconSortDown from '~icons/icon/sort-down'
import AppIconSortUp from '~icons/icon/sort-up'

defineEmits<{
  change: [value: string]
}>()

const options = [
  { value: 'asc', label: 'Price', icon: AppIconSortDown },
  { value: 'desc', label: 'Price', icon: AppIconSortUp }
]
</script>

<style scoped lang="scss">
.filters {
  height: 64px;
  margin-bottom: 16px;
  background-color: var(--color-card-background);
  padding: 8px 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
