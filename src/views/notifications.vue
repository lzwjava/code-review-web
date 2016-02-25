<template>
    <div class="main-container">
      <div class="notification-list">
        <h2>通知</h2>
        <div class="action">
          <button class="btn-notice show-all" :class="{'active': mode=='all'}" @click="showAll">全部通知</button>
          <button class="btn-notice" :class="{'active': mode=='unread'}" @click="showUnread">未读通知</button>

          <button class="btn mark-read" @click="clear">全部标记为已读</button>
        </div>

        <ul class="unstyled" v-for="notice in notifications">
          <li class="">
            <a href="">{{notice.sender.username}}</a> {{ notice.type |message }}
            <span class="time">2016-02-25 17:57</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/javascript">

import util from '../common/util'
import serviceUrl from '../common/serviceUrl'
import UserAvatar from '../components/user-avatar.vue'

var debug = require('debug')('notifications');

module.exports = {
  components: {
    'user-avatar': UserAvatar
  },
  data: function() {
    return {
      notifications: [],
      mode: 'all'
    };
  },
  filters: {
    message: function(t) {
      var categories = {
        comment: '评论了你',
        new_order: '向您申请了 Code Review',
        finish_order: '已审阅完了您的代码'
      };
      return categories[t] || t;
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
      this.$http.get(serviceUrl.notifications, params)
       .then((resp) => {
         if (util.filterError(this, resp)) {
           this.notifications = resp.data.result;
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
  min-height 600px
  .notification-list
    margin-top 50px
    max-width 600px
    margin-left auto
    margin-right auto
    h2
      margin-bottom 20px
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
