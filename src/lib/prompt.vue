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
        text: '',
        placeholder: '',
        cancelText: '取消',
        confirmText: '确定'
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
