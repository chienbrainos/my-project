<template>
  <div class="payment-top">
    <div class="payment-top-left mr-3">
      <h3>Pay to</h3>
      <img :src="PUBG" class="img" />
    </div>
    <div class="payment-top-right">
      <h4>PlayerUnknown's Battlegrounds</h4>
      <div class="d-flex align-center">
        <p class="mb-0 text">FasterPay Business Pro Account</p>
        <div class="verify ml-4">
          <img :src="iconVerify" class="icon-verify mr-1" />
          <span class="text text-verify">Verified</span>
        </div>
      </div>
      <div class="d-flex align-center">
        <v-rating
          half-increments
          class="rating"
          v-model="rating"
          background-color="#1169FF"
          small
        ></v-rating>
        <img :src="iconRectangle" class="icon-rectangle mx-1" />
        <span class="text-rating text font-weight-bold">{{ rating }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { pubg, iconVerify, iconRectangle } from '@/common/image';

@Component
export default class PaymentTop extends Vue {
  PUBG = pubg;
  iconVerify = iconVerify;
  iconRectangle = iconRectangle;
  rating = 4.6;
}
</script>
<style lang="scss" scoped>
.payment-top {
  display: flex;
  border-bottom: 1px solid $color_border_sumary;
  padding: 15px 0px;
  flex-wrap: wrap;
  @media screen and (min-width: $screen_md) {
    margin-right: 55px;
  }

  &-left {
    display: inline-flex;
  }
  .img {
    width: 54px;
    height: 30px;
  }
}
.text {
  font-size: $font_size_body;
}
.text-verify {
  color: $light_blue_color;
}
.verify {
  display: flex;
  align-items: center;
}
h4 {
  font-size: $font_size_medium;
  color: $primary_text;
  font-weight: 600;
}
h3 {
  font-size: $font_size_large;
  color: $primary_text;
  font-weight: 600;
  min-width: 70px;
}
.rating {
  margin-top: -4px;
}
::v-deep .v-icon--link {
  padding: 2px !important;
}
</style>
