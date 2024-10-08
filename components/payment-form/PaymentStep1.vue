<template>
  <CountrySwitch @change="selectedCountryKey = $event" />

  <PaymentMethodSelection :methods="paymentMethods" />

  <StepsButtons :disableNext="!selectedPaymentMethod" />
</template>

<script setup lang="ts">
const { data } = await useFetch<IPayments>('/api/payments')

const { selectedPaymentMethod } = usePaymentsStore()

const selectedCountryKey = ref<string>('US')

const paymentMethods = computed(() => {
  return (data.value?.payments[selectedCountryKey.value] || []) as TPaymentMethod[]
})
</script>
