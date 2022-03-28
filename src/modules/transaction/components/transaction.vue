<template>
  <div class="wrapper px-6">
    <div class="wrapper-content">
      <div class="transaction">
        <img src="@/assets/svg/success-icon.svg" alt="" width="55" />
        <p class="transaction-title">Transaction successful</p>

        <div class="transaction-content">
          <div class="transaction-detail">
            <span class="transaction-detail__label">Transaction ID</span>
            <span class="transaction-detail__value">1029453384</span>
          </div>

          <div class="transaction-detail">
            <span class="transaction-detail__label">Account Balance</span>
            <span class="transaction-detail__value"
              >{{ formatCurrency(getAccountBalance) }} EUR</span
            >
          </div>
        </div>
        <PrimaryButton text="Download receipt" class="download-btn" />
        <TextButton text="Back to merchant" class="back-btn" @click="goBack" />

        <div class="transaction-question">
          <span>Any questions? Please contact our</span>
          <TextUnderlineButton text="Support Center" class="support-btn" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { priceDefault } from '@/helpers/constants';
import SumaryCard from '@/layout/components/sumary-card.vue';
import { Component, Vue } from 'vue-property-decorator';

const PrimaryButton = () => import('@/common/primary-button.vue');
const TextButton = () => import('@/common/text-button.vue');
const TextUnderlineButton = () => import('@/common/text-underline-button.vue');

@Component({
  components: {
    PrimaryButton,
    TextButton,
    TextUnderlineButton,
    SumaryCard,
  },
})
export default class Transaction extends Vue {
  goBack() {
    this.$router.go(-1);
  }

  priceDefault = priceDefault;

  get getSelectedPayment() {
    return this.$store.state.selectedPayment;
  }
  get getAccountBalance() {
    return +this.getSelectedPayment.price - priceDefault;
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  &-content {
    flex-basis: 0;
    flex-grow: 9;
    min-width: 65%;
  }
}
.transaction {
  max-width: 412px;
  margin: 4rem auto;
  text-align: center;

  &-title {
    font-size: 21px;
    font-weight: bold;
  }

  &-detail {
    display: flex;
    justify-content: space-between;
    padding: 0.625rem 0;
    font-size: 14px;

    &:first-child {
      border-bottom: 1px solid $primary_text;
    }

    &__label {
      color: #455a64;
    }
  }

  &-question {
    margin-top: 5rem;
    font-size: 12px;
  }
}

.download-btn {
  height: 50px !important;
  width: 346px !important;
  margin-top: 0.5rem;
}

.support-btn {
  ::v-deep .v-btn__content {
    font-size: 12px !important;
  }
}

.back-btn {
  margin-top: 0.5rem;

  ::v-deep .v-btn__content {
    font-size: 12px !important;
  }
}
</style>
