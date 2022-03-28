<template>
  <div class="content mt-3 mb-4">
    <h3 class="mb-2">E-wallets</h3>
    <div class="list-card">
      <template v-for="(dataPayment, index) in dataPayments">
        <PaymentCard
          :key="index"
          :image="dataPayment.urlImage"
          :description="dataPayment.description"
          :isActive="getSelectedPayment.walletType === dataPayment.walletType"
          @click="selected(dataPayment)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import PaymentCard from '@/common/payment-card.vue';
import { Component, Vue } from 'vue-property-decorator';
import { iconPaypal, iconWechatPay, iconAlipay } from '@/common/image';
import { IPaymentWallet } from '@/helpers/types';
@Component({
  components: { PaymentCard },
})
export default class PaymentWallets extends Vue {
  dataPayments = [
    {
      id: 4,
      description: 'AliPay',
      urlImage: iconAlipay,
      walletType: 'alipay',
    },
    {
      id: 5,
      description: 'Wechat Pay',
      urlImage: iconWechatPay,
      walletType: 'wechat_pay',
    },
    {
      id: 6,
      description: 'PayPal',
      urlImage: iconPaypal,
      walletType: 'paypal',
    },
  ];

  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  selected(item: IPaymentWallet) {
    this.$store.dispatch('setSelectedPayment', {
      ...this.getSelectedPayment,
      walletType: item?.walletType,
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
  margin: 0 -8px;
  flex-wrap: wrap;
  .card {
    padding: 4px 8px;
  }
}
</style>
