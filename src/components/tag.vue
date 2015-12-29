<template>
  <div class="tag-item">

    <div class="tag-inner">
      <div class="point" :style="{ background: '#' + tag.color }"></div>
      <p class="tag-name">{{tag.tagName}}</p>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  props: ['tag']
}

</script>

<style lang="stylus">

.tag-item
  display inline-block
  width 130px
  height 50px
  padding 10px
  font-size 14px
  margin 10px 0px

.tag-inner
  margin auto 0
  line-height 30px

.point
  width 10px
  height 10px
  margin 8px 12px 8px 5px
  background #f00
  border-radius 5px
  display inline-block
  float left

.tag-name
  white-space nowrap

</style>
