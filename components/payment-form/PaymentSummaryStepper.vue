<template>
  <div class="payment-summary-stepper">
    <div class="payment-summary-stepper__top">
      <div class="payment-summary-stepper__details">
        <p class="payment-summary-stepper__selected-items">{{ selectedSkinsCounter }} items for</p>
        <h2 class="payment-summary-stepper__total">{{ $formatCurrency(cartSum) }}</h2>
      </div>

      <div class="payment-summary-stepper__steps">
        <template v-for="(step, index) in steps" :key="step">
          <span
            class="payment-summary-stepper__step"
            :class="{ 'payment-summary-stepper__step--active': (index + 1) === activePaymentStep }"
          >
            {{ step }}
          </span>
          <AppIconNextArrow v-if="index !== steps.length - 1" class="payment-summary-stepper__divider" />
        </template>
      </div>
    </div>

    <div class="payment-summary-stepper__bottom">
      <component :is="activeStepComponent" />
    </div>
  </div>
</template>

<script setup lang="ts">
import PaymentStep1 from './PaymentStep1.vue'
import PaymentStep2 from './PaymentStep2.vue'
import PaymentStep3 from './PaymentStep3.vue'
import PaymentStep4 from './PaymentStep4.vue'

const { activePaymentStep, selectedSkinsCounter, cartSum } = usePaymentsStore()

const steps = ['PAYMENT METHOD', 'PAYMENT DETAILS', 'CONFIRMATION ON STEAM', 'PAYMENT TRANSFER']

const activeStepComponent = computed(() => {
  switch (activePaymentStep.value) {
    case 1:
      return PaymentStep1
    case 2:
      return PaymentStep2
    case 3:
      return PaymentStep3
    case 4:
      return PaymentStep4
    default:
      return PaymentStep1
  }
})
</script>

<style scoped lang="scss">
.payment-summary-stepper {
  &__top {
    border-top-left-radius: var(--default-radius);
    border-top-right-radius: var(--default-radius);
    padding: 20px;
    background: linear-gradient(180deg, #1f2d51 0%, #0d1626 100%);
  }

  &__bottom {
    padding: 12px;
    border-bottom-left-radius: var(--default-radius);
    border-bottom-right-radius: var(--default-radius);
    background-color: var(--color-card-background);
  }

  &__details {
    padding-bottom: 16px;
    border-bottom: 1px solid var(--color-divider);
  }

  &__selected-items {
    font-size: 14px;
    color: var(--color-secondary);
    margin-bottom: 8px;
  }

  &__total {
    font-size: 48px;
    color: var(--color-primary);
  }

  &__steps {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    margin-top: 16px;
  }

  &__step {
    text-transform: uppercase;

    &--active {
      color: var(--color-step-active);
    }
  }

  &__divider {
    flex: 1 0 auto;
    margin: 0 15px;
  }
}
</style>
