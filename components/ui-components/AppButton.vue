<template>
  <button
    class="app-button"
    :class="classConfig"
    :disabled
  >
    <div v-if="$slots.default" class="app-button__slot-wrapper">
      <slot />
    </div>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  type?: 'blue' | 'transparent' | 'white'
  size?: 'small' | 'default' | 'large'
  disabled?: boolean
}>(), {
  type: 'blue',
  size: 'default'
})

const classConfig = computed(() => {
  const classes = [`is-${props.type}`, `is-${props.size}`]
  return classes.join(' ')
})
</script>

<style scoped lang="scss">
.app-button {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--default-radius);
  width: 100%;
  cursor: pointer;

  &.is-small {
    height: 38px;
  }

  &.is-default {
    height: 48px;
  }

  &.is-large {
    height: 64px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &:not(:disabled):active {
    transform: translate(0, 0.5px);
  }

  &.is-blue {
    background-color: var(--color-payment-active);

    &:not(:disabled):hover {
      background: rgb(2,0,36);
      background: linear-gradient(90deg, rgba(30,144,255,1) 0%, rgba(0,212,255,1) 100%);
    }
  }

  &.is-transparent {
    background-color: transparent;
  }

  &.is-white {
    background-color: white;
  }

  &__slot-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
