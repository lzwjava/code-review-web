<template>
  <div class="home-main">
    <section class="slide">
      <div class="bg">
        <h1>最高效的代码审核服务</h1>
        <h2>Code Review，迅速帮你提升核心竞争力</h2>
        <div>
          <button class="begin"></button>
        </div>
        <button class="help">如何使用Code Review</button>
      </div>
        
    </section>

    <section class="feature">
      <ul class="list">
        <li>
          <div class="short">
            <div class="icon_crown"></div>
            <h4 class="number">280大神入驻</h4>
            <p class="detail">我们邀请了业内知名的开发者帮助大家解决在编码过程中所遇到的问题，这些高手利用自己所擅长的技术为各位竭诚服务。</p>
          </div>
          
        </li>
        <li>
          <div class="short">
            <div class="icon_doc"></div>
            <h4 class="number">2800+审核文档</h4>
            <p class="detail">每一次 Code Review 的过程都凝结着大神的心血 Code Review 上线半年以来，已经帮助重构、简化了 1400 份代码文件。</p>
          </div>
          
        </li>
        <li>
          <div class="short">
            <div class="icon_article"></div>
            <h4 class="number">280经验总结</h4>
            <p class="detail">代码审核无论对于审核者还是帮助申请人来说，都是宝贵的经验财富，在获得许可的情况下，我们提供 Code Review 经验文摘。</p>
          </div> 
        </li>
      </ul>
    </section>

    <section class="reviewer">
      <div class="bg">
          <h2>发现行业内精英开发者</h2>
          <h3>一览领域顶尖的编程人物</h3>
          <reviewer :reviewers="reviewers"></reviewer>
          <div>
            <button class="more" type="button">寻找更多高手</button>
          </div>
      </div>

         

    </section>
    <section class="example">
        <div class="container">
        <div class="container"><!-- 
          <div class="pen"></div>
          <div class="book"></div>
          <div class="cup"></div> -->
          <h2>精选 Code Review 案例</h2>
          <h3>我们精心挑选了一些典型问题的优雅解决方案，分享给大家</h3>
          <ul class="list">
            <div class="row">
              <li class="clo-2">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
                </div>
                <!-- <div class="detail">
                  <p>
                    <span class="date">12 八月 2015</span>
                    <span>/ 12次打赏</span>
                    <i class="icon_wx"></i>
                    <i class="icon_wb"></i>
                  </p>
                </div> -->
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
              <li class="clo-1">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
            <div class="row">
              <li class="clo-3">
                <div class="info">
                  <img src="http://img0.imgtn.bdimg.com/it/u=2405375823,572106225&fm=21&gp=0.jpg">
                  <div class="text">
                    <h6 class="title">
                      dsadadasdas
                    </h6>
                    <h6 class="tips">
                      <span>1111</span>
                      <span>2222</span>
                    </h6>
                  </div>
              </li>
            </div>
          </ul>
        </div>
        <div class="more">
          阅读更多
        </div>
    </section>
  </div>

</template>

<script type="text/javascript">
  import reviewerCard from '../components/reviewer-card.vue'
  import serviceUrl from "../common/serviceUrl.js"
  var debug = require('debug')('home');
  var util = require('../common/util');
  export default {
    components: {
      reviewer: reviewerCard
    },
    data () {
      return {
        reviewers: []
      }
    },
    created () {
      this.$http.get(serviceUrl.reviewers, {
        limit: 3
      }).then((resp) => {
        if (util.filterError(this, resp)) {
          this.reviewers = resp.data.result;
        }
      }, util.httpErrorFn(this));
    }
  }
</script>

<style lang="stylus">
@import "../stylus/home.styl";

</style>
