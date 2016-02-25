<template>
  <div class="notification-list">
    <h2>Notifications</h2>
    <div v-for="notice in notifications" class="item-container">
      <user-avatar :user="notice.sender"></user-avatar>
      <div class="item-content">
        <div class="item-info">{{ notice.category|message }}</div>
        <a class="topic-title" href="/t/{{notice.topic.id}}">{{notice.topic.title}}</a>
      </div>
    </div>
    <div class="clear-button">
      <button class="button buttong--green" @click="clear">Clear</button>
    </div>
  </div>
</template>

<script>
  import util from '../common/util'
  module.exports = {
    data: function() {
      return {
        notifications: [],
        pagination: {}
      };
    },
    filters: {
      message: function(t) {
        var categories = {
          comment: 'commented on your topic',
          like_comment: 'liked your comment',
          like_topic: 'liked your topic',
          mention: 'mentioned you on topic',
        };
        return categories[t] || t;
      }
    },
    methods: {
      fetch: function() {
        this.notifications = [
          {
            category: 'comment',
            topic: {
              title: '标题'
            },
            sender: util.getLocalUser()
          }
        ];
        // api.notification.list(function(resp) {
        //   this.notifications = resp.data;
        //   this.pagination = resp.pagination;
        // }.bind(this));
      },
      hide: function() {
        this.$root.showNotifications = false;
      },
      clear: function() {
        // api.notification.flush();
        this.hide();
        this.$root.notificationCount = 0;
      }
    },
    ready: function() {
      this.fetch();
    },
    components: {
      'user-avatar': require('./user-avatar.vue')
    }
  };
</script>

<style>
.notification-list {
  padding-top: 50px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}
.notification-list h2 {
  color: #666;
}
.notification-list .item-container {
  margin-bottom: 1em;
  padding-bottom: 1em;
}
.notification-list .item-info {
  color: #999;
  line-height: 1;
  font-size: 14px;
  margin-bottom: 6px;
}
.notification-list .clear-button {
  padding: 30px 0;
  text-align: center;
}
/* basic classes */
.item-container .avatar {
  float: left;
  margin-right: 12px;
}
.item-container .item-content {
  overflow: hidden;
}
</style>
