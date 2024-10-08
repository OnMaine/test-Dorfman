<template>
  <div class="banner">
    <h1 class="banner__text">Sell CS:GO skins</h1>

    <img class="banner__image" src="@/assets/images/banner-image.png" alt="Decorative Image">
  </div>
</template>

<style scoped lang="scss">
.banner {
  padding: 40px 0 28px 32px;
  background: linear-gradient(175deg,
      #0a272d 0%,
      #14375d 25%,
      #3055ab 75%,
      #F9FFB2 125%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &__text {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 24px;
    color: white;
  }

  &__image {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 100%;
    object-fit: contain;
  }
}
</style>
