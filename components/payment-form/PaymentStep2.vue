<template>
  <WarningMessage v-if="isPaymentMethodIsCard">
    <div class="warning-message-slot-wrapper">
      <AppIconAlert class="warning-message-slot-wrapper__icon" />
      <div class="warning-message-slot-wrapper__info">
        <p>The amount may not be the same as shown on your wallet due to differences in exchange rates.</p>
        <br>
        <p>
          It may take up to three business days for the bank to credit your payment.
          Please wait for the transaction.
        </p>
      </div>
    </div>
  </WarningMessage>

  <TransactionSummary :summary />

  <PaymentInput @onValidate="isPaymentNumberValid = $event" />

  <StepsButtons :disableNext="!isPaymentNumberValid" />
</template>

<script setup lang="ts">
import AppIconAlert from '~icons/icon/alert'

const { cartSum, isPaymentMethodIsCard } = usePaymentsStore()
const { $formatCurrency } = useNuxtApp()

const isPaymentNumberValid = ref(false)

const summary = computed(() => {
  const COMMISION_VALUE = 0.02
  const receive = cartSum.value - (cartSum.value * COMMISION_VALUE)

  return [
    { title: 'TRANSACTION COMISSION', value: `${(COMMISION_VALUE * 100)}%`, show: true },
    { title: 'YOU RECEIVE', value: $formatCurrency(receive), show: true },
    { title: 'CRYPTO AMOUNT', value: $formatCurrency(receive, { style: 'decimal' }), show: !isPaymentMethodIsCard.value }
  ].filter(({ show }) => show)
})
</script>
