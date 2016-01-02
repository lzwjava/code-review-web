<template>
    <div class="reward-form">
        <button type="button" class="close" @click="close">X</button>

        <div class="form-line">
          <label>打赏费用</label>
          <div class="reward-input">
            <input v-model="reward"></input>元
          </div>
        </div>
    </div>
</template>

<script type="text/javascript">

export default {
    data () {
        return {

        }
    },
    methods: {
        close () {
            this.$parent.overlay = false;
        }
    }
}

</script>

<style lang="stylus">
.reward-form
    background white
    width 300px
    height 300px
    position relative
    left 50%
    top 50%

</style>