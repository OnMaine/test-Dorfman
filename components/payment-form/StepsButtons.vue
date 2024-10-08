<template>
  <div class="steps-buttons">
    <AppButton
      v-if="activePaymentStep === 3"
      :disabled="disableNext"
      size="default"
      type="white"
      @click="changeActivePaymentStep(4)"
    >
      <span :style="{ color: '#2C64F1' }">Accept Trade</span>
      <AppIconExternalLink />
    </AppButton>

    <AppButton
      v-if="activePaymentStep < 3"
      :disabled="disableNext"
      size="large"
      @click="changeActivePaymentStep(activePaymentStep + 1)"
    >
      <span :style="{ color: 'white' }">Next</span>
      <AppIconNextArrow :style="{ stroke: '#fff' }" />
    </AppButton>

    <AppButton
      v-if="activePaymentStep !== 1 && activePaymentStep !== 4"
      size="small"
      type="transparent"
      @click="changeActivePaymentStep(activePaymentStep - 1)"
    >
      <AppIconPrevArrow />
      <span>Back</span>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  disableNext?: boolean
}>()

const { activePaymentStep, changeActivePaymentStep } = usePaymentsStore()
</script>

<style scoped lang="scss">
.steps-buttons {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
}
</style>
