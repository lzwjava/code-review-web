<template>
    <div class="markdown-body" v-html="html"></div>
</template>

<script type="text/javascript">
require('../../node_modules/github-markdown-css/github-markdown.css')
require('../../node_modules/highlight.js/styles/solarized-light.css')

var debug = require('debug')('markdown');

import marked from 'marked'
import highlight from 'highlight.js'

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false,
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});
export default {
    props: ['content', 'show'],  // show 参数，为了避免当 content 改变就调用 marked
    computed: {
        html () {
            if (!this.show) {
                return '';
            }
            if (!this.content) {
              return '';
            }
            var html = marked(this.content);
            return html
        }
    },
    created() {

    }
}

</script>

<style lang="stylus">

</style>
