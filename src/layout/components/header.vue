<template>
  <div class="header">
    <v-row>
      <v-col md="6">
        <div class="header-left d-flex align-center">
          <img :src="logo" class="logo" />
          <div class="header-language">
            <img :src="iconEn" class="mr-2 img" />
            <span class="mb-0">United Kingdom</span>
          </div>
        </div>
      </v-col>
      <v-col md="6">
        <div class="header-right d-flex align-center">
          <div class="header-right-item">
            <img :src="iconProfile" class="mr-2 img" />
            <span>Log Out</span>
          </div>
          <div class="header-right-item ml-5">
            <img :src="iconLanguage" class="mr-2 img" />
            <span>Eng</span>
          </div>
          <div class="header-right-item ml-5">
            <img :src="iconHelpCircle" class="img" />
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  imgLogo,
  iconEn,
  iconProfile,
  iconLanguage,
  iconHelpCircle,
} from '@/common/image';
@Component
export default class Header extends Vue {
  logo = imgLogo;
  iconEn = iconEn;
  iconProfile = iconProfile;
  iconLanguage = iconLanguage;
  iconHelpCircle = iconHelpCircle;
}
</script>
<style lang="scss" scoped>
.header {
  background: $dark_blue;
  padding: 10px 25px;
  .logo {
    max-width: 193px;
    height: 34px;
    width: 100%;
    object-fit: contain;
  }
}
.header-language {
  display: flex;
  align-items: center;
}
.header-right {
  justify-content: flex-end;
}
.header-right-item {
  display: flex;
  align-items: center;
}
span {
  color: $white;
  font-size: $font_size_medium;
  font-weight: 600;
}
.img {
  object-fit: contain;
}
</style>
