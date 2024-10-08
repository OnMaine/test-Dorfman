<template>
  <div class="input-form">
    <!-- Credit Card Input -->
    <div v-if="isPaymentMethodIsCard" class="input-form__group">
      <label class="input-form__label" for="card-number">YOUR CARD NUMBER</label>
      <input
        id="card-number"
        v-model="cardNumber"
        type="text"
        placeholder="0000 0000 0000 0000"
        class="input-form__input"
        :class="{ 'input-form__input--error': hasError }"
        maxlength="19"
        @input="formatCardNumber"
        @blur="validateCardNumber"
      >
      <p v-if="hasError" class="input-form__error">Enter valid card number</p>
    </div>

    <!-- Crypto Wallet Input -->
    <div v-else class="input-form__group" :class="{ 'input-form__group--error': hasError }">
      <label class="input-form__label" for="crypto-wallet">YOUR TETHER TRC-20 WALLET</label>
      <input
        id="crypto-wallet"
        v-model="walletAddress"
        type="text"
        placeholder="Enter your TRC-20 wallet"
        maxlength="34"
        class="input-form__input"
        @input="validateWallet"
        @blur="validateWalletAddress"
      >
      <p v-if="hasError" class="input-form__error">Enter valid tether trc-20 wallet</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cardNumber, isPaymentMethodIsCard } = usePaymentsStore()

const emit = defineEmits<{
  onValidate: [value: boolean]
}>()

const walletAddress = ref('')
const hasError = ref(false)

function formatCardNumber () {
  const rawValue = cardNumber.value.replace(/\D/g, '') // Remove non-numeric characters
  const formattedValue = rawValue.replace(/(.{4})/g, '$1 ').trim() // Add space every 4 digits
  cardNumber.value = formattedValue

  if (cardNumber.value.length === 19) {
    validateCardNumber()
  }
}

function validateCardNumber () {
  const cardRegex = /^(?:\d{4} \d{4} \d{4} \d{4})$/
  if (cardNumber.value === '') {
    clearErrors()
    return
  }
  hasError.value = !cardRegex.test(cardNumber.value)

  emit('onValidate', !hasError.value)
}

function validateWallet () {
  if (walletAddress.value === '') {
    clearErrors()
    return
  }

  if (walletAddress.value.length === 34) {
    validateWalletAddress()
  }
}

function validateWalletAddress () {
  if (walletAddress.value === '') {
    clearErrors()
    return
  }

  const walletRegex = /^[T][A-Za-z0-9]{33}$/ // Simple regex for TRC-20 wallet
  hasError.value = !walletRegex.test(walletAddress.value)

  emit('onValidate', !hasError.value)
}

function clearErrors () {
  hasError.value = false
  emit('onValidate', false)
}
</script>

<style scoped lang="scss">
.input-form {
  margin-top: 16px;

  &__group {
    background-color: #1A2336;
    border: 1px solid #333A4D;
    border-radius: 8px;
    padding: 15px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
  }

  &__label {
    font-size: 10px;
    text-transform: uppercase;
    margin-bottom: 8px;
  }

  &__input {
    background-color: #1A2336;
    border: none;
    color: #FFFFFF;
    padding: 10px;
    font-size: 16px;
    font-family: 'Monospace', sans-serif;
    letter-spacing: 2px;
    outline: none;
    border-radius: var(--default-radius);

    &::placeholder {
      color: #666;
      font-size: 14px;
    }

    &:not(&--error):focus {
      outline: 1px solid var(--color-primary);
    }

    &--error {
      border: 1px solid var(--color-danger);
    }
  }

  &__error {
    margin-top: 16px;
    font-size: 14px;
    color: #fff;
    background-color: var(--color-danger);
    padding: 12px;
    border-radius: var(--default-radius);
  }
}
</style>
