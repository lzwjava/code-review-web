<template>
    <div class="main-container">
        <div class="sub-nav">

        </div>

        <div class="write-container">
            <div class="item left">
                <div class="header">
                    <h3>订单需求一览</h3>
                </div>
                <div class="content">
                    <h4>订单信息</h4>
                    <div class="row">
                        <span>申请者</span>
                        <span class="right">{{order.learner.username}}</span>
                    </div>
                    <div class="row">
                        <span>项目大致代码行数</span>
                        <span class="right">{{order.codeLines}}</span>
                    </div>
                    <div class="row">
                        <span>项目Github地址</span>
                        <a target="_blank" :href="order.gitHubUrl">
                          <button class="btn-github"></button>
                        </a>
                    </div>
                    <h4>备注</h4>
                    <div class="row">
                        {{order.remark}}
                    </div>
                </div>
            </div>

            <div class="item right">
                <div class="header">
                    <h3>{{rightTitle}}</h3>
                </div>
                <div class="content">
                    <form @submit.prevent="submitReview" style="max-width:600px;">
                        <div class="row input-row">
                            <span>请输入 Review 标题</span>
                            <input v-model="title" required></input>
                        </div>
                        <div class="row input-row">
                            <span>请输入 Review 结果</span>
                        </div>
                        <div class="edit-area">
                            <markdown-area class="form-field form-content yue" :content.sync="content" placeholder="有什么可以改进的吗？" @submit="submitReview" required></markdown-area>
                            <p class="tip">支持 Markdown</p>
                        </div>
                        <button class="submit-btn">提交结果</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import MarkdownArea from "../components/markdown-area.vue"

var debug = require('debug')('write-review');

window.document.title = "填写 Review";

export default {
    components: {
        'markdown-area': MarkdownArea
    },
    data () {
        return {
            order: {
                learner: {}
            },
            title: '',
            content: '',
            review: {}
        }
    },
    computed: {
        mode () {
            if (this.order.status == "finished") {
                return 1; // edit
            } else {
                return 0; // create
            }
        },
        rightTitle () {
            debug('mode: ' + this.mode);
            switch(this.mode) {
                case 0: return '填写 Review 结果';
                case 1: return '编辑 Review 结果';
            }
            return '';
        }
    },
    methods: {
        returnOrders () {
            setTimeout(() => {
                window.location = '/order.html';
            }, 3000);
        },
        addReview() {
            this.$http.post(serviceUrl.reviewsAdd, {
                orderId: this.order.orderId,
                title: this.title,
                content: this.content
            }).then((resp) => {
                if (util.filterError(this, resp)) {
                    util.show(this, 'success', '提交成功，将返回订单列表');
                    this.returnOrders();
                }
            }, util.httpErrorFn(this));
        },
        editReview() {
            this.$http.patch(serviceUrl.reviewsEdit.replace(/:id/, this.review.reviewId), {
                title: this.title,
                content: this.content
            }).then((resp) => {
                if (util.filterError(this, resp)) {
                    util.show(this, 'success', '编辑成功，将返回订单列表');
                    this.returnOrders();
                }
            }, util.httpErrorFn(this));
        },
        submitReview(e) {
            e.preventDefault();
            switch(this.mode) {
                case 0: this.addReview(); break;
                case 1: this.editReview(); break;
            }
        }
    },
    created() {
        var params = util.getSearchParameters()
        if (!params.id) {
            util.show(this, 'error', '请提供 id 参数');
            return;
        }
        this.$http.get(serviceUrl.ordersView.replace(/:id/,params.id))
        .then((resp) => {
            if (util.filterError(this, resp)) {
                debug('%j', resp.data.result);
                this.order = resp.data.result;
                if (this.order.status == "finished") {
                  this.$http.get(serviceUrl.ordersReview.replace(/:id/, params.id), {})
                  .then((resp) => {
                    if (util.filterError(this, resp)) {
                      var review = resp.data.result;
                      this.review = review;
                      debug('%j', review);
                      this.title = review.title;
                      this.content = review.content;
                    }
                  }, util.httpErrorFn(this))
                }
            }
        }, util.httpErrorFn(this));
    }
}

</script>


<style lang="stylus">

@import '../stylus/variables.styl';

.write-container
    display flex
    flex-direction row
    justify-content center
    padding 20px
    .item
        background white
        &.left
            flex 1
            margin-right 25px
            border 1px solid rgba(0,0,0,0.15)
            box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
            -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
        &.right
            flex 2
            margin-left 25px
            border 1px solid rgba(0,0,0,0.15)
            box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
            -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
        .header
            border-bottom 1px solid rgba(0,0,0,.15)
            padding 30px
            h3
                font-size 16px
                font-weight 600
        h4
            border-bottom 1px solid rgba(0,0,0,.15)
            color rgba(40,47,49,.6)
            padding-top 10px
            padding-bottom 10px
        .content
            padding 30px
        .row
            padding 10px 0
            text-align left
            line-height: 180%;
            span
                line-height 30px
                color rgba(40,47,49,.6)
                &.right
                    pull-right()
                    color textColor
            .btn-github
                width 84px
                height 27px
                background-size contain
                pull-right()
        .input-row
            span
                display block
            input
                width 100%
                line-height 40px
                border 1px inset
                font-size 18px
                border 1px solid rgba(40,47,49,0.3)
                text-indent 10px
                font-size 16px
                opacity 0.8

        .edit-area
            textarea
                width 100%
                height 200px
                font-size 16px
                margin-top 5px
                border 1px solid rgba(40,47,49,0.3)
                font-size 16px
                opacity 0.8
                padding 10px
                max-width 597px

            p.tip
                color rgba(40,47,49,.6)
                font-size 13px
                margin 8px 0px
        .submit-btn
            btn(#00CFF5, #fff, 0.8, 220px, 50px)
            margin 20px auto 10px
            display block
            font-size: 1rem;
            line-height: 50px;

</style>
