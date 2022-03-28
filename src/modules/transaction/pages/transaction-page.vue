<template>
  <div class="wrapper px-6">
    <div class="wrapper-content">
      <Transaction />
    </div>
    <SumaryCard>
      <template slot="list-refund">
        <ul class="mb-5">
          <li>
            <h4 class="summary-title">Order FP1763415-9</h4>
          </li>
          <li>
            <p class="mb-0 sub-title">500 G-Coins golden Package</p>
          </li>
          <li>
            <div class="currency">
              <div class="currency-item">
                <label class="label">Order amount</label>
                <span class="currency">{{ formatCurrency(priceDefault) }} EUR</span>
              </div>
              <div class="currency-item">
                <label class="label">Taxes</label>
                <span class="currency">0.00 EUR</span>
              </div>
            </div>
          </li>
          <li class="summary-custom">
            <p class="mb-0">Total amount</p>
            <p class="font-weight-bold mb-0">{{ formatCurrency(priceDefault) }} EUR</p>
          </li>
        </ul>
      </template>
    </SumaryCard>
  </div>
</template>

<script lang="ts">
import { priceDefault } from '@/helpers/constants';
import SumaryCard from '@/layout/components/sumary-card.vue';
import { Component, Vue } from 'vue-property-decorator';
import Transaction from '../components/transaction.vue';

const PrimaryButton = () => import('@/common/primary-button.vue');
const TextButton = () => import('@/common/text-button.vue');
const TextUnderlineButton = () => import('@/common/text-underline-button.vue');

@Component({
  components: {
    PrimaryButton,
    TextButton,
    TextUnderlineButton,
    SumaryCard,
    Transaction,
  },
})
export default class TransactionPage extends Vue {
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
