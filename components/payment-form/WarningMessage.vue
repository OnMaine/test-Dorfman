<template>
  <div class="warning-message">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.warning-message {
  background-color: #343948;
  padding: 12px;
  border-radius: var(--default-radius);
  font-size: 14px;
}
</style>
