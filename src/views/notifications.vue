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
              {{notice.sender.username}}
              <span v-if="notice.type == 'agree'">通过了您的审核，欢迎成为
                <a @click="clickNotification(notice)" :href="'./reviewer.html?id=' + notice.userId">审阅者</a>的一员。
              </span>
              <span v-if="notice.type == 'comment'">评论了你参与的
                <a @click="clickNotification(notice)" :href="'./article.html?reviewId=' + notice.comment.reviewId">Review</a>
              </span>
              <span v-if="notice.type == 'new_order'">向您申请了
                <a @click="clickNotification(notice)" href="./order.html">Code Review</a>
              </span>
              <span v-if="notice.type == 'finish_order'">已审阅完了您的代码，请前往
                <a @click="clickNotification(notice)" :href="'./article.html?reviewId='+notice.order.reviewId">案例页</a>查看。
              </span>
              <span class="time">{{notice.created | fromNowTime}}</span>
            </li>
          </loading>
        </ul>
      </div>
    </div>
</template>

<script type="text/javascript">

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
  methods: {
    showAll () {
      this.mode = 'all';
      this.fetch();
    },
    clearNotifications(notificationId) {
      var url;
      if (notificationId) {
        url = serviceUrl.notificationMarkAsRead.replace(/:id/, notificationId)
      } else {
        url = serviceUrl.notificationsAllMark;
      }
      this.$http.patch(url, {})
        .then((resp) => {
          if (util.filterError(this, resp)) {
            var nav = this.$root.$children[0];
            if (nav && nav.check) {
              nav.check()
            }
            if (!notificationId) {
              // 全部标记为已读的时候才重新加载，因为单条标记的时候，去到新的的页面，可能要回过头来看谁评论了我
              this.fetch();
            }
          }
      }, util.httpErrorFn(this));
    },
    clickNotification(notification) {
      if (notification.unread == 1) {
        this.clearNotifications(notification.notificationId);
      }
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
      this.clearNotifications();
    }
  },
  ready () {
    this.fetch();
  },
  created() {
    var params = util.getSearchParameters();
    if (params.unread === 'true') {
      this.mode = 'unread';
    }
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
        background #33c96f
        -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
        box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
        border 1px solid #31b766
        color white
        padding 8px
        font-size 14px
        margin-top -9px
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
        a
          color #4094c7

</style>
