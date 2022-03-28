import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import MainLayout from '@/layout/main-layout.vue';

Vue.use(VueRouter);

const mainRoutes = {
  path: '/',
  component: MainLayout,
  children: [
    {
      path: '/',
      name: 'PaymentPage',
      component: () => import('../modules/payment/pages/payment-page.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/register',
      name: 'RegisterPaymentPage',
      component: () => import('../modules/register/pages/register-payment-page.vue'),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/transaction',
      name: 'TransactionPage',
      component: () => import('../modules/transaction/pages/transaction-page.vue'),
      meta: {
        requiresAuth: true,
      },
    },
  ],
};

const routes: Array<RouteConfig> = [...[mainRoutes]];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
