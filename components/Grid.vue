<template>
  <div class="grid-cards-container">
    <slot />
  </div>
</template>

<style lang="scss">
.grid-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 6px;
}
</style>
