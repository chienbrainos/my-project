<template>
  <div class="register px-6">
    <div class="register-content">
      <PaymentTop />
      <TextButton
        prefixIcon="chevron_left"
        text="Choose another payment method"
        sizeIcon="14"
        @click="goBack"
      />
      <h3 class="mb-2">Top up My FasterPay Account</h3>
      <div class="sub-title mb-3">
        <span>1</span>
        <div class="ml-4">
          <h4>Choose top up amount</h4>
          <p class="mb-0">Can be higher than the payment order value</p>
        </div>
      </div>
      <Input v-model="valueInput" />
      <Tabs v-model="dataTab" />
      <div class="sub-title mt-3">
        <span>2</span>
        <div class="ml-4">
          <h4>Choose payment method</h4>
        </div>
      </div>
      <h5>Instant payment methods</h5>
      <Slider />
      <p class="mb-3 text">Non-Instant payment methods</p>
      <PaymentCard
        class="payment-card mb-4"
        :image="iconBankTransfer"
        :description="'Transfer from bank account'"
      />
      <PrimaryButton
        class="button mb-6"
        prefixIcon="mdi-lock"
        :text="textButton"
        @click="onSubmit"
      />
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
              <div class="currency-item mb-2">
                <label class="label">Order amount</label>
                <span class="currency">{{ formatCurrency(priceDefault) }} EUR</span>
              </div>
              <div class="currency-item mb-2">
                <label class="label">Extra amount</label>
                <span class="currency">{{ getExtra }} EUR</span>
              </div>
              <div class="currency-item mb-2">
                <label class="label">Top Up fees</label>
                <span class="currency">{{ getTopUpFees }} EUR</span>
              </div>
              <div class="currency-item mb-2">
                <label class="label">Balance to be loaded</label>
                <span class="currency">{{ formatCurrency(getBalance) }} EUR</span>
              </div>
            </div>
          </li>
          <li class="summary-custom">
            <p class="mb-0">Total amount</p>
            <p class="font-weight-bold mb-0">
              <!-- / total amount in wallet and balance to be loaded  / -->
              {{ formatCurrency(+getBalance + paymentPrice) }} EUR
            </p>
          </li>
        </ul>
      </template>
    </SumaryCard>
  </div>
</template>

<script lang="ts">
import SumaryCard from '@/layout/components/sumary-card.vue';
import { Component, Vue, Watch } from 'vue-property-decorator';
import { priceDefault } from '@/helpers/constants';
import PaymentTop from '../payment-top.vue';
import TextButton from '@/common/text-button.vue';
import Input from '@/common/Input.vue';
import Tabs from './tabs.vue';
import PrimaryButton from '@/common/primary-button.vue';
import Slider from './slider-payment.vue';
import PaymentCard from '@/common/payment-card.vue';
import { iconBankTransfer } from '@/common/image';
import { formatCurrency } from '@/helpers/helper';
@Component({
  components: {
    PaymentTop,
    SumaryCard,
    TextButton,
    Input,
    Tabs,
    PrimaryButton,
    Slider,
    PaymentCard,
  },
})
export default class RegisterPayment extends Vue {
  priceDefault = priceDefault;
  valueInput = '';
  dataTab = '';
  iconBankTransfer = iconBankTransfer;

  get textButton() {
    const textPrice = this.valueInput ? formatCurrency(+this.valueInput) : '';
    return `Top Up ${textPrice} EUR`;
  }
  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  get paymentPrice() {
    return this.$store.state.selectedPayment.price;
  }
  get getExtra() {
    return this.valueInput ? formatCurrency(+this.valueInput - priceDefault) : 0;
  }
  get getTopUpFees() {
    return this.valueInput ? formatCurrency(+this.valueInput * 0.4) : 0;
  }
  get getBalance() {
    return this.valueInput ? +this.valueInput - +this.valueInput * 0.4 : 0;
  }

  goBack() {
    this.$router.push({ name: 'PaymentPage' });
  }
  onSubmit() {
    this.$store.dispatch('setLoadingIndicator', true, { root: true });
    // set amount has been deposited 
    this.$store.dispatch('setSelectedPayment', {
      ...this.getSelectedPayment,
      price: +this.getBalance + this.paymentPrice,
    });
    this.$router.push({ name: 'TransactionPage' });
    this.$store.dispatch('setLoadingIndicator', false, { root: true });
  }
  @Watch('dataTab')
  setDataInput(value: string) {
    if (this.dataTab) {
      this.valueInput = value;
    } else {
      this.valueInput = '';
    }
  }
}
</script>
<style lang="scss" scoped>
.register {
  display: flex;
  flex-wrap: wrap;
  &-content {
    flex-basis: 0;
    flex-grow: 9;
    min-width: 65%;
  }
}
::v-deep .v-btn__content {
  font-size: $font_size_body !important;
}
h3 {
  color: $primary_text;
  font-weight: 600;
  font-size: $font_size_x_large;
}
.sub-title {
  display: flex;
  align-items: center;
  h4 {
    font-size: $font_size_base;
  }
  p {
    font-size: $font_size_body;
    color: $secondary_text;
    font-weight: 200;
  }
  span {
    background-color: $light_blue_color;
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    color: $white;
  }
}
h5 {
  font-size: $font_size_medium;
  color: $primary_text;
}
.text {
  color: $primary_text;
  font-size: $font_size_medium;
}
::v-deep .payment-card {
  .card-image {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    width: 30px;
    height: 30px;
  }
}
::v-deep .button {
  min-width: 336px !important;
  height: 48px !important;
  .v-btn__content {
    font-size: $font_size_base !important;
  }
}
</style>
