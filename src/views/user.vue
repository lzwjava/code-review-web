<template>
<div class="user-view">
  <div class="header">
    <div class="header__cover cover">
      <div class="cover__text">
        <div class="item-container container" v-if="user.username">
          <user-avatar :user="user"></user-avatar>
          <div class="item-content">
            <h2>{{ name }}</h2>
            <p v-html="user.description|urlize"></p>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <nav class="header__nav nav">
          <a class="nav__item" v-link="'/u/' + username">Topics</a>
        </nav>
      </div>
    </div>
  </div>
  <router-view :user="user"></router-view>
</div>
</template>

<script>
  var api = require('../api');
  module.exports = {
    data: function() {
      return {
        cursor: 0,
        user: {}
      }
    },
    computed: {
      name: function() {
        return this.user.name || this.user.username;
      },
      username: function() {
        return this.$route.params.username;
      },
      isOwn: function() {
        return this.$root.user.username == this.username;
      }
    },
    route: {
      data: function(transition) {
        var username = transition.to.params.username;
        document.title = this.$site.name + ' — ' + username;
        api.user.profile(username, function(resp) {
          transition.next({user: resp});
        });
      }
    },
    components: {
      'user-avatar': require('../components/user-avatar.vue'),
    }
  };
</script>
