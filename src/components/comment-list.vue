<template>

  <div class="comment-container">
    <div class="comment-list">

      <div v-el:comment-head class="comment-head">
        <span class="title">内容评论</span>
        <span class="count">{{comments.length}}</span>
        <button class="comment-new" @click="commentAuthor"></button>
      </div>

      <ul class="comment-ul" v-if="comments.length>0">
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

      <div class="empty-state" v-if="comments.length==0">
        <div class="divider"></div>
        <div class="empty-pic"></div>
        <div class="empty-word">高质量的评论能够提高 Reviewer 的积极性哦</div>
      </div>

      <form v-el:comment-form class="comment-form" action="" @submit="submitComment" method="post">
        <h3>进行评论</h3>
        <div class="form-main">
          <div class="form-left">
            <user-avatar :user="currentUser"></user-avatar>
          </div>
          <div class="form-right">

            <markdown-area v-ref:markdown-area :content.sync="content" :placeholder="placeholder" @submit="submitComment" required></markdown-area>

            <div class="form-comment">
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
        return '评论';
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
      // 因为 created 之后用户登录了，所以重新获取一遍
      this.currentUser = util.getLocalUser();
      if (!this.currentUser.username) {
        // 弹出注册 form
        debug('注册');
        util.show(this, 'info', '请登录');
        return;
      }
      if (!this.content) {
        util.show(this, 'warn', '请输入点什么');
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
           this.$els.commentHead.scrollIntoView();
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
        font-size 22px
        font-weight 400
      .count
        padding 2px 8px
        margin-left 5px
        background #1cb2ef
        border-radius 20px
        font-size 10px
        color #FFFFFF
        line-height 12px
        vertical-align text-top
      .comment-new
        width 30px
        height 30px
        float right
        background url("../img/icon/new-comment.png")
        background-size contain
        background-repeat no-repeat
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
          width 15%
          text-align center
          .avatar
            img
              width 50px
              height 50px
        .item-right
          margin-left 15%
          display inline-block
          width calc(100% - 100px)
          .item-header
            .name
              margin-right 10px
          .markdown-body
            margin 10px 0px
            font-size 16px
            color rgba(40,47,48,0.80)
            line-height 27.2px
            word-wrap break-word
          .btn-reply
            color #b4b9ba
    .empty-state
      .divider
        border-bottom 1px solid rgba(0,0,0,0.15)
      .empty-pic
        background-image url("../img/comment-emptystate@2x.png")
        background-size contain
        background-repeat no-repeat
        width 453px
        margin 0 auto
        height 281px
        margin-top  40px
        margin-bottom 40px
      .empty-word
        font-size 24px
        text-align center
    .comment-form
      margin-top 50px
      background #FDFFFF
      border 1px solid rgba(0,0,0,0.15)
      box-shadow 0px -1px 4px 0px rgba(135,135,135,0.15)
      border-radius 3px
      position relative
      h3
        text-align center
        font-size 14px
        letter-spacing 2px
        font-weight bold
        padding 15px 0px
        border-bottom 1px solid #E7E7E7
      .form-main
        padding-top 20px
        padding-bottom 20px
        .form-left
          position absolute
          width 100px
          margin-top 17px
          text-align center
          .avatar
            img
              width 50px
              height 50px
        .form-right
          margin-left 85px
          margin-right 10px
          .markdown-area
            width 95%
            min-height 120px
            margin 0px auto
            textarea
              width 100%
              max-width 573px
              min-height 100px
              border 1px solid rgba(40,47,48,0.30)
              box-shadow 0px 1px 4px 0px rgba(0,0,0,0.03);
              border-radius 3px
              padding 5px
              font-size 16px
            .markdown-actions
              position relative
              float left
              margin-top 22px
              opacity 0.6
              line-height 1
            .markdown-actions2
              position relative
              float left
              margin-top 22px
              opacity 0.6
              line-height 1
          .form-comment
            height 50px
            padding-top 10px
            padding-right 18px
            .btn-comment
              float right
              padding 10px 20px
              margin-right -2px
              -webkit-box-shadow 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
              box-shaodw 0px 1px 0px rgba(255,255,255,0.15) inset, 0px 1px 2px rgba(0,0,0,0.15)
              border 1px solid #31b766
</style>
