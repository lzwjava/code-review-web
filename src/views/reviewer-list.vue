<template>
  <div class="info">
    <h1>发现各个语言领域的大神，向他们申请帮助</h1>
    <h1>或者，你也可以先看看他们的 <strong>Code Review 案例</strong></h1>
    <h2>入住大神：<strong class="num">48</strong></h2>
  </div>
  <div class="list-content">
    <reviewer :reviewers="reviewers"></reviewer>
  </div>
  <div class="join-reviewer">
    <h5>噢，没有更多大神了</h5>
    <h5>或者，你就是<strong>下一个</strong></h5>
  </div>
</template>

<script>
import reviewerCard from '../components/reviewer-card.vue'
export default{
  components: {
      reviewer: reviewerCard
    },
  data (){
    return {
      reviewers: [{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        },{
          name: '乖小鬼',
          avatar: 'http://tp4.sinaimg.cn/2184723135/180/5603336618/1',
          info: '经验丰富的 iOS 开发者，曾就职于360Camera、英语流利说',
          data: [{
            text: '擅长领域',
            num: 12
          },{
            text: '做过应用',
            num: 33
          },{
            text: '审核案例',
            num: 44
          }]
        }]
    }
  }
}
</script>

<style lang="stylus">
@import '../stylus/variables.styl';
body
  background #F1F5F6
.info
  font-size 36px
  text-align center
  line-height 120%
  padding-top 80px
  strong
    color blue
  h2
    font-size 24px
    line-height 65px
    margin-top 100px
    .num
      font-size 48px
      color green
      vertical-align sub
.list-content
  width 1422px
  margin 80px auto

.join-reviewer
  font-size 36px
  text-align center
  line-height 120%
  padding 80px
  strong
    color blue

</style>
