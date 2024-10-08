<template>
  <div
    class="card"
    :class="[
      { 'card--active': isSkinActive },
      { 'card--disabled': disabled }
    ]"
    @click="toggleSkinState"
  >
    <div class="card__image-wrapper">
      <img class="card__image" :src="skin.image" :alt="skin.name">
    </div>

    <div class="card__info">
      <p class="card__title">{{ skin.name }}</p>

      <p
        v-if="skin.exterior"
        class="card__exterior"
      >
        {{ skin.exterior?.title }}
      </p>

      <p class="card__pay">We pay</p>

      <p class="card__price">${{ skin.price }}</p>
    </div>

    <AppCheckbox
      :isChecked="isSkinActive"
      class="card__checkmark"
    />
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  skin: ISkin
  disabled?: boolean
}>()

const emit = defineEmits<{
  change: [skin: ISkin, isActive: boolean]
}>()

const { cart } = usePaymentsStore()

const isSkinActive = ref(false)

watch(cart, () => {
  if (!cart.value.length) isSkinActive.value = false
})

function toggleSkinState () {
  isSkinActive.value = !isSkinActive.value
  emit('change', props.skin, isSkinActive.value)
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  background-color: var(--color-card-background);
  padding: 12px;
  border-radius: var(--default-radius);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  outline: 1px solid transparent;

  &:hover {
    background: linear-gradient(135deg, #1D3570, #110320);
  }

  &--active {
    outline-color: var(--color-primary);
  }

  &--disabled {
    opacity: 0.4;
    pointer-events: none;
  }

  &__image-wrapper {
    display: flex;
    margin-bottom: 20px;
    background: url("assets/images/skin-card-bg.png") center / 130px 110px no-repeat;
  }

  &__image {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  &__info {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  &__title {
    flex: 1 0 auto;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 6px;
    min-height: 2lh;
  }

  &__exterior {
    font-size: 12px;
    margin-bottom: 12px;
    color: v-bind('skin.exterior?.css_color');
  }

  &__pay {
    font-size: 12px;
    color: var(--color-secondary);
    margin-bottom: 6px;
  }

  &__price {
    font-size: 20px;
    color: var(--color-primary);
    margin-top: 5px;
  }

  &__checkmark {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
