<template>
  <ul class="list reviewers">
    <li class="item" v-for="reviewer in reviewers">
      <div class="avatar">
        <img :src="reviewer.avatarUrl">
      </div>
      <h4>{{reviewer.username}}</h4>
      <h5>{{reviewer.introduction}}</h5>
      <button class="action-button" type="button" @click="goDetail(reviewer.id)">了解详情</button>
    </li>
  </ul>
</template>

<script type="text/javascript">
  export default {
    props:['reviewers'],
    methods: {
      goDetail (id) {
        window.location = '/reviewer.html?id='+id;
      }
    }
  }
</script>

<style lang="stylus">
@import "../stylus/variables.styl";
.reviewers
  text-align center
  .item:nth-child(3n+1)
      margin-left 0
  .item
    width 300px
    height 406px
    margin-left 130px
    background white
    box-shadow 0px 1px 2px 1px rgba(0,0,0,.1)
    border-radius 3px
    position relative
    margin-top 0px
    margin-bottom 80px
    vertical-align top
    transition all 0.4s
    border 1px solid rgba(0,0,0,.1)
    &:hover
      box-shadow: 0px 22px 43px rgba(0,0,0,0.15)
      -webkit-box-shadow:0 22px 43px rgba(0, 0, 0, 0.15)
      webkit-transform:translateY(-10px)
      transform:translateY(-10px)
      button
        background #33C96F
        color white
        border 1px solid #33C96F
    &:first-child
      margin-left 0
    .avatar
      width 106px
      height 106px
      border-radius 50%
      padding 5px
      background white
      margin 40px auto 0px
      img
        height 100%
        width 100%
        border-radius 50%
        border 1px solid rgba(0,0,0,0.1)
    h4
      margin-top 30px
      margin-bottom 20px
      font-size 1rem
    h5
      line-height 180%
      padding 0px 20px
      font-size 0.88rem
      font-weight 500
      height 80px
      text-overflow ellipsis
      overflow hidden
      word-wrap break-word
    button
      width 160px
      line-height 45px
      height 45px
      border-radius 30px
      border 1px solid rgba(47/255.0,49/255.0,30/255.0,0.15)
      color #282F31
      font-size 0.75rem
      letter-spacing 2px
      margin-top 25px
      transition all 0.3s ease 0s
      -webkit-transition all 0.3s ease 0s
</style>
