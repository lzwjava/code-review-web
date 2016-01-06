<template>
  <loading>
    <div class="main-container">
        <div class="top-region">
            <div class="left-region">

                <div class="region-title">大神信息</div>

                <div class="center-region">
                    <div class="basic-info">
                        <user-avatar :user="reviewer"></user-avatar>
                        <p class="name">{{reviewer.username}}</p>
                        <p class="intro">{{reviewer.introduction}}</p>
                    </div>

                    <div class="count-region">
                        <div class="count-item">
                          <p class="num">{{reviewer.tags.length}}</p>
                          <p class="text">擅长领域</p>
                        </div>
                        <div class="count-item">
                          <p class="num">{{reviewer.orderCount}}</p>
                          <p class="text">审核案例</p>
                        </div>
                        <div class="count-item">
                          <p class="num">{{reviewer.experience}}</p>
                          <p class="text">经验年限</p>
                        </div>
                    </div>

                    <div>
                        <button class="btn-common btn-blue order-btn" @click="overlayStatus = true">申请 Code Review</button>
                    </div>
                </div>
            </div>

            <div class="right-region">
                <p class="region-title">擅长领域</p>
                <div class="tag-list">
                    <tag v-for="tag in reviewer.tags" :tag="tag" :showDel="false"></tag>
                </div>
            </div>
        </div>

        <div class="order-list">
            <div class="list-header">
                <div class="order-title">审核案例</div>
            </div>
        </div>

        <overlay :overlay.sync="overlayStatus">
          <order-form :reviewer-id="reviewer.id"></order-form>
        </overlay>
    </div>
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

var debug = require('debug')('reviewer-detail');

export default {
    components: {
        'user-avatar': UserAvatar,
        'tag': Tag,
        'order-form': OrderForm,
        'overlay': Overlay,
        'loading': Loading
    },
    data () {
        return {
            reviewer: {
                tags: []
            },
            orders: [],
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
        this.$http.get(serviceUrl.reviewerView, {
            id:reviewerId
        }).then((resp) => {
            if (util.filterError(this, resp)) {
              this.$broadcast('loaded');
              this.reviewer = resp.data.result;
              debug('%j', this.reviewer);
            }
        }, util.httpErrorFn(this));
        this.$http.get('users/' + reviewerId + '/orders', {})
        .then((resp) => {
          if (util.filterError(this, resp)) {
            debug('orders: %j', resp.data.result);
            this.orders = resp.data.result;
          }
        }, util.httpErrorFn(this));
    }
}

</script>


<style lang="stylus">

.top-region
    height 438px

.left-region
    background url('../img/reviewer-detail-bg.png')
    width 69%
    float left
    height 100%

.right-region
    width 28%
    height 100%
    background url('../img/reviewer-tag.png')
    float right
    .tag-list
        margin 10px
        .tag-item
            width 50%
            float left
            padding 10px

.order-list
    background white
    margin-top 30px
    .list-header
        height 60px
        position relative
        .order-title
            position absolute
            margin auto 20px
            height 20px
            line-height 20px
            top 0
            bottom 0
            left 0
            right 0

.region-title
    margin-left 35px
    margin-top 40px

.center-region
    width 373px
    margin 0 auto
    text-align center
    .basic-info
        width 260px
        margin 0 auto
        .avatar
            width 100px
            height 100px
        .name
            margin-top 20px
        .intro
            margin-top 20px

.count-region
    margin-top 20px
    .count-item
      width 120px
      display inline-block
      .num
        font-size 24px
      .text
        font-size 12px
        color #3B3E3F
        opacity .6
        margin-top 10px

.order-btn
    margin-top 50px
    padding 20px

</style>
