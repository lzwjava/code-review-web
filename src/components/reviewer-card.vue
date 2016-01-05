<template>
  <ul class="list reviewers">
    <li class="item" v-for="reviewer in reviewers">
      <div class="avatar">
        <img :src="reviewer.avatarUrl">
      </div>
      <h4>{{reviewer.username}}</h4>
      <h5>{{reviewer.introduction}}</h5>
      <div class="cover">
        <p>你想申请</p>
        <p>{{reviewer.username}}</p>
        <p>帮你 Code Review 吗？</p>
<!--         <button class="submit action-button" type="button">雇佣</button> -->
        <button class="action-button" type="button" @click="goDetail(reviewer.id)">了解详情</button>
      </div>
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
    box-shadow: 0px 1px 2px 1px rgba(0,0,0,.1)
    border-radius 3px
    position relative
    margin-top 0px
    margin-bottom 80px
    vertical-align top
    transition all 0.4s
    border 1px solid rgba(0,0,0,.1)
    &:hover
      box-shadow: 0px 22px 43px rgba(0,0,0,0.2)
      -webkit-box-shadow:0 22px 43px rgba(0, 0, 0, 0.2)
      webkit-transform:translateY(-20px)
      transform:translateY(-20px)
    &:first-child
      margin-left 0
    .avatar
      width 96px
      height 96px
      border-radius 50%
      padding 5px
      background white
      margin 70px auto 30px
      img
        height 100%
        width 100%
        border-radius 50%
    h4
      margin-bottom 20px
      font-size 1rem
    h5
      line-height 180%
      padding 0 20px
      font-size 0.88rem
      font-weight 500
    .cover
      display none
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      background rgba(40,47,49,.9)
      color white
      text-align center
      padding-top 120px
      p
        line-height 180%
        font-weight 200
      button
        width 96px
        line-height 48px
        height 50px
        border-radius 3px
        border 1px solid white
        color white
        font-size 1rem
        margin-top 30px
        background rgba(255,255,255,.1)
        box-shadow 0 1px 4px rgba(0,0,0,.06)
      .submit
        background blue
        border-color blue
        margin-right 15px
        box-shadow 0 2px 4px rgba(0,0,0,.5)
</style>
