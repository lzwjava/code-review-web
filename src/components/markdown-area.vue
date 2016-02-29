<template>
  <div class="markdown-area" :class="{active: content.length}">
    <textarea placeholder="{{ placeholder }}" aria-label="{{ placeholder }}" v-show="!showPreview" v-model='content' v-el:text @keydown="keyboardSubmit"></textarea>

    <markdown class="markdown-preview" v-show="showPreview" :content="content" :show = "showPreview"></markdown>

    <div class="markdown-actions" v-show="!showPreview">
<!--       <a href="#" @click="image" v-show="!uploading">Image</a> -->
      <a href="#" @click="preview">预览模式</a>
    </div>
    <div class="markdown-actions2" v-show="showPreview">
      <a href="#" @click="focus">编辑模式</a>
    </div>
<!--     <input type="file" style="opacity: 0; left: -99999px; position: absolute" v-el:file accept="image/*" @change="upload">
 -->  </div>
</template>

<script>
  var debug = require('debug')('markdown-area');
  import Markdown from './markdown.vue'
  module.exports = {
    components: {
      'markdown': Markdown
    },
    props: {
      placeholder: String,
      content: {
        type: String,
        default: ''
      }
    },
    data: function() {
      return {
        showPreview: false,
        uploading: false
      };
    },
    methods: {
      keyboardSubmit: function(e) {
        if (e.keyCode !== 13) return;
        var mac = /mac/i.test(navigator.userAgent);
        if ((mac && !e.metaKey) || (!mac && !e.ctrlKey)) return;
        this.$emit('submit');
      },
      focus: function(e) {
        e && e.preventDefault();
        this.showPreview = false;

        var el = this.$els.text;
        setTimeout(function() {
          el.focus();
        }, 10);
      },
      preview: function(e) {
        e.preventDefault();
        if (this.showPreview) {
          return;
        }
        this.showPreview = true;
      },
      image: function(e) {
        e.preventDefault();
        this.$els.file.click();
      },
      upload: function() {
        var files = this.$els.file.files;
        if (!files.length) return;

        var stamp = Date.now().toString(36);
        var mark = '[uploading image ' + stamp + ' ...]';
        this.uploading = true;
        this.content += '\n' + mark + '\n';
        // api.upload(files[0], null, function(resp) {
        //   this.content = this.content.replace(mark, '![image](' + resp.value + ')');
        //   this.focus();
        //   this.uploading = false;
        // }.bind(this));
      }
    }
  }
</script>

<style lang="stylus">
.markdown-area
  position relative
  padding-top 1em
  margin-top: -31px;
  .markdown-preview
    margin-top 15px
    margin-bottom 15px
  .markdown-actions
    position absolute
    top -1px
    right 0
    opacity 0.6
    line-height 1
  .markdown-actions2
    position absolute
    top -1px
    right 0
    opacity 0.6
    line-height 1
    a
      color #666
      font-size 16px
      text-transform uppercase
</style>
