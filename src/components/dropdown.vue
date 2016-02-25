<template>
  <div class="dropdown">

    <div class="dropdown-mask" @click="show=!show">
      <slot name="showText"></slot>
    </div>
    <div class="dropdown-inner" @click="choose" v-show="show">
      <slot name="options"></slot>
    </div>
    </div>
  </div>
</template>

<script>
  module.exports = {
    data (){
      return {
        show: false
      }
    },
    methods: {
      choose: function(e) {
        var el = e.target;
        if (el.classList.contains('dropdown-item')) {
          this.show = false;
        }
      }
    }
  };
</script>

<style lang="stylus">
  .dropdown
    position relative
    width 100%
    height 100%
  .dropdown-mask
    width 100%
    height 100%
    background transparent
  .dropdown-inner
    position absolute
    top 100%
    margin-top 20px
    background-color white
    background-clip padding-box
    padding 6px 0
    border 1px solid rgba(0, 0, 0, 0.18)
    box-shadow 0 3px 13px rgba(0, 0, 0, 0.18)
    border-radius 3px
    z-index 11
    padding 10px 20px
    &:before, &:after
      position absolute
      left 50%
      margin-left -8px
      content ''
      display block
      border 8px solid transparent
    &:before
      top -16px
      border-bottom-color rgba(0, 0, 0, 0.18)
    &:after
      top -15px
      border-bottom-color white
    .dropdown-item
      padding 20px
      position relative
      color #282F31
      display block
      font-size 14px
      font-weight 700
      padding 2px 5px 2px 13px
      margin-bottom 3px
      z-index: 20;
      &:last-child
        opacity 0.6
      &:hover
        color #1cb2ef
        &:last-child
          opacity 0.6
          color #EF0031
    .dropdown-divider
      border-top: 1px solid #ddd
      opacity 0.75
      margin: 8px 0
    .avatar
      margin-left 14px
    .name
      position relative
      margin-left 54px
      margin-top -38px
</style>
