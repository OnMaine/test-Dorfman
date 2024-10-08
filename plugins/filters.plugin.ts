export default defineNuxtPlugin(() => {
  return {
    provide: {
      formatCurrency: (price: number, options = {}) => {
        options = { style: 'currency', currency: 'USD', minimumFractionDigits: 0, ...options }
        return new Intl.NumberFormat('en-US', options).format(price)
      }
    }
  }
})
