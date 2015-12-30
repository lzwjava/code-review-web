<template>
  <div class="tag-item">
    <div class="point" :style="{ background: '#' + tag.color }"></div>
    <p class="tag-name">{{tag.tagName}}</p>
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
  font-size 14px
  text-align left
  margin auto 0
  line-height 30px

.point
  width 12px
  height 12px
  margin 8px 12px 8px 5px
  background #f00
  border-radius 6px
  display inline-block
  float left

.tag-name
  display inline-block

</style>
