<template>
  <div
    class="app-checkbox"
    :class="{ 'app-checkbox--checked': isChecked }"
  >
    <AppIconCheckmark
      v-if="isChecked"
      class="app-checkbox__checkmark"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  isChecked: boolean
}>()
</script>

<style scoped lang="scss">
.app-checkbox {
  width: 20px;
  height: 20px;
  border-radius: var(--default-radius);
  border: 1px solid #464855;
  background-color: #181b2a;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &--checked {
    border-color: var(--color-primary);
  }

  &__checkmark {
    margin: auto;
    stroke: var(--color-primary);
  }
}
</style>
