<template>
    <div class="tag-item">
      <div class="point" :style="{ background: '#' + tag.color }"></div>
      <p class="tag-name">{{tag.tagName}}</p>
      <i v-if="showDel" class="delete" @click="removeTag(tag.tagId)"></i>
    </div>
</template>

<script type="text/javascript">
import serviceUrl from "../common/serviceUrl.js"
import util from '../common/util';
var debug = require('debug')('tag');
export default {
  props: ['tag', 'showDel'],
  methods: {
    removeTag (tagId){
      this.$http.delete(serviceUrl.userTagDelete.replace(/:tagId/, tagId), {
          emulateJSON: true
        }).then((res) => {
          this.$dispatch('remove-tag', res.data.result);
        }, util.httpErrorFn(this));
    }
  },
  ready () {
    // debug('showDel: ' + this.showDel);
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
  margin auto 10px auto 0px
  background #f00
  border-radius 6px
  display inline-block

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
