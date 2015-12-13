<template>
  <div class="overlay">
    <div class="overlay-mask" @click="show=false"></div>
    <div class="overlay-inner">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  module.exports = {
    props: {
      show: {
        twoWay: true
      }
    },
    attached: function() {
      document.body.classList.add('no-scroll');
    },
    detached: function() {
      document.body.classList.remove('no-scroll');
    }
  };
</script>

<style>
  .overlay {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 9;
    height: 100%;
    width: 100%;
    background-color: white;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  .overlay-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
  }
  .overlay-mask:after {
    content: '×';
    position: absolute;
    top: 16px;
    right: 18px;
    color: #ccc;
    font: 500 24px/1 "Helvetica Neue", "Arial", sans-serif;
  }
  .overlay-inner {
    position: absolute;
    top: 0;
    left: 50%;
    width: 860px;
    height: 100%;
    margin-left: -430px;
    z-index: 11;
  }
</style>
