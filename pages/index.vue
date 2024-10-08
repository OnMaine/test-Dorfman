<template>
  <div class="homepage-wrapper">
    <SkinsList class="homepage-wrapper__skins-list" />

    <PaymentForm class="homepage-wrapper__payment-form" />
  </div>
</template>

<style scoped lang="scss">
.homepage-wrapper {
  display: flex;
  gap: 16px;

  &__skins-list {
    flex: 1 0 auto;
  }

  &__payment-form {
    flex: 0 0 400px;
  }
}
</style>
