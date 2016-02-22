<template>
  <loading>
    <div class="review-bg">
        <div class="top-region">  
            <div class="review-info">
                <div class="basic-info">
                    <user-avatar :user="reviewer"></user-avatar>
                </div>
            </div>
            <div class="review-info2">
                <h2>{{reviewer.username}}</h2>
                <h3>{{reviewer.introduction}}</h3>
                <p><span>{{reviewer.tags.length}} 个擅长领域</span><span>{{reviewer.orderCount}} 个审核案例</span><span>{{reviewer.experience}} 年经验</span></p>
            </div>
        </div>
    </div>
    <div class="reviewboard">
        <div class="tag-list">
                        <div class="tag-list-text">
                            <span>{{reviewer.username}}擅长</span>
                            <tag v-for="tag in reviewer.tags" :tag="tag" :showDel="false"></tag>
                            <span>等领域</span>
                        </div>
                        <button class=" order-btn" @click="overlayStatus = true">申请 Code Review</button>
                    </div>
        
    </div>

    <div class="reviewer-case">
        <h3>{{reviewer.username}} 的审核案例</h3>
        <div class="list-container">
            <reviewer-case :article-list="reviewerCase"></reviewer-case>
        </div>
    </div>

    <overlay :overlay.sync="overlayStatus">
      <order-form :reviewer-id="reviewer.id"></order-form>
    </overlay>
  </loading>

</template>

<script type="text/javascript">

import Overlay from '../components/overlay.vue'
import UserAvatar from '../components/user-avatar.vue'
import OrderForm from '../components/order-form.vue'
import Tag from '../components/tag.vue'
import Loading from '../components/loading.vue'
import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import ArticleList from '../components/article-item.vue'

var debug = require('debug')('reviewer-detail');

export default {
    components: {
        'user-avatar': UserAvatar,
        'tag': Tag,
        'order-form': OrderForm,
        'overlay': Overlay,
        'loading': Loading,
        'reviewer-case': ArticleList
    },
    data () {
        return {
            reviewer: {
                tags: []
            },
            reviewerCase: [],
            overlayStatus: false
        }
    },
    methods: {
    },
    created() {
        this.$on('loaded', ()=> {
          debug('on loaded in detail');
          return true;
        });
        var params = util.getSearchParameters()
        if (!params.id) {
            util.show(this, 'error', '请提供 id 参数');
            return;
        }
        var reviewerId= params.id
        this.$http.get(serviceUrl.reviewerView.replace(/:id/, reviewerId))
        .then((resp) => {
            if (util.filterError(this, resp)) {
              this.$broadcast('loaded');
              this.reviewer = resp.data.result;
              debug('%j', this.reviewer);
            }
        }, util.httpErrorFn(this));
        this.$http.get(serviceUrl.reviewerReviews.replace(/:id/, reviewerId), {})
        .then((resp) => {
          if (util.filterError(this, resp)) {
            this.reviewerCase = resp.data.result;
          }
        }, util.httpErrorFn(this));
    }
}

</script>


<style lang="stylus">
@import "../stylus/variables.styl";
body
    background: #FDFFFF
.review-bg 
    background url("../img/heroimage.png")
    background-size cover
    background-position-y: -30px;
.top-region
    height 466px
    border-bottom: 1px solid rgba(0,0,0,0.15);
    .review-info
        padding-top 90px
        width 1160px
        margin 0 auto
        text-align center
    .basic-info
        margin 0 auto
        float none
        width 128px
        height 128px
        background white
        border-radius 50%
        border 1px solid rgba(0,0,0,0.1)
        img
            width 100%
            height 100%
    .review-info2
        width: 1160px
        margin 40px auto
        text-align center
        h2
            font-size 1.5rem
            margin-bottom 25px
        h3
            max-width 600px
            line-height 150%
            margin-bottom 25px
            margin-left auto
            margin-right auto
            text-align center
        p
            font-size 0.88rem
            opacity .6
            span
                margin-right 20px
                font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
.reviewboard
    height 90px
    background #F1F5F6
    border-bottom 1px solid rgba(0,0,0,0.15)
    .tag-list
        width 1160px
        padding-top 20px
        padding-bottom 20px
        font-size 0.88rem
        line-height 50px
        margin 0 auto
        .tag-list-text
            margin-left 60px
            float left
            .tag-item
              margin-left: 5px;
              margin-right 5px
            .point
              margin 0px
        .order-btn
            btn(blue, white, 1, 220, 50)
            float right
.reviewer-case
    margin 0 auto
    width 1160px
    h3
        line-height 80px
        padding-left 60px
        border-bottom 1px solid rgba(0,0,0,.15)
</style>
