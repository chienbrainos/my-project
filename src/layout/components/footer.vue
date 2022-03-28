<template>
  <div class="footer">
    <p class="mb-0 my-1">
      © 2020 Fasterpay Ltd. All rights reserved. Fasterpay Limited (FRN: 900681) is
      authorised by the Financial Conduct Authority<br />
      under the Electronic Money Regulations 2011 for the issuing of electronic money and
      payment instruments.
    </p>
    <div class="footer-box-warning my-1">
      <div class="box-img">
        <img :src="iconWarning" class="img" />
      </div>
      <p class="mb-0">Your payment is 100% secure</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { iconWarning } from '@/common/image';
@Component
export default class Footer extends Vue {
  iconWarning = iconWarning;
}
</script>
<style lang="scss" scoped>
p {
  color: $white;
  font-size: $font_size_small;
}
.footer {
  background: $dark_blue;
  padding: 6px 25px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.footer-box-warning {
  border: 1px solid $color_blue_2;
  border-radius: 5px;
  display: flex;
  align-items: center;
  max-width: 120px;
  .box-img {
    background: $dark_blue;
    border-radius: 5px;
    padding: 5px;
  }
  p {
    background: $color_blue_2;
    padding: 5px;
    color: $light_blue_color;
    text-transform: uppercase;
  }
}
</style>
