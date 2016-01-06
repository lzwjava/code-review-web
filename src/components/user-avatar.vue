<template>
  <a v-el:avatar class="avatar" aria-label="View @{{user.username}} profile">
    <img v-if="user.avatarUrl" :src="user.avatarUrl" :alt="user.username" />
    <span v-if="!user.avatarUrl" style="{background-color: spanBgColor, color: spanColor}">{{user.username}}</span>
  </a>
</template>
<script>
  var debug = require('debug')('components');
  var escape = require('../common/util').escape;
  var wordColor = require('word-color');
  module.exports = {
    props: ['user'],
    data (){
      return {
        spanBgColor: '',
        spanColor: 'white'
      }
    },
    compiled: function() {
      var user = this.user;
      if (!user.username) {
        // 因为父对象的 user 一开始可能没有数据
        return;
      }
      debug('user: %j', user);
      if (!user.avatarUrl) {
        var bg = wordColor.rgb(user.username);
        if ((bg[0] * 299 + bg[1] * 587 + bg[2] * 114) > 200000) {
          this.spanColor = 'black';
        }
        this.spanBgColor = 'rgb(' + bg.join(',') + ')';
        user.username = escape(user.username.charAt(0).toUpperCase())
        debug('avatarUrl: ' + user.avatarUrl);
      }else{
        //debug('avatarUrl: ' + user.avatarUrl);
      }
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
    horizontal-align:middle;
    vertical-align: middle;
  }
  .avatar.small span {
    font-size: 18px;
  }
  .avatar.circle span, .avatar.circle img {
    border-radius: 50%;
  }
</style>
