<template>
  <div class="logo">
    <div><span class="left-yellow"></span><span class="right-green"></span></div>
    <div><span class="full-green"></span></div>
    <div><span class="left-green"></span><span class="middle-red"></span><span class="right-red"></span></div>
  </div>
</template>

<style lang="stylus">

.logo
  position relative
  width 46px
  line-height 1
  .logo-status
    position absolute
    left 0
    right 0
    bottom 0
    margin 0
    padding 0
    text-align center
    font-size 12px
    line-height 40px
    color #666
  div
    line-height 1
    height 6px
    margin-bottom 9px
  span
    display inline-block
    vertical-align top
    height 100%
    border-radius 6px
  .left-yellow
    width 8px
    margin-right 4px
    background-color #33C96F
  .right-green
    width 30px
    background-color #E92424
  .full-green
    width 42px
    background-color #00CFF5
  .left-green
    width 12px
    margin-right 4px
    background-color #00CFF5
  .middle-red
    width 14px
    background-color #E92424
    margin-right 4px
  .right-red
    width 8px
    background-color #33C96F

@keyframes loading
  0%
    opacity 0.2
  65%
    opacity 1
  100%
    opacity 0.1

.loading
  &.logo
    span
      opacity 0.2
      animation loading 1.8s cubic-bezier(.2,.68,.18,1.08) infinite
      animation-fill-mode both

.loading
  &.logo
    .right-green
      animation-delay .2s
    .full-green
      animation-delay .4s
    .left-green
      animation-delay .6s
    .middle-red
      animation-delay .7s
    .right-red
      animation-delay .8s
  &.center
    margin 100px auto

</style>
