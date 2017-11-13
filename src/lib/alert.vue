<template lang="html">
  <div class="container">
    <backdrop ref="backdrop"></backdrop>
    <transition name="popup">
      <div class="alert dialog" v-show="state == 1">
        <div class="content">
          <div class="title" v-show="title">{{ title }}</div>
          <div class="desc" v-show="desc">{{ desc }}</div>
        </div>
        <div class="control">
          <div class="btn btn-ok" :style="okStyle" @click="onOk">{{ okText }}</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Backdrop from './backdrop'
  import mixin from './mixin'

  export default {
    name: 'alert',
    mixins: [mixin],
    components: { Backdrop },
    data () {
      return {
        state: 0,
        title: '提示',
        desc: '',
        okText: '确定',
        okBgColor: '#ffcc24',
        okColor: '#000000'
      }
    },
    computed: {
      okStyle () {
        return {
          color: this.okColor,
          background: this.okBgColor
        }
      }
    },
    methods: {
      onOk () {
        this.hide()
        this.ok && this.ok()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import './dialog.scss';
</style>
