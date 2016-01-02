<template>
    <div class="main-container">
        <div class="content-area">
            <h1 class="title">{{order.review.title}}</h1>
            <div><span>{{order.review.created}}</span> <span>{{order.reviewer.username}}</span></div>
            <markdown :content="order.review.content" :show="true"></markdown>
        </div>
    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import Markdown from "../components/markdown.vue"

var debug = require('debug')('article');

window.document.title = "Review";

export default {
    components: {
        'markdown': Markdown
    },
    data () {
        return {
            order: {
                learner: {},
                review: {
                    content: ''
                },
                reviewer: {}
            }
        }
    },
    computed: {
    },
    methods: {
    },
    created() {
        var params = util.getSearchParameters()
        if (!params.id) {
            util.show(this, 'error', '请提供 id 参数');
            return;
        }
        this.$http.get(serviceUrl.ordersView, {
            orderId: params.id
        }).then((resp) => {
            if (util.filterError(this, resp)) {
                debug('%j', resp.data.result);
                this.order = resp.data.result;
            }
        }, util.httpErrorFn(this));
    }
}

</script>


<style lang="stylus">

@import '../stylus/variables.styl';

body
    background #fff

.content-area
    max-width 600px
    margin 0 auto
    h1.title
        font-size 2.2rem
        margin 20px 0px

</style>
