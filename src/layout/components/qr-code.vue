<template>
  <div class="qr-code mb-4">
    <p class="mb-0">Pay with the FasterPay App</p>
    <img :src="qrCode" class="img" />
    <a href="#">QR Payment Instruction</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { qrCode } from '@/common/image';

@Component
export default class QrCode extends Vue {
  qrCode = qrCode;
}
</script>
<style lang="scss" scoped>
.qr-code {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.summary-title {
  font-size: $font_size_base;
  font-weight: 600;
}
.img {
  width: 189px;
  height: 189px;
  object-fit: cover;
}
p {
  font-weight: 600;
  color: $primary_text;
  font-size: $font_size_body;
}
a {
  color: $color_blue_3 !important;
  font-size: $font_size_body;
  display: inline-block;
  font-weight: 600;
  @media screen and (max-width: $screen_md) {
    display: flex;
    margin-bottom: 10px;
  }
}
</style>
