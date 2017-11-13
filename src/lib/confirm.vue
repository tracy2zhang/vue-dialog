<template lang="html">
  <div class="container" @touchmove.stop.prevent>
    <backdrop ref="backdrop"></backdrop>
    <transition name="popup">
      <div class="confirm dialog" v-show="state == 1">
        <div class="content">
          <div class="title" v-show="title">{{ title }}</div>
          <div class="desc" v-show="desc">{{ desc }}</div>
        </div>
        <div class="control">
          <div class="btn btn-cancel" @click="onCancel">{{ cancelText }}</div>
          <div class="btn btn-confirm" @click="onConfirm">{{ confirmText }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Backdrop from './backdrop'
  import mixin from './mixin'

  export default {
    name: 'confirm',
    mixins: [mixin],
    components: { Backdrop },
    data () {
      return {
        state: 0,
        title: '提示',
        desc: '',
        cancelText: '取消',
        confirmText: '确定'
      }
    },
    methods: {
      onConfirm () {
        this.hide()
        this.confirm && this.confirm()
      },
      onCancel () {
        this.hide()
        this.cancel && this.cancel()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import './dialog.scss';
</style>
