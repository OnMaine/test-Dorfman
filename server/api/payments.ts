const asd = {
  payments: {
    US: ['Visa', 'PayPal', 'Payoneer', 'Bitcoin', 'TRC-20', 'ERC-20'],
    PT: ['Visa', 'Bitcoin', 'TRC-20', 'ERC-20'],
    ES: ['Visa', 'Bitcoin', 'TRC-20']
  }
}

export default defineEventHandler(() => {
  return asd
})
