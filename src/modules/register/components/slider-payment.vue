<template>
  <div class="slider mt-3">
    <v-slide-group
      class="pa-4"
      mandatory
      show-arrows
      value="3"
      prev-icon="mdi-arrow-left"
      next-icon="mdi-arrow-right"
    >
      <v-slide-item v-for="(data, index) in dataSliders" :key="index">
        <PaymentCard
          :key="index"
          :image="data.urlImage"
          :description="data.bank"
          :isActive="getSelectedPayment.typeBank === data.typeBank"
          @click="onSelected(data)"
        />
      </v-slide-item>
    </v-slide-group>
  </div>
</template>

<script lang="ts">
import {
  iconFasterPay,
  iconIdeal,
  iconGiroPay,
  iconWebMoney,
  iconKlarna,
} from '@/common/image';
import PaymentCard from '@/common/payment-card.vue';
import { IPayment } from '@/helpers/types';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { PaymentCard },
})
export default class Slider extends Vue {
  dataSliders = [
    {
      id: 1,
      bank: 'Überweisung',
      urlImage: iconFasterPay,
      typeBank: 'uber_wei_sung',
    },
    {
      id: 2,
      bank: 'Ideal',
      urlImage: iconIdeal,
      typeBank: 'ideal',
    },
    {
      id: 3,
      bank: 'Giropay',
      urlImage: iconGiroPay,
      typeBank: 'giropay',
    },
    {
      id: 4,
      bank: 'Webmoney',
      urlImage: iconWebMoney,
      typeBank: 'web_money',
    },
    {
      id: 5,
      bank: 'Klarna',
      urlImage: iconKlarna,
      typeBank: 'klarna',
    },
    {
      id: 6,
      bank: 'Überweisung',
      urlImage: iconFasterPay,
      typeBank: 'uber_wei_sung_2',
    },
    {
      id: 7,
      bank: 'Ideal',
      urlImage: iconIdeal,
      typeBank: 'ideal_2',
    },
    {
      id: 8,
      bank: 'Giropay',
      urlImage: iconGiroPay,
      typeBank: 'giropay_2',
    },
    {
      id: 9,
      bank: 'Webmoney',
      urlImage: iconWebMoney,
      typeBank: 'web_money_2',
    },
    {
      id: 10,
      bank: 'Klarna',
      urlImage: iconKlarna,
      typeBank: 'klarna_2',
    },
  ];

  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  onSelected(data: IPayment) {
    this.$store.dispatch('setSelectedPayment', {
      ...this.getSelectedPayment,
      typeBank: data.typeBank,
    });
  }
}
</script>
<style lang="scss" scoped>
.card {
  margin: 0px 8px;
  width: 150px;
  @media screen and (min-width: $screen_md) {
    width: 110px;
  }
}
::v-deep .v-slide-group {
  width: 630px;
  padding: 0 !important;
}
::v-deep .v-slide-group__prev {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  left: 0;
  background: $white;
  box-shadow: 0px 3px 7px #d7d9de;
  z-index: 999;
  top: 15px;
}
::v-deep .v-slide-group__next {
  width: 40px;
  height: 40px;
  min-width: 40px;
  border-radius: 50%;
  align-items: center;
  position: absolute;
  right: 0;
  background: $white;
  box-shadow: 0px 3px 7px #d7d9de;
  z-index: 999;
  top: 15px;
}
::v-deep .v-slide-group__prev--disabled {
  display: none !important;
}
::v-deep .v-slide-group__next--disabled {
  display: none !important;
}
</style>
