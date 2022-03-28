<template>
  <div class="wrapper">
    <Header />
    <RegisterPayment />
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/layout/components/header.vue';
import RegisterPayment from '../components/register/register-payment.vue';
import Footer from '@/layout/components/footer.vue';
@Component({
  components: {
    Header,
    Footer,
    RegisterPayment,
  },
})
export default class RegisterPaymentPage extends Vue {}
</script>
<style lang="scss" scoped></style>
