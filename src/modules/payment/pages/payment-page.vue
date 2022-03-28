<template>
  <div class="wrapper">
    <Payment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Payment from '../components/payment.vue';
@Component({
  components: {
    Payment,
  },
})
export default class PaymentPage extends Vue {}
</script>
<style lang="scss" scoped></style>
