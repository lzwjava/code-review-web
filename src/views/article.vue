<template>
    <div class="main-container">

    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import MarkdownArea from "../components/markdown-area.vue"

var debug = require('debug')('article');

window.document.title = "Review";

export default {
    components: {
        'markdown-area': MarkdownArea
    },
    data () {
        return {
            order: {
                learner: {}
            }
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
    }
}

</script>


<style lang="stylus">

@import '../stylus/variables.styl';

</style>
