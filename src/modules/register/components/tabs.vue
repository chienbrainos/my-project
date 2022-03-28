<template>
  <div class="tabs mt-3">
    <template v-for="(data, index) in dataTabs">
      <div
        class="tab-item"
        :class="{ 'tab-active': selectedTab.type === data.type }"
        :key="`${index}_tab`"
        @click="onClick(data)"
      >
        <span>{{ formatCurrency(data.value) }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Tabs extends Vue {
  dataTabs = [
    {
      type: 'tab_1',
      value: 50000,
    },
    {
      type: 'tab_2',
      value: 100000,
    },
    {
      type: 'tab_3',
      value: 150000,
    },
    {
      type: 'tab_4',
      value: 2000000,
    },
  ];
  selectedTab = {};
  onClick(data: { type: string; value: string }) {
    this.selectedTab = data;
    this.$emit('input', data.value);
  }
}
</script>
<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-wrap: wrap;
  margin: 0px -8px;
}
.tab-item {
  cursor: pointer;
  width: 92px;
  height: 43px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  border: 1px solid $border_tab;
  margin: 4px 8px;
  font-size: 15px;
  color: $secondary_text;
}
.tab-active {
  border: 1px solid $color_active;
  background: $color_active;
  color: $primary_text;
  font-weight: 600;
}
</style>
