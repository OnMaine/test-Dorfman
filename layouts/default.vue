<template>
  <div class="app-wrapper">
    <AppHeader />

    <main>
      <slot />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped lang="scss">
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--color-background);
}

main {
  flex: 1 0 auto;
  padding: 16px 32px;
}
</style>
