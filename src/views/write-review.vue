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
                        <button class="github">{{order.gitHubUrl}}</button>
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
                    <form @submit="submitReview">
                        <div class="row input-row">
                            <span>请输入 Review 标题</span>
                            <input v-model="title" required></input>
                        </div>
                        <div class="row input-row">
                            <span>请输入 Review 结果</span>
                        </div>
                        <div class="edit-area">
                            <textarea v-model="content" required>

                            </textarea>
                            <p>支持 Markdown</p>
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

var debug = require('debug')('write-review');

window.document.title = "填写 Review";

export default {
    components: {
    },
    data () {
        return {
            order: {
                learner: {}
            },
            title: '',
            content: ''
        }
    },
    computed: {
        mode () {
            if (this.order.review != null) {
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
            this.$http.post(serviceUrl.reviewsEdit, {
                reviewId: this.order.review.reviewId,
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
        this.$http.get(serviceUrl.ordersView, {
            orderId: params.id
        }).then((resp) => {
            if (util.filterError(this, resp)) {
                debug('%j', resp.data.result);
                this.order = resp.data.result;
                if (this.order.review) {
                    this.title = this.order.review.title;
                    this.content = this.order.review.content;
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
        &.right
            flex 2
            margin-left 25px
        .header
            border-bottom 1px solid rgba(0,0,0,.15)
            padding 30px
            h3
                font-size 20px
                font-weight 500
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
            span
                line-height 30px
                color rgba(40,47,49,.6)
                &.right
                    pull-right()
                    color textColor
                .github
                    btn(url(../img/icon/github.png), white, 1, 85, 30)
                    pull-right()
        .input-row
            span
                display block
            input
                width 100%
                line-height 40px
                border 1px inset
                font-size 18px
        .edit-area
            textarea
                width 100%
                height 200px
                font-size 16px
            p
                color rgba(40,47,49,.6)
                font-size 13px
                margin 5px 0px
        .submit-btn
            btn(#00CFF5, #fff, 0.8, 150px, 30px)
            margin 30px auto 10px
            display block
            
</style>
