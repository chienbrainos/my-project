import Vue from 'vue';
import Vuex, { ActionContext, ActionTree } from 'vuex';

Vue.use(Vuex);
interface ISelectedPayment {
  price: string;
  currencyType: string;
  typeBank: string;
  eWallet: string;
  walletType: string;
}
export interface IRootState {
  selectedPayment: ISelectedPayment;
  showLoadingIndicator: boolean;
}
const rootState: IRootState = {
  selectedPayment: {
    typeBank: '',
    currencyType: '',
    price: '',
    eWallet: '',
    walletType: '',
  },
  showLoadingIndicator: false,
};
const rootMutations = {
  SET_SELECTED_PAYMENT(state: IRootState, data: ISelectedPayment) {
    state.selectedPayment = data;
  },
  SET_SHOW_LOADING_INDICATOR(state: IRootState, showLoadingIndicator: boolean) {
    state.showLoadingIndicator = showLoadingIndicator;
  },
};
const rootActions: ActionTree<IRootState, IRootState> = {
  setSelectedPayment(
    context: ActionContext<IRootState, IRootState>,
    data: ISelectedPayment,
  ) {
    context.commit('SET_SELECTED_PAYMENT', data);
  },
  setLoadingIndicator(
    context: ActionContext<IRootState, IRootState>,
    showLoadingIndicator: boolean,
  ) {
    context.commit('SET_SHOW_LOADING_INDICATOR', showLoadingIndicator);
  },
};
const rootGetters = {};
export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
});
