<template>
    <div class="main-container">
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

</style>
