<template>
  <div class="wrapper-input">
    <span class="label">Top Up amount</span>
    <input v-model="currentData" class="input" maxlength="10" type="text" />
    <span class="type">EUR</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class Input extends Vue {
  @Prop({ default: '' }) private value!: string;

  get currentData() {
    return this.value;
  }

  set currentData(value: string | null) {
    this.$emit('input', value);
  }
}
</script>

<style lang="scss" scoped>
.wrapper-input {
  border: 1px solid $color_green;
  max-width: 416px;
  height: 56px;
  position: relative;
  padding: 10px 50px 5px 15px;
  border-radius: 6px;
}
.label {
  font-size: $font_size_body;
  color: $grey_text;
  position: absolute;
  top: 3px;
}
input {
  width: 100%;
  height: 100%;
  font-size: 17px;
  font-weight: 400;
  color: $primary_text;
  &:focus {
    outline: none;
  }
}
.type {
  font-size: $font_size_base;
  color: $grey_text;
  position: absolute;
  right: 17px;
  top: 15px;
}
</style>
