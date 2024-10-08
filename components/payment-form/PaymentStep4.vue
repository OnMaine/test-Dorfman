<template>
  <div class="step-four">
    <component :is="transferData.icon" class="step-four__icon" />

    <h4 class="step-four__title">{{ transferData.title }}</h4>
    <p class="step-four__description">{{ transferData.description }}</p>

    <AppButton
      class="step-four__button"
      size="large"
      @click="resetState"
    >
      <span :style="{ color: '#fff' }">{{ transferData.buttonText }}</span>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import AppIconSuccess from '~icons/icon/success'
import AppIconRejectError from '~icons/icon/reject-error'

const { isTradeTimeouts, resetState } = usePaymentsStore()

const transferSucceed = ref(true)

const transferData = computed(() => ({
  title: transferSucceed.value ? 'Transfer succeed!' : 'Transfer error',
  description: transferSucceed.value ? 'Please check your balance' : 'Please contact our support team to go through the issue',
  buttonText: transferSucceed.value ? 'Great!' : 'Contact support',
  icon: transferSucceed.value ? AppIconSuccess : AppIconRejectError
}))

function setRandomTransferSucceed () {
  transferSucceed.value = Math.random() > 0.5
  console.log(transferSucceed.value)
}

onMounted(() => {
  if (isTradeTimeouts.value) {
    console.log('Trade timeouts')
    transferSucceed.value = false
    return
  }
  setRandomTransferSucceed()
})
</script>

<style scoped lang="scss">
.step-four {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__title {
    font-size: 24px;
    font-weight: 500;
    margin-top: 16px;
    color: #fff;
  }

  &__description {
    font-size: 14px;
    margin-top: 4px;
  }

  &__button {
    margin-top: 32px;
  }
}
</style>
