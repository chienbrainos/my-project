<template>
  <v-container>
    <Header />
    <Footer />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from '@/layout/components/header.vue';
import Footer from '@/layout/components/footer.vue';
@Component({
  components: {
    Header,
    Footer
  },
})
export default class HomeView extends Vue {}
</script>
<style lang="scss" scoped>
h2 {
  color: $primary-text;
}
</style>
