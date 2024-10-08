export default () => {
  const state = useState<{
    cart: ISkin[]
    paymentMethod: TPaymentMethod | ''
    activePaymentStep: number
    isTradeTimeouts: boolean
    cardNumber: string
  }>('payments', () => ({
    cart: [],
    paymentMethod: '',
    activePaymentStep: 1,
    isTradeTimeouts: false,
    cardNumber: ''
  }))

  const cartSum = computed(() => state.value.cart.reduce((acc, { price }) => acc + price, 0))
  const selectedSkinsCounter = computed(() => state.value.cart.length)
  const selectedPaymentMethod = computed(() => state.value.paymentMethod)
  const activePaymentStep = computed(() => state.value.activePaymentStep)
  const isPaymentMethodIsCard = computed(() => {
    return ['Visa', 'PayPal', 'Payoneer'].includes(state.value.paymentMethod)
  })

  function updateSelectedSkins (skin: ISkin, isActive: boolean) {
    if (isActive) {
      state.value.cart.push(skin)
    } else {
      state.value.cart = state.value.cart.filter(({ id }) => id !== skin.id)
    }
  }

  function changeActivePaymentStep (step: number) {
    state.value.activePaymentStep = step
  }

  function changePaymentMethod (method: TPaymentMethod) {
    if (!selectedSkinsCounter.value) return
    state.value.paymentMethod = state.value.paymentMethod !== method ? method : ''
  }

  function changeTradeTimeouts () {
    state.value.isTradeTimeouts = true
  }

  function resetState () {
    state.value.cart = []
    state.value.paymentMethod = ''
    state.value.activePaymentStep = 1
    state.value.isTradeTimeouts = false
    state.value.cardNumber = ''

    localStorage.removeItem('timeLeft')
    localStorage.removeItem('timestamp')
  }

  return {
    cart: computed(() => state.value.cart),
    cartSum,
    selectedPaymentMethod,
    activePaymentStep,
    selectedSkinsCounter,
    isPaymentMethodIsCard,
    isTradeTimeouts: computed(() => state.value.isTradeTimeouts),
    cardNumber: ref(state.value.cardNumber),
    updateSelectedSkins,
    changeActivePaymentStep,
    changePaymentMethod,
    changeTradeTimeouts,
    resetState
  }
}
