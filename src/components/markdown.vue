<template>
    <div class="markdown-body" v-html="html"></div>
</template>

<script type="text/javascript">
require('../../node_modules/github-markdown-css/github-markdown.css')
var debug = require('debug')('markdown');
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
export default {
    props: ['content', 'show'],  // show 参数，为了避免当 content 改变就调用 marked
    computed: {
        html () {
            if (!this.show) {
                return '';
            }
            debug('marked');
            return marked(this.content);
        }
    },
    created() {

    }
}

</script>

<style lang="stylus">

</style>
