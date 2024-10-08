<template>
  <TradeTimer />

  <WarningMessage>
    <div class="warning-message-slot-wrapper">
      <AppIconAlert class="warning-message-slot-wrapper__icon" />

      <div class="warning-message-slot-wrapper__info">
        <p>Example of caution text. For a trade to be safe please check:</p>
        <p>— Code in the message</p>
        <p>— Bot name</p>
        <p>— If you have 2 trades, one active and one canceled and so on...</p>
      </div>
    </div>
  </WarningMessage>

  <TransactionSummary :summary />

  <StepsButtons />
</template>

<script setup lang="ts">
const summary = computed(() => {
  return [
    { title: 'TRADE CODE', value: '8WJ8SL' },
    { title: 'BOT NAME', value: 'SKINS_SHOP' },
    { title: 'BOT LEVEL', value: '0 LEVEL' },
    { title: 'BOT REGISTRATION DATE', value: '01.02.2022' }
  ]
})
</script>
