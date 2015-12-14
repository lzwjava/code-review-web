<template>
  <a v-link="{name: 'user', params: {username: user.username}}" v-el:avatar class="avatar" aria-label="View @{{user.username}} profile"></a>
</template>
<script>
  var escape = require('../utils').escape;
  var wordColor = require('word-color');
  module.exports = {
    props: ['user'],
    watch: {
      'user.username': 'compile'
    },
    methods: {
      compile: function() {
        var user = this.user;
        if (!user.username) return;
        var span = '<span style="background-color:#1;color:#2">#3<\/span>';
        var bg = wordColor.rgb(user.username);
        var fg = 'white';
        if ((bg[0] * 299 + bg[1] * 587 + bg[2] * 114) > 200000) {
          fg = 'black';
        }

        span = span
          .replace('#1', 'rgb(' + bg.join(',') + ')')
          .replace('#2', fg)
          .replace('#3', escape(user.username.charAt(0).toUpperCase()));
        var el = this.$els.avatar;
        el.innerHTML = span;
        if (!user.avatar_url) return;
        var key = 'avatar:' + user.avatar_url;
        // it is marked as 404
        if (sessionStorage[key]) return;

        var img = new Image();
        img.src = user.avatar_url;
        img.alt = user.username;
        img.onload = function() {
          el.innerHTML = '';
          el.appendChild(img);
        };
        img.onerror = function() {
          sessionStorage[key] = '1';
        };
      }
    },
    compiled: function() {
      this.compile();
    }
  };
</script>

<style>
  .avatar {
    display: inline-block;
    text-decoration: none;
    width: 48px;
    height: 48px;
    line-height: 48px;
  }
  .avatar.small {
    width: 36px;
    height: 36px;
    line-height: 36px;
  }
  .avatar:hover {
    opacity: 0.8;
  }
  .avatar span, .avatar img {
    display: inline-block;
    width: 100%;
    height: 100%;
    color: white;
    text-align: center;
    font-size: 24px;
    border-radius: 3px;
    vertical-align: top;
  }
  .avatar.small span {
    font-size: 18px;
  }
  .avatar.circle span, .avatar.circle img {
    border-radius: 50%;
  }
</style>
