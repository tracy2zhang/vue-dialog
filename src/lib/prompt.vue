<template lang="html">
  <div class="container">
    <backdrop ref="backdrop"></backdrop>
    <transition name="popup">
      <div class="prompt dialog" v-show="state == 1">
        <div class="content">
          <div class="title" v-show="title">{{ title }}</div>
          <textarea class="textarea" v-model.trim="text" :placeholder="placeholder" rows="3"></textarea>
        </div>
        <div class="control">
          <div class="btn btn-cancel" :style="cancelStyle" @click="onCancel">{{ cancelText }}</div>
          <div class="btn btn-confirm" :style="confirmStyle" @click="onConfirm">{{ confirmText }}</div>
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
        text: '',
        placeholder: '',
        cancelText: '取消',
        confirmText: '确定',
        cancelBgColor: '#eaeaea',
        confirmBgColor: '#ffcc24',
        cancelColor: '#000000',
        confirmColor: '#000000'
      }
    },
    computed: {
      cancelStyle () {
        return {
          color: this.cancelColor,
          background: this.cancelBgColor
        }
      },
      confirmStyle () {
        return {
          color: this.confirmColor,
          background: this.confirmBgColor
        }
      }
    },
    methods: {
      reset () {
        this.text = ''
        this.placeholder = ''
      },
      onConfirm () {
        this.hide()
        this.confirm && this.confirm(this.text)
        this.reset()
      },
      onCancel () {
        this.hide()
        this.cancel && this.cancel()
        this.reset()
      }
    }
  }
</script>
<style scoped lang="scss">
  @import './dialog.scss';
  .prompt {
    .content {
      padding: 0 rem(.5);
    }
    .title {
      border: none;
    }
  }
  .textarea {
    width: 100%;
    display: block;
    font-size: .8em;
    box-sizing: border-box;
    padding: 10px;
    background-color: inherit;
    border: 1px solid #e5e5e5;
    border: .5px solid #e5e5e5;
    text-align: left;
    resize: none;
    background-color: inherit;
    outline: none;
  }
</style>
