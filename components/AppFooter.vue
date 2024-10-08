<template>
  <footer class="footer">
    <NuxtLink class="footer__top" to="/">
      <AppIconFullLogo />
    </NuxtLink>

    <div class="footer__bottom">
      <div class="footer__copyright">
        <p>Copyright &copy; Many.Skins 2024. All Rights Reserved.</p>
        <p>Powered by Steam. Not affiliated with Valve Corp.</p>
      </div>

      <div class="footer__payments">
        <template v-for="({ icon, key }) in paymentIcons" :key>
          <component :is="icon" />
        </template>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import AppIconMastercard from '~icons/icon/mastercard'
import AppIconVisa from '~icons/icon/visa'
import AppIconSepa from '~icons/icon/sepa'
import AppIconSkrill from '~icons/icon/skrill'
import AppIconBitcoin from '~icons/icon/bitcoin'
import AppIconTether from '~icons/icon/tether'
import AppIconEthereum from '~icons/icon/ethereum'

const paymentIcons = [
  { icon: AppIconMastercard, key: 'Mastercard' },
  { icon: AppIconVisa, key: 'Visa' },
  { icon: AppIconSepa, key: 'SEPA' },
  { icon: AppIconSkrill, key: 'Skrill' },
  { icon: AppIconBitcoin, key: 'Bitcoin' },
  { icon: AppIconTether, key: 'Tether' },
  { icon: AppIconEthereum, key: 'Ethereum' }
]
</script>

<style scoped lang="scss">
.footer {
  padding: 32px;

  &__top {
    display: block;
    padding-bottom: 33px;
    border-bottom: 1px solid var(--color-divider);
  }

  &__bottom {
    margin-top: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__copyright {
    p:first-child {
      margin-bottom: 4px;
    }

    p {
      font-size: 12px;
    }
  }

  &__payments {
    display: flex;
    gap: 20px;
  }
}
</style>
