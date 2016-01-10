<template>
  <div>
    <logo class="loading center" v-show="loading"></logo>
    <div v-show="!loading">
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/javascript">

import Logo from '../components/logo.vue'
var debug = require('debug')('loading');

export default {
  data () {
    return {
      loading: true
    }
  },
  props: [],
  components: {
    'logo': Logo
  },
  created() {
    this.$on('loaded', () => {
      this.loading = false;
    });
  }
};

</script>

<style lang="stylus">
.big-font
  text-align center
  padding-top 100px
  font-size 60px
</style>
