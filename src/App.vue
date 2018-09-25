<template>
  <div :class="navbarToggle === 0 ? 'app' : 'inner-page'">
    <div id="wrapper"> 
      <navbar v-if="navbarToggle !== 2" :navVar="navbarToggle"/>
      <router-view :key="$route.path"/>
      <app-footer v-if="navbarToggle !== 2"/>
    </div>
  </div>
</template>
<script>
import * as types from "./store/types"
import Vue from 'vue'
import { mapActions, mapGetters } from "vuex"
import {loadFbSdk, refreshFB} from './plugins/fb-sdk'

export default {
  data() {
    return {
      navbarToggle: 0,
      isFBReady: false,
      fbRoot: null
    }
  },
  created() {
    window.addEventListener('load', () => { window.FB.XFBML.parse()})
  },
  mounted() {
    loadFbSdk()
    if (this.$route.fullPath === '/home') {
      this.navbarToggle = 0
    } else if (this.$route.fullPath === '/showroom' || this.$route.name === 'Decoration' || this.$route.name === 'StoryDetail') {
      this.navbarToggle = 2
    } else {
      this.navbarToggle = 1
    }
  },
  updated() {
    if (this.$route.name === 'Home') {
      this.navbarToggle = 0
    } else if (this.$route.name === 'Showroom' || this.$route.name === 'Decoration' || this.$route.name === 'StoryDetail') {
      this.navbarToggle = 2
    } else {
      this.navbarToggle = 1
    }
  },
  watch:{
    $route (to, from){
      setTimeout(() => {
        window.FB.XFBML.parse()
      },2000)
    }
  }
};
</script>