<template>
  <div class="tag-item">
    <div class="point" :style="{ background: '#' + tag.color }"></div>
    <p class="tag-name">{{tag.tagName}}</p>
  </div>
  <i class="delete" @click="removeTag(tag.tagId)"></i>
</template>

<script type="text/javascript">
import serviceUrl from "../common/serviceUrl.js"
import util from '../common/util';
export default {
  props: ['tag'],
  methods: {
    removeTag (tagId){
      this.$http.post(serviceUrl.userTag, {
          tagId: tagId,
          op: 'remove'
        }, {
          emulateJSON: true
        }).then((res) => {
          this.$dispatch('remove-tag', res.data.result);
        }, util.httpErrorFn(this));
    }
  }
}

</script>

<style lang="stylus">

.tag-item
  display inline-block
  font-size 14px
  text-align left
  margin auto 0
  line-height 30px
  width auto

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

.delete
  margin-left 10px
  background url(../img/icon/delete.png) no-repeat
  width 10px
  height 10px
  display inline-block
  margin-top 20px
  cursor pointer

</style>
