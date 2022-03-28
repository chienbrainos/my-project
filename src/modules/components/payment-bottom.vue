<template>
  <div class="content">
    <PrimaryButton
      class="button mb-4"
      :prefixIcon="getIcon"
      :text="textButton"
      @click="onClick"
    />
    <p class="mb-2" v-if="isPolicy">
      By paying you agree to FasterPay’s
      <a href="#" class="text-underline">Terms of Service</a><br />
      and
      <a href="#" class="text-underline">Privacy Policy.</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PrimaryButton from '@/common/primary-button.vue';
import { priceDefault } from '@/helpers/constants';
import { formatCurrency } from '@/helpers/helper';
@Component({
  components: { PrimaryButton },
})
export default class PaymentBottom extends Vue {
  get priceDefault() {
    return formatCurrency(priceDefault);
  }
  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  get getIcon() {
    if (this.getSelectedPayment.price) {
      return +this.getSelectedPayment.price >= priceDefault ? 'mdi-lock' : '';
    }
    return 'mdi-lock';
  }
  get isPolicy() {
    if (this.getSelectedPayment.price) {
      return +this.getSelectedPayment.price < priceDefault ? false : true;
    }
    return true;
  }
  onClick() {
    this.$emit('click');
  }
  get textButton() {
    if (this.getSelectedPayment.price) {
      return +this.getSelectedPayment.price >= priceDefault
        ? `Pay ${this.priceDefault} EU`
        : 'Top Up Account';
    }
    return `Pay ${this.priceDefault} EU`;
  }
}
</script>
<style lang="scss" scoped>
.button {
  max-width: 362px;
  width: 100%;
  min-height: 50px;
}
p {
  color: $black;
  font-size: $font_size_body;
}
.text-underline {
  color: $black;
  text-decoration: underline;
}
</style>
