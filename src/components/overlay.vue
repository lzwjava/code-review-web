<template>
  <div class="overlay" @click="hide" v-if="overlay">
    <slot></slot>
  </div>
</template>

<script>
  module.exports = {
    props: ['overlay'],
    methods:{
      hide (){
        this.overlay = false
      }
    }
  };
</script>

<style lang="stylus">
.overlay
  position fixed
  left 0
  right 0
  top 0
  bottom 0
  z-index 9998
  background-color rgba(0,0,0,.5)
  transition opacity .5s ease
</style>
