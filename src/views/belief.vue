<template>
    <div class="main-container">
      <h3 class="title">2016，我们想为大家做一点小事</h3>
      <p class="author">叶孤城</p>
      <markdown :content="content" show="true"></markdown>
    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import MarkdownArea from "../components/markdown.vue"
import Belif from './belief.md'

var debug = require('debug')('belief');

export default {
    components: {
        'markdown': MarkdownArea
    },
    data () {
      return {
        content: ''
      }
    },
    computed: {
    },
    methods: {
    },
    created() {
      this.content = Belif;
    }
}

</script>

<style lang="stylus">

body
    background #fff

.main-container
    max-width 700px
    margin-top 60px
    margin-bottom 60px
    h3.title
      text-align center
      padding-bottom 0.3em
      line-height 1.43
      font-size 28px
      font-weight bold
      margin-top 1em
      margin-bottom 16px
    .author
      text-align center
      margin-bottom 40px
</style>
