<template>
  <div :class="navbarToggle === 0 ? 'app' : 'inner-page'">
    <div id="wrapper"> 
      <navbar v-if="navbarToggle !== 2" :navVar="navbarToggle"/>
      <router-view/>
      <app-footer v-if="navbarToggle !== 2"/>
    </div>
  </div>
</template>
<script>
import * as types from "./store/types";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      navbarToggle: 0
    }
  },
  mounted() {
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
  }
};
</script>