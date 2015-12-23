<template>
  <ul class="list reviewers">
    <li class="item" v-for="reviewer in reviewers">
      <div class="avatar">
        <img :src="reviewer.avatar">
      </div>
      <h4>{{reviewer.name}}</h4>
      <h5>{{reviewer.info}}</h5>
      <ul class="list data">
        <li v-for="item in reviewer.data">
          <p class="num">{{item.num}}</p>
          <p class="text">{{item.text}}</p>
        </li>
      </ul>
      <div class="cover">
        <p>你觉得申请让</p>
        <p>{{reviewer.name}}</p>
        <p>帮你 Code Review 吗？</p>
        <button type="button" class="submit">雇佣</button>
        <button type="button">了解详情</button>
      </div>
    </li>
  </ul>
</template>

<script type="text/javascript">
export default {
  props:['reviewers']
}
</script>

<style lang="stylus">
@import "../stylus/variables.styl";
.reviewers
  text-align center
  .item:nth-child(3n+1)
      margin-left 0
  .item
    width 426px
    height 560px
    margin-left 50px
    background white
    box-shadow: 0px 0px 4px 2px rgba(0,0,0,.2)
    border-radius 3px
    position relative
    margin-bottom 80px
    &:hover
      .cover
        display block
    &:first-child
      margin-left 0
    .avatar
      width 160px
      height 160px
      border-radius 50%
      padding 5px
      background white
      box-shadow: 0px 1px 3px 1px rgba(0,0,0,.5)
      margin 70px auto 50px
      img
        height 100%
        width 100%
        border-radius 50%
    h4
      margin-bottom 30px
      font-size 24px
    h5
      line-height 150%
      font-size 20px
    .data
      height 134px
      position absolute
      bottom 0
      left 0 
      right 0
      background #FDFFFF
      border-top 1px solid rgba(0,0,0,.15)
      padding 19px
      text-align center
      li
        width 120px
        height 96px
        .num
          font-size 36px
        .text
          font-size 16px
          color #3B3E3F
          opacity .6
          margin-top 40px
    .cover
      display none
      position absolute
      top 0
      bottom 0
      left 0
      right 0
      background rgba(40,47,49,.9)
      color white
      font-size 20px
      text-align center
      padding-top 130px
      p
        line-height 180%
      button
        width 136px
        line-height 58px
        height 60px
        border-radius 3px
        border 1px solid white
        color white
        font-size 20px
        margin-top 80px
        background rgba(255,255,255,.1)
        box-shadow 0 1px 4px rgba(0,0,0,.06)
      .submit
        background blue
        border-color blue
        margin-right 20px
        box-shadow 0 2px 4px rgba(0,0,0,.5)
</style>
