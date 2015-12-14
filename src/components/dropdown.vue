<template>
  <div class="dropdown">
    <div class="dropdown-mask" @click="show=false"></div>
    <div class="dropdown-inner" @click="choose">
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
    methods: {
      choose: function(e) {
        var el = e.target;
        if (el.classList.contains('dropdown-item')) {
          this.show = false;
        }
      }
    }
  };
</script>

<style>
  .dropdown {
    position: relative;
  }
  .dropdown-mask {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 9;
    background: transparent;
  }
  .dropdown-inner {
    position: absolute;
    min-width: 180px;
    top: 0;
    left: auto;
    right: -8px;
    margin-top: 10px;
    background-color: white;
    background-clip: padding-box;
    padding: 6px 0;
    border: 1px solid rgba(0, 0, 0, 0.18);
    box-shadow: 0 3px 13px rgba(0, 0, 0, 0.18);
    border-radius: 3px;
    z-index: 11;
  }
  .dropdown-inner:before, .dropdown-inner:after {
    position: absolute;
    right: 10px;
    content: '';
    display: inline-block;
    border: 8px solid transparent;
  }
  .dropdown-inner:before {
    top: -16px;
    border-bottom-color: rgba(0, 0, 0, 0.18);
  }
  .dropdown-inner:after {
    top: -15px;
    border-bottom-color: white;
  }
  .dropdown-inner .dropdown-item {
    color: #565656;
    display: block;
    font-size: 14px;
    padding: 2px 10px 2px 18px;
    margin-bottom: 3px;
  }
  .dropdown-inner .dropdown-item:hover {
    background-color: #42B983;
    color: white;
  }
  .dropdown-inner .dropdown-divider {
    border-top: 1px solid #ddd;
    margin: 8px 0;
  }
</style>
