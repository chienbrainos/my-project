<template>
  <div class="payment px-6">
    <div class="payment-content">
      <PaymentTop />
      <PaymentFasterpay />
      <PaymentBank />
      <PaymentWallets />
      <PaymentBottom @click="onSubmit" />
    </div>
    <SumaryCard>
      <template slot="list-refund">
        <ul class="mb-5">
          <li>
            <h4 class="summary-title">Order FP1763415-9</h4>
          </li>
          <li>
            <p class="mb-0 sub-title">500 G-Coins golden Package</p>
          </li>
          <li>
            <div class="currency">
              <div class="currency-item">
                <label class="label">Amount</label>
                <span class="currency">{{ formatCurrency(priceDefault) }} EUR</span>
              </div>
              <div class="currency-item">
                <label class="label">Taxes</label>
                <span class="currency">0.00 EUR</span>
              </div>
            </div>
          </li>
          <li class="summary-custom">
            <p class="mb-0">Total amount</p>
            <p class="font-weight-bold mb-0">{{ formatCurrency(priceDefault) }} EUR</p>
          </li>
        </ul>
      </template>
      <template slot="qr-code">
        <QrCode />
      </template>
    </SumaryCard>
  </div>
</template>

<script lang="ts">
import SumaryCard from '@/layout/components/sumary-card.vue';
import PaymentTop from '../../../layout/components/payment-top.vue';
import PaymentBank from './payment-bank.vue';
import PaymentWallets from './payment-wallets.vue';
import PaymentFasterpay from './payment-fasterpay.vue';
import PaymentBottom from './payment-bottom.vue';
import { Component, Vue } from 'vue-property-decorator';
import QrCode from '@/layout/components/qr-code.vue';
import { priceDefault } from '@/helpers/constants';
@Component({
  components: {
    SumaryCard,
    PaymentTop,
    PaymentBank,
    PaymentWallets,
    PaymentFasterpay,
    PaymentBottom,
    QrCode,
  },
})
export default class Payment extends Vue {
  priceDefault = priceDefault;
  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  onSubmit() {
    this.$store.dispatch('setLoadingIndicator', true, { root: true });
    if (+this.getSelectedPayment.price < +priceDefault) {
      this.$router.push({ name: 'RegisterPaymentPage' });
    } else {
      this.$router.push({ name: 'TransactionPage' });
    }
    this.$store.dispatch('setLoadingIndicator', false, { root: true });
  }
}
</script>
<style lang="scss" scoped>
.payment {
  display: flex;
  flex-wrap: wrap;
  &-content {
    flex-basis: 0;
    flex-grow: 9;
    min-width: 65%;
  }
}
</style>
