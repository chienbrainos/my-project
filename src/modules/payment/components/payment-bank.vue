<template>
  <div class="content mt-3 mb-4">
    <h3 class="mb-2">Bank transfers</h3>
    <div class="list-card">
      <template v-for="(dataPayment, index) in dataPayments">
        <PaymentCard
          :key="index"
          :image="dataPayment.urlImage"
          :description="dataPayment.bank"
          :isActive="getSelectedPayment.typeBank === dataPayment.typeBank"
          @click="selected(dataPayment)"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import PaymentCard from '@/common/payment-card.vue';
import { Component, Vue } from 'vue-property-decorator';
import { iconFasterPay, iconIdeal, iconGiroPay, iconWebMoney } from '@/common/image';
import { IPayment } from '@/helpers/types';
@Component({
  components: { PaymentCard },
})
export default class PaymentBank extends Vue {
  dataPayments = [
    {
      id: 1,
      bank: 'Überweisung',
      urlImage: iconFasterPay,
      typeBank: 'uber_wei_sung'
    },
    {
      id: 2,
      bank: 'Ideal',
      urlImage: iconIdeal,
      typeBank: 'ideal'
    },
    {
      id: 3,
      bank: 'Giropay',
      urlImage: iconGiroPay,
      typeBank: 'giropay'
    },
    {
      id: 4,
      bank: 'Webmoney',
      urlImage: iconWebMoney,
      typeBank: 'web_money'
    },
  ];
  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  selected(item: IPayment) {
    this.$store.dispatch('setSelectedPayment', {
      ...this.getSelectedPayment,
      typeBank: item.typeBank,
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
