<template>
  <div class="card" @click="onClick">
    <div class="card-image" :class="{ 'card-active': isActive }">
      <img :src="image" alt="" />
    </div>

    <p class="card-description">{{ description }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class PaymentCard extends Vue {
  @Prop({ default: '' }) image!: string;
  @Prop({ default: '' }) description!: string;
  @Prop({ default: false }) isActive!: boolean;
  onClick() {
    this.$emit('click');
  }
}
</script>

<style lang="scss" scoped>
.card {
  width: 110px;
  cursor: pointer;
  &-image {
    border: 1px solid $color_not_active;
    box-shadow: 0px 5px 12px rgba(57, 40, 71, 0.2);
    border-radius: 8px;
    height: 72px;
    padding: 0 1rem;
    &.card-active {
      box-shadow: 0px 5px 12px rgba(42, 245, 214, 0.4);
      border: 2px solid $color_active;
    }
    &:hover {
      box-shadow: 0px 5px 12px rgba(42, 245, 214, 0.4);
      border: 2px solid $color_active;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  &-description {
    text-align: center;
    font-size: $font_size_body;
    padding: 0 8px;
    margin-top: 0.75rem;
    margin-bottom: 0;
  }
}
</style>
