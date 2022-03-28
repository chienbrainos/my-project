<template>
  <div>
    <Header />
    <router-view> </router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './components/header.vue';
import Footer from './components/footer.vue';

@Component({
  components: { Header, Footer },
})
export default class MainLayout extends Vue {
}
</script>
<style lang="scss" scoped></style>
