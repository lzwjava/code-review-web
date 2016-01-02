<template>
    <div class="main-container">
        <div class="header-area">
            <h1 class="title">{{order.review.title}}</h1>
            <div class="intro">
                <img src="../img/icon/clock.png">
                <span class="review-time">{{order.review.created}}</span>
                <img src="../img/icon/reward.png">
                <span>54</span>
                <img src="../img/icon/small-pen.png">
                <span><a :href="'./reviewer.html?id=' + order.reviewer.id">{{order.reviewer.username}}</a></span>
             </div>
        </div>

        <div class="content-area">
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

.header-area
    max-width 900px
    margin 0px auto
    text-align center
    h1.title
        font-size 2.2rem
        margin 20px 0px
    .intro
        img
            width 18px
            height 18px
        span
            margin-right 20px
            line-height 24px
            font-size 20px

.content-area
    max-width 700px
    margin 40px auto

</style>
