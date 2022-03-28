<template>
  <div class="summary">
    <slot name="list-refund"></slot>
   <slot name="qr-code"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SumaryCard extends Vue {}
</script>
<style lang="scss" scoped>
.summary {
  @media screen and (min-width: $screen_md) {
    max-width: 16.625rem;
  }
  flex-basis: 16.625rem;
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &-custom {
    text-align: right;
    border-bottom: 0;
  }
}
.summary-title {
  font-size: $font_size_base;
  font-weight: 600;
}
.sub-title {
  color: $primary_text;
}
ul li {
  border-bottom: 1px solid $color_border_sumary;
  padding: 15px 0;
}
.currency-item {
  display: flex;
  justify-content: space-between;
  span {
    font-size: $font_size_medium;
  }
  .label {
    font-size: $font_size_medium;
    display: inline-block;
  }
}
</style>
