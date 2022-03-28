<template>
  <v-btn
    text
    :loading="loading"
    :disabled="disabled"
    :readonly="readonly"
    :to="to"
    :color="color"
    @click.prevent="onClick"
    :ripple="false"
  >
    <v-icon v-if="prefixIcon" :size="sizeIcon">{{ prefixIcon }}</v-icon>
    {{ text }}
    <v-icon v-if="suffixIcon" :size="sizeIcon">{{ suffixIcon }}</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TextButton extends Vue {
  @Prop({ default: false }) loading!: boolean;
  @Prop({ default: false }) disabled!: boolean;
  @Prop({ default: false }) readonly!: boolean;
  @Prop({ default: '' }) text!: string;
  @Prop({ default: '' }) to!: string;
  @Prop({ default: '#2af5d6' }) color!: string;
  @Prop({ default: '' }) prefixIcon!: string;
  @Prop({ default: '' }) suffixIcon!: string;
  @Prop({ default: 16 }) sizeIcon!: string;

  onClick() {
    this.$emit('click');
  }
}
</script>

<style lang="scss" scoped>
::v-deep .v-btn {
  &__content {
    font-weight: bold;
    color: #1169ff !important;
    text-transform: initial;
    transition: 0.3s all ease;
  }

  &::before {
    display: none;
  }
}

.v-btn {
  transition: 0.3s all ease;

  &::before {
    display: none;
  }

  &:hover {
    ::v-deep .v-btn__content {
      color: #5fffe6 !important;
    }
  }

  &:focus {
    ::v-deep .v-btn__content {
      color: #2ab8f5 !important;
    }
    background-color: #2ab8f51a;
  }
}
</style>
