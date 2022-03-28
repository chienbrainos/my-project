<template>
  <div class="fasterpay mt-4 mb-4">
    <h3 class="mb-2">My FasterPay Accounts</h3>
    <div class="list-card">
      <template v-for="(item, index) in items">
        <PaymentCurrency
          :key="`${index}_faster`"
          :image="item.currencyLogo"
          :currencyName="item.currencyType"
          :price="item.price"
          :isActive="getSelectedPayment.currencyType === item.currencyType"
          @click="selected(item)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PaymentCurrency from '@/common/payment-currency.vue';
import { iconEu, iconUsa, iconEn } from '@/common/image';
import { IUserWallet } from '@/helpers/types';
@Component({
  components: { PaymentCurrency },
})
export default class PaymentFasterpay extends Vue {
  items = [
    {
      id: 1,
      currencyType: 'EUR',
      currencyLogo: iconEu,
      price: 100000,
    },
    {
      id: 2,
      currencyType: 'GBP',
      currencyLogo: iconEn,
      price: 21000,
    },
    {
      id: 2,
      currencyType: 'USD',
      currencyLogo: iconUsa,
      price: 20000,
    },
  ];
  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  selected(item: IUserWallet) {
    this.$store.dispatch('setSelectedPayment', {
      ...this.getSelectedPayment,
      price: item.price,
      currencyType: item.currencyType,
    });
  }
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: $font_size_base;
  font-weight: 600;
}
.list-card {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -8px;
  .card {
    margin: 4px 8px;
  }
}
</style>
