<template>
  <v-app>
    <LoadingIndicator />
    <router-view />
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import LoadingIndicator from './common/loading.vue';
@Component({
  components: { LoadingIndicator },
})
export default class App extends Vue {}
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  overflow-y: auto !important;
}
</style>
