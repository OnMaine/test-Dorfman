<template>
  <div class="transaction-summary">
    <div
      v-for="({ title, value }, index) in summary"
      :key="index"
      class="transaction-summary__row"
    >
      <span class="transaction-summary__label">{{ title }}</span>
      <span class="transaction-summary__dots" />
      <span class="transaction-summary__value transaction-summary__value--commission">{{ value }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  summary: {
    title: string
    value: string
    show?: boolean
  }[]
}>()
</script>

<style scoped lang="scss">
.transaction-summary {
  background-color: #343948;
  border: 1px solid #333A4D;
  padding: 10px 15px;
  border-radius: 8px;
  font-family: 'Monospace', sans-serif;
  color: #FFFFFF;
  margin-top: 8px;

  &__row:last-child {
    margin-bottom: 0;
  }

  &__row {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  &__label {
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #fff;
  }

  &__dots {
    flex-grow: 2;
    border-bottom: 1px dotted #868B96; /* Creates the dotted line */
    margin: 0 4px 2px 4px; /* Space between label and value */
  }

  &__value {
    font-size: 14px;
    text-align: right;
  }

  &__value--commission {
    color: var(--color-primary);
  }

  &__value--receive {
    color: var(--color-primary);
  }
}
</style>
