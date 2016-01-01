<template>
  <div class="markdown-area" :class="{active: content.length}">
    <textarea placeholder="{{ placeholder }}" aria-label="{{ placeholder }}" v-show="!html" v-model='content' v-el:text @keydown="keyboardSubmit"></textarea>
    <div class="markdown-preview markdown-body" v-show="html" v-html="html"></div>
    <div class="markdown-actions" v-show="!html">
<!--       <a href="#" @click="image" v-show="!uploading">Image</a> -->
      <a href="#" @click="preview">预览模式</a>
    </div>
    <div class="markdown-actions" v-show="html">
      <a href="#" @click="focus">编辑模式</a>
    </div>
<!--     <input type="file" style="opacity: 0; left: -99999px; position: absolute" v-el:file accept="image/*" @change="upload">
 -->  </div>
</template>

<script>
  // var api = require('../api');
  require('../../node_modules/github-markdown-css/github-markdown.css')
  var debug = require('debug')('markdown-area');
  import marked from 'marked'
  marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: false,
    pedantic: false,
    sanitize: true,
    smartLists: true,
    smartypants: false
  });
  module.exports = {
    props: {
      placeholder: String,
      content: {
        type: String,
        default: ''
      }
    },
    data: function() {
      return {
        html: '',
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
        this.html = '';
        var el = this.$els.text;
        setTimeout(function() {
          el.focus();
        }, 10);
      },
      preview: function(e) {
        e.preventDefault();
        if (this.html) {
          return this.html = '';
        }
        this.html = marked(this.content);
        debug('html ' + this.html);
        // api.preview(this.content, function(html) {
        //   this.html = html;
        // }.bind(this));
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
  .markdown-actions
    position absolute
    top 0
    right 0
    line-height 1
    a
      color #666
      font-size 16px
      text-transform uppercase
      margin-right 12px
</style>
