<template>
  <div class="modal-mask" v-show="show">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="left-modal">

          <button class="modal-default-button"
            @click="show = false">
            取消申请
          </button>
        </div>

        <div class="right-modal">

        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">

var debug = require('debug')('components');
module.exports = {
  data: function () {
    return {

    };
  },
  props: {
    show: {
      towWay: true
    }
  }
};

</script>

<style lang="stylus">

.modal-mask
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .5)
  transition opacity .3s ease
  display table

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-container
  width 800px
  height 600px  
  margin 0px auto
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  font-family Helvetica, Arial, sans-serif

.modal-header
  h3
    margin-top 0
    color #42b983

.modal-default-button
  float right

.left-modal
  width 60%
  height 100%
  background url('../img/love-program.png')
  background-size 100% 100%

.right-modal
  width 40%

</style>
