<template>
  <div class="timer">
    <div class="timer__display">
      <span class="timer__time">{{ formattedTime }}</span>
    </div>

    <p class="timer__message">
      You have 6 mins to accept trade, otherwise it will be canceled.
    </p>
  </div>
</template>

<script setup lang="ts">
const { changeTradeTimeouts, changeActivePaymentStep } = usePaymentsStore()

const startTime = 6 * 60 // 6 minutes in seconds
const timeLeft = ref(0)

let timerInterval: ReturnType<typeof setInterval> | null = null

const formattedTime = computed(() => {
  const minutes = Math.floor(timeLeft.value / 60).toString().padStart(2, '0')
  const seconds = (timeLeft.value % 60).toString().padStart(2, '0')
  return `${minutes}:${seconds}`
})

watch(timeLeft, (value) => {
  if (value === 0) {
    changeActivePaymentStep(4)
    changeTradeTimeouts()
  }
})

onMounted(() => {
  const savedTime = localStorage.getItem('timeLeft')
  const savedTimestamp = localStorage.getItem('timestamp')

  if (savedTime && savedTimestamp) {
    const elapsed = Math.floor((Date.now() - Number(savedTimestamp)) / 1000)
    const remainingTime = Number(savedTime) - elapsed
    timeLeft.value = Math.max(remainingTime, 0)
  } else {
    timeLeft.value = startTime
  }

  startTimer()
})

onBeforeUnmount(clearTimer)

function clearTimer () {
  if (timerInterval !== null) {
    clearInterval(timerInterval)
  }
}

function startTimer () {
  timerInterval = setInterval(() => {
    if (timeLeft.value > 0) {
      timeLeft.value--
      localStorage.setItem('timeLeft', timeLeft.value.toString())
      localStorage.setItem('timestamp', Date.now().toString())
    } else {
      clearTimer()
    }
  }, 1000)
}
</script>

<style scoped lang="scss">
$time-color: #b4c8ff;

.timer {
  border: 1px solid $time-color;
  border-radius: var(--default-radius);
  padding: 12px;
  background-color: #1A2336;
  margin-bottom: 8px;

  &__display {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  &__message {
    font-size: 12px;
    color: var(--color-secondary);
  }

  &__time {
    color: $time-color;
  }
}
</style>
