<template>
  <div class="dropdown">
    <div class="dropdown-mask" @click="show=!show">
      <slot name="showText"></slot>
    </div>
    <div class="dropdown-inner" @click="choose" v-show="show">
      <slot name="options"></slot>
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
  .dropdown-mask {
    width 100%
    height 100%
    background: transparent;
  }
  .dropdown-inner
    position: absolute;
    top: 100%;
    margin-top: 20px;
    background-color: white;
    background-clip: padding-box;
    padding: 6px 0;
    border: 1px solid rgba(0, 0, 0, 0.18);
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
    z-index: 11;
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
    &.dropdown-item 
      color #565656
      display block
      font-size 14px
      padding 7px 10px 7px 18px
      margin-bottom 3px
    &.dropdown-item:hover 
      background-color #71c72e
      color white
    &.dropdown-divider 
      border-top: 1px solid #ddd
      margin: 8px 0
</style>
