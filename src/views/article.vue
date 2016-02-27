<template>
    <div>
      <div class="main-container">
        <div class="header-area">
            <h1 class="title">{{review.title}}</h1>
            <div class="intro">
                <img src="../img/icon/clock.png">
                <span class="review-time">{{review.created | formatTime}}</span>
                <img class="title-image" src="../img/icon/visit_count.png">
                <span>{{review.visitCount}}</span>
                <img src="../img/icon/reward.png">
                <span>{{review.rewardCount}}</span>
                <img src="../img/icon/small_pen.png">
                <span><a :href="'./reviewer.html?id=' + order.reviewer.id">{{order.reviewer.username}}</a></span>
             </div>
        </div>

        <div class="order-area">
          <h3>用户需求一览</h3>
          <div class="row">
            <span>申请者</span>
            <span class="right">{{order.learner.username}}</span>
          </div>
          <div class="row">
            <span>项目大致代码行数</span>
            <span class="right">{{order.codeLines}}</span>
          </div>
          <div class="row">
            <span>项目 GitHub 地址</span>
            <span class="right">
              <a target="_blank" :href="order.gitHubUrl">
                <button class="btn-github" type="button" name="button">
                </button>
              </a>
            </span>
          </div>
          <div class="row">
            <span>项目备注</span>
            <p class="remark">{{order.remark}}</p>
          </div>

        </div>

        <div class="content-area">
            <markdown :content="review.content" :show="true"></markdown>
        </div>



        <!-- <div class="bottom-area" @click="overlayStatus = true">
            <button class="btn btn-green btn-reward">
                <img src="../img/icon/white-reward.png">
                <span>打赏支持</span>
            </button>
        </div>

        <overlay :overlay.sync="overlayStatus">
            <reward-form :order="order"></reward-form>
        </overlay> -->
      </div>

      <comment-list :review-id="reviewId"></comment-list>

    </div>
</template>

<script type="text/javascript">

import Overlay from '../components/overlay.vue'
import util from '../common/util'
import serviceUrl from "../common/serviceUrl.js"
import Markdown from "../components/markdown.vue"
import RewardForm from '../components/reward-form.vue'
import CommentList from '../components/comment-list.vue'

var debug = require('debug')('article');

export default {
    components: {
        'markdown': Markdown,
        'overlay': Overlay,
        'reward-form': RewardForm,
        'comment-list': CommentList
    },
    data () {
        return {
            overlayStatus: false,
            order: {
                learner: {},
                reviewer: {}
            },
            review: {
              content: ''
            },
            reviewId: 0
        }
    },
    computed: {
    },
    methods: {
      fetchOrder (orderId) {
        this.$http.get(serviceUrl.ordersView.replace(/:id/, orderId))
        .then((resp) => {
            if (util.filterError(this, resp)) {
                debug('%j', resp.data.result);
                this.order = resp.data.result;
                window.document.title = this.order.reviewer.username + ': ' + window.document.title;
            }
        }, util.httpErrorFn(this));
      },
      postVisit(reviewId) {
        this.$http.post(serviceUrl.reviewVisitCreate.replace(/:id/, reviewId),{
          referrer: document.referrer
        }).then((resp) => {
          if (util.filterError(this, resp)) {
          }
        }, (resp) => {
          // 一秒中访问次数超过1，太快了
        })
      },
      loadReview(reviewId) {
        this.$http.get(serviceUrl.reviewsView.replace(/:id/, reviewId))
        .then((resp) => {
          if (util.filterError(this, resp)) {
            debug('%j', resp.data.result);
            this.review = resp.data.result;
            window.document.title = this.review.title;
            this.fetchOrder(this.review.orderId);
          }
        }, util.httpErrorFn(this));
      }
    },
    created() {
        debug('article created');
        var params = util.getSearchParameters()
        if (!params.reviewId) {
            util.show(this, 'error', '请提供 reviewId 参数');
            return;
        }
        var reviewId = params.reviewId;
        this.reviewId = reviewId;
        debug('broadcast events');
        this.$broadcast('loadComments');
        this.loadReview(reviewId);
        this.postVisit(reviewId);
    }
}

</script>


<style lang="stylus">
@import "../stylus/variables.styl"

body
    background #fff

.navbar
  position fixed
  top 0
  z-index 2

.header-area
    max-width 900px
    margin 0px auto
    text-align center
    margin-top 80px
    h1.title
        font-size 2.2rem
        margin 20px 0px
        font-weight: 200;
    .intro
        .title-image
            vertical-align baseline
        opacity 0.6
        font-family Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,WenQuanYi Micro Hei,Arial,Microsoft Yahei,Verdana,sans-serif
        img
            width 16px
            max-height 16px
            vertical-align text-top
        span
            margin-right 20px
            line-height 24px
            font-size 16px

.bottom-area
.order-area
.content-area
    max-width 700px
    margin 40px auto
.btn-github
    width 84px
    height 27px
    background-size contain

.order-area
  padding 30px
  background #FFFFFF
  border 1px solid rgba(0,0,0,0.15)
  border-radius 3px
  h3
    font-size 18px
  .row
    margin-top 30px
    color gray
    .right
      float right
      color light-dark
    p.remark
      color light-dark
      margin-top 15px
      line-height 150%

.content-area
  margin-top 50px

.bottom-area
    .btn-reward
        padding 15px 35px
        img
            width 18px
            height 18px
            margin-right 10px
        span
            line-height 18px
            font-size 18px

</style>
