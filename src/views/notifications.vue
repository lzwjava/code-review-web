<template>
    <div class="main-container">
      <div class="notification-list">
        <h2>通知</h2>
        <div class="action">
          <button class="btn-notice show-all" :class="{'active': mode=='all'}" @click="showAll">全部通知</button>
          <button class="btn-notice" :class="{'active': mode=='unread'}" @click="showUnread">未读通知</button>

          <button class="btn mark-read" @click="clear"><i class="fa fa-fw fa-check"></i>全部标记为已读</button>
        </div>

        <ul class="unstyled">
          <loading>
            <li class="" v-for="notice in notifications">
              <a href="">{{notice.sender.username}}</a> {{ notice |message }}
              <span class="time">{{notice.created | formatTimeCommon}}</span>
            </li>
          </loading>
        </ul>
      </div>
    </div>
</template>

<script type="text/javascript">

require('font-awesome/css/font-awesome.css');

import util from '../common/util'
import serviceUrl from '../common/serviceUrl'
import UserAvatar from '../components/user-avatar.vue'
import Loading from '../components/loading.vue'

var debug = require('debug')('notifications');

module.exports = {
  components: {
    'user-avatar': UserAvatar,
    'loading': Loading
  },
  data: function() {
    return {
      notifications: [],
      mode: 'all'
    };
  },
  filters: {
    message: function(notice) {
      var categories = {
        agree: notice.text,
        comment: '评论了你',
        new_order: '向您申请了 Code Review',
        finish_order: '已审阅完了您的代码'
      };
      return categories[notice.type] || t;
    }
  },
  methods: {
    showAll () {
      this.mode = 'all';
      this.fetch();
    },
    showUnread() {
      this.mode = 'unread';
      this.fetch();
    },
    fetch: function() {
      var params = {};
      if (this.mode == 'unread') {
        params.unread = 1;
      }
      this.$broadcast('loading');
      this.$http.get(serviceUrl.notifications, params)
       .then((resp) => {
         if (util.filterError(this, resp)) {
           this.notifications = resp.data.result;
           this.$broadcast('loaded');
           debug('notifications: %j', this.notifications);
         }
       }, util.httpErrorFn(this))
    },
    clear: function() {
      this.$http.patch(serviceUrl.notifications, {})
        .then((resp) => {
          if (util.filterError(this, resp)) {
            this.fetch();
          }
      }, util.httpErrorFn(this));
    }
  },
  ready: function() {
    this.fetch();
  }
};

</script>


<style lang="stylus">
@import "../stylus/variables.styl"

.main-container
  height 600px
  .notification-list
    margin-top 50px
    max-width 600px
    margin-left auto
    margin-right auto
    h2
      font-size 28px
      margin-bottom 40px
      text-align center
    .action
      .btn-notice
        font-size 16px
        color #999999
        padding 0px 10px
        &.show-all
          border-right 1px solid #d9d9d9
        &.active
          color #000
      .mark-read
        float right
        background whitesmoke
        box-shadow 0px 1px 2px 0px rgba(0,0,0,0.50)
        color #999
        padding 5px
        &:hover
          color #555555
          background-color #eeeeee
    ul.unstyled
      padding-top 10px
      margin-top 20px
      border-top 2px solid #d9d9d9
      li
        padding 10px
        margin-bottom 1px
        border-bottom 1px solid #eeeeee
        line-height 1.5
        span.time
          float right
          padding-left 20px
          margin-top 2px
          font-size 12px
          color #999999


</style>
