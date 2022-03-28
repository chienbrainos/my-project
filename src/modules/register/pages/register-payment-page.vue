<template>
  <div class="wrapper">
    <RegisterPayment />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import RegisterPayment from '../components/register-payment.vue';
@Component({
  components: {
    RegisterPayment,
  },
})
export default class RegisterPaymentPage extends Vue {}
</script>
<style lang="scss" scoped></style>
