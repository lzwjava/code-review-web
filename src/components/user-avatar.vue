<template>
  <a v-el:avatar class="avatar" aria-label="View @{{user.username}} profile"></a>
</template>
<script>
  var debug = require('debug')('components');
  var escape = require('../common/util').escape;
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

        var el = this.$els.avatar;
        if (!user.avatarUrl) {
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
          el.innerHTML = span;
          debug('avatarUrl: ' + user.avatarUrl);
        } else {
          var img = new Image();
          img.src = user.avatarUrl;
          img.alt = user.username;
          img.onload = function() {
            el.innerHTML = '';
            el.appendChild(img);
          };
          img.onerror = function() {
            debug('img onerror');
          };
        }
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
    width: 70%;
    height: 70%;
    color: white;
    text-align: center;
    font-size: 24px;
    border-radius: 50%;

  }
  .avatar img{
    position:relative;
    top: -2px;
    left: -2px;
    
  }
  .avatar.small span {
    font-size: 18px;
  }
  .avatar.circle span, .avatar.circle img {
    border-radius: 50%;
  }
</style>
