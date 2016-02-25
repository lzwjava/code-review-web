<template>
    <div class="main-container">
      <div class="notification-list">
        <h2>通知</h2>
        <div v-for="notice in notifications" class="item-container">
          <user-avatar :user="notice.sender"></user-avatar>
          <div class="item-content">
            <div class="item-info">{{ notice.type |message }}</div>
            <!-- <a class="topic-title" href="/t/{{notice.topic.id}}">{{notice.}}</a> -->
          </div>
        </div>
        <div class="clear-button">
          <button class="btn btn-blue" @click="clear">标为已读</button>
        </div>
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
      notifications: []
    };
  },
  filters: {
    message: function(t) {
      var categories = {
        comment: '评论了你',
        new_order: '新的订单',
        finish_order: '完成了订单'
      };
      return categories[t] || t;
    }
  },
  methods: {
    fetch: function() {
      this.$http.get(serviceUrl.notifications)
       .then((resp) => {
         if (util.filterError(this, resp)) {
           this.notifications = resp.data.result;
           debug('notifications: %j', this.notifications);
         }
       }, util.httpErrorFn(this))
    },
    hide: function() {
      this.$root.showNotifications = false;
    },
    clear: function() {
      this.$http.patch(serviceUrl.notifications, {})
        .then((resp) => {
          if (util.filterError(this, resp)) {
          }
      }, util.httpErrorFn(this));
      this.hide();
      this.$root.notificationCount = 0;
    }
  },
  ready: function() {
    this.fetch();
  }
};

</script>


<style lang="stylus">
@import "../stylus/variables.styl"

.notification-list
  padding-top 50px
  max-width 560px
  margin-left auto
  margin-right auto
  h2
    color #fff
    margin-bottom 1em
  .item-container
    margin-bottom 1em
    padding-bottom 1em
    background #fff
    height 100px
    .avatar
      width 80px
  .item-info
    color #999
    line-height 1
    font-size 14px
    margin-bottom 6px
  .clear-button
    padding 30px 0
    text-align center

.item-container
  .avatar
    float left
    margin-right 12px
  .item-content
    overflow hidden

</style>
