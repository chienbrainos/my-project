<template>
  <div class="card" :class="{ 'card-active': isActive }" @click="onClick">
    <div class="card-image">
      <img :src="image" alt="" />
      <span class="ml-2">{{ currencyName }}</span>
    </div>
    <p class="mb-0 price">{{ formatCurrency(price) }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({})
export default class PaymentCurrency extends Vue {
  @Prop({ default: '' }) image!: string;
  @Prop({ default: '' }) currencyName!: string;
  @Prop({ default: '' }) price!: string;
  @Prop({ default: false }) isActive!: boolean;
  onClick() {
    this.$emit('click');
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 110px;
  height: 70px;
  border: 1px solid $color_not_active;
  box-shadow: 0px 5px 12px rgba(57, 40, 71, 0.2);
  border-radius: 8px;
  padding: 13px 15px;
  cursor: pointer;
  &-image {
    display: flex;
    align-items: center;
    img {
      height: 15px;
      width: 23px;
    }
  }
  &.card-active {
    box-shadow: 0px 5px 12px rgba(42, 245, 214, 0.4);
    border: 2px solid $color_active;
  }
  &:hover {
    box-shadow: 0px 5px 12px rgba(42, 245, 214, 0.4);
    border: 2px solid $color_active;
  }
  span {
    font-size: $font_size_body;
    color: $secondary_text;
  }
  .price {
    text-align: center;
    font-size: $font_size_medium;
    font-weight: 600;
    color: $primary_text;
    margin-top: 5px;
    text-align: left;
  }
}
</style>
