<template>
  <div class="payment-method-selection">
    <div
      v-for="method in methods"
      :key="method"
      class="payment-method-selection__item"
      :class="[
        { 'payment-method-selection__item--disabled': !selectedSkinsCounter },
        { 'payment-method-selection__item--active': selectedSkinsCounter && selectedPaymentMethod === method },
      ]"
      @click="changePaymentMethod(method)"
    >
      <component :is="methodsMap[method]" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AppIconCards from '~icons/icon/cards'
import AppIconPaypal from '~icons/icon/paypal'
import AppIconPayoneer from '~icons/icon/payoneer'
import AppIconBitcoinWhite from '~icons/icon/bitcoin-white'
import AppIconTetherTrc from '~icons/icon/tether-trc'
import AppIconTetherErc from '~icons/icon/tether-erc'

defineProps<{
  methods: TPaymentMethod[]
}>()

const { selectedSkinsCounter, selectedPaymentMethod, changePaymentMethod } = usePaymentsStore()

const methodsMap: Record<TPaymentMethod, any> = {
  Visa: AppIconCards,
  PayPal: AppIconPaypal,
  Payoneer: AppIconPayoneer,
  Bitcoin: AppIconBitcoinWhite,
  'TRC-20': AppIconTetherTrc,
  'ERC-20': AppIconTetherErc
}
</script>

<style scoped lang="scss">
.payment-method-selection {
  display: grid;
  grid-template-columns:repeat(3, 1fr);
  gap: 4px;
  margin-top: 10px;

  &__item {
    border: 1px solid var(--color-divider);
    background-color: var(--color-card-background);
    border-radius: var(--default-radius);
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--disabled {
      opacity: 0.5;
      cursor: default;
    }

    &--active {
      background: linear-gradient(180deg, #2C4EF3 0%, #0E1A39 100%);
      border-color: var(--color-payment-active);
    }
  }
}
</style>
