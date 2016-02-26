<template>

  <div class="comment-container">
    <div class="comment-list">

      <div class="comment-head">
        <span class="title">内容评论</span>
        <span class="count">{{comments.length}}</span>
        <button class="comment-new" @click="commentAuthor"></button>
      </div>

      <ul class="comment-ul">
        <li class="comment-item" v-for="comment in comments">
          <div class="item-left">
            <user-avatar :user="comment.author"></user-avatar>
          </div>
          <div class="item-right">
            <div class="item-header">
              <span class="name">{{comment.author.username}}</span>
              <span><i class="fa fa-clock-o fa-fw"></i>{{comment.created | fromNowTime}}</span>
            </div>

            <markdown :content="comment | content" show="true"></markdown>

            <div class="">
              <button class="btn-reply" @click="reply(comment)"><i class="fa fa-comment-o fa-fw"></i>回复</button>
            </div>
          </div>
        </li>
      </ul>

      <form v-el:comment-form class="comment-form" action="" @submit="submitComment" method="post">
        <h3>进行评论</h3>
        <div class="form-main">
          <div class="form-left">
            <user-avatar :user="currentUser"></user-avatar>
          </div>
          <div class="form-right">

            <markdown-area v-ref:markdown-area :content.sync="content" :placeholder="placeholder" @submit="submitComment" required></markdown-area>

            <div class="form-comment">
              <a class="markdown-icon" href="https://guides.github.com/features/mastering-markdown/" target="_blank">
                <i class="fa fa-check"></i>Markdown
              </a>
              <button class="btn btn-green btn-comment">评论</button>
            </div>

          </div>
        </div>
      </form>

    </div>
  </div>


</template>

<script type="text/javascript">

import serviceUrl from '../common/serviceUrl.js'
import util from '../common/util.js'
import UserAvatar from './user-avatar.vue'
import MarkdownArea from '../components/markdown-area.vue'
import Markdown from '../components/markdown.vue'

require('font-awesome/css/font-awesome.css');

var debug = require('debug')('comment-list');

export default {
  props: ['reviewId'],
  components: {
    'user-avatar': UserAvatar,
    'markdown-area': MarkdownArea,
    'markdown': Markdown
  },
  data() {
    return {
      comments: [],
      currentUser: {},
      content: '',
      parentComment: null,
      placeholder: ''
    };
  },
  computed: {
    placeholder () {
      if (this.parentComment == null) {
        return '评论给审阅者';
      } else {
        return '回复 ' + this.parentComment.author.username
      }
    }
  },
  filters: {
    content (comment) {
      debug('content comment: %j', comment);
      if (comment.parentId) {
        return '回复 ' + comment.parent.author.username +'：' + comment.content;
      } else {
        return comment.content;
      }
    }
  },
  methods: {
    loadComments () {
      this.$http.get(serviceUrl.commentsGet.replace(/:id/, this.reviewId))
       .then((resp) => {
         if (util.filterError(this, resp)) {
           this.comments = resp.data.result;
           debug('comments: %j', this.comments);
         }
        }, util.httpErrorFn(this))
    },
    scrollToComment() {
      debug('scroll');
      this.$els.commentForm.scrollIntoView(false);
      //elm.focus();
      this.$refs.markdownArea.focus();
    },
    reply(comment) {
      this.parentComment = comment;
      this.scrollToComment();
    },
    commentAuthor() {
      this.parentComment = null;
      this.scrollToComment();
    },
    submitComment(e) {
      e && e.preventDefault();
      debug('submit');
      if (!this.content) {
        util.show(this, 'warn', '请输入点什么');
        return;
      }
      if (!this.currentUser.username) {
        // 弹出注册 form
        debug('注册');
        util.show(this, 'info', '请登录');
        return;
      }
      var params = {content: this.content};
      if (this.parentComment) {
        params.parentId = this.parentComment.commentId;
      }
      this.$http.post(serviceUrl.commentCreate.replace(/:id/, this.reviewId),params)
      .then((resp) => {
         if (util.filterError(this, resp)) {
           this.content = '';
           this.loadComments();
         }
       }, util.httpErrorFn(this));
    }
  },
  created() {
    if (!this.reviewId) {
      return;
    }
    this.currentUser = util.getLocalUser();
    debug('localUser:' + this.currentUser);
    this.loadComments();
  },
  events: {
  }
}

</script>

<style lang="stylus">

.comment-container
  background-color #F1F5F6
  .comment-list
    padding-top 0px
    padding-bottom 100px
    max-width 700px
    margin 0px auto
    .comment-head
      text-align center
      padding 40px 0px
      .title
        font-size 30px
      .count
        padding 2px 8px
        margin-left 5px
        background #00CFF5
        border-radius 20px
        font-size 10px
        color #FFFFFF
        line-height 12px
      .comment-new
        width 35px
        height 35px
        float right
        background url("../img/icon/new-comment.png")
        background-size contain
    .comment-ul
      .comment-item
        border-top 1px solid rgba(0,0,0,0.15)
        padding 15px 0px
        position relative
        img.icon
          width 16px
          vertical-align text-top
        .item-left
          position absolute
          left 0px
          width 100px
          text-align center
          .avatar
            img
              width 50px
              height 50px
        .item-right
          margin-left 100px
          display inline-block
          .item-header
            .name
              margin-right 10px
          .markdown-body
            margin 10px 0px
            font-size 16px
            color rgba(40,47,48,0.80)
            line-height 27.2px
          .btn-reply
            color #b4b9ba
    .comment-form
      margin-top 50px
      background #FDFFFF
      border 0px solid rgba(0,0,0,0.15)
      box-shadow 0px -1px 4px 0px rgba(135,135,135,0.15)
      border-radius 3px
      position relative
      h3
        text-align center
        font-size 20px
        padding 15px 0px
        border-bottom 1px solid #E7E7E7
      .form-main
        padding-top 20px
        padding-bottom 20px
        .form-left
          position absolute
          width 100px
          text-align center
          .avatar
            img
              width 50px
              height 50px
        .form-right
          margin-left 100px
          .markdown-area
            width 95%
            min-height 120px
            margin 0px auto
            textarea
              width 100%
              min-height 100px
              border 1px solid rgba(40,47,48,0.30)
              box-shadow 0px 1px 4px 0px rgba(0,0,0,0.03);
              border-radius 3px
              padding 5px
              font-size 16px
          .form-comment
            height 50px
            padding-top 10px
            padding-right 18px
            .markdown-icon
              margin-left 10px
              color rgba(0,0,0,0.5)
            .btn-comment
              float right
              padding 10px 20px

</style>
