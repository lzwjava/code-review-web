<template>
  <div class="body cafe-list">
    <logo class="loading center" v-if="$loadingRouteData"></logo>

    <div class="section container" v-if="following.length">
      <h2 class="section-title">Following</h2>
      <div class="cafe-cards clearfix">
        <template v-for="cafe in following" track-by="id">
          <cafe-card :subpath="subpath" :cafe="cafe"></cafe-card>
        </template>
      </div>
    </div>

    <div class="section container">
      <h2 class="section-title">Cafes</h2>
      <div class="cafe-cards clearfix">
        <template v-for="reviewer in reviewers" track-by="id">
          <reviewer-card :reviewer="reviewer"></reviewer-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
var api = require('../api');

module.exports ={
  data: function() {
    return {
      cursor: 0,
      following: [],
      reviewers: [],
    }
  },
  computed: {
    subpath: function() {
      if (this.$route.query.show === 'create') {
        return '/create';
      }
      return '';
    }
  },
  route: {
    data: function(transition) {
      api.reviewers.list(0, 100, function(resp) {
        transition.next({
          reviewers: resp
        });
      });
    }
  },
  components: {
    'logo': require('../components/logo.vue'),
    'reviewer-card': require('../components/reviewer-card.vue')
  }
};
</script>

<style>
.cafe-list {
  padding: 40px 0;
}
</style>
