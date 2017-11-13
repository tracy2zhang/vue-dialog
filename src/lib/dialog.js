import Vue from 'vue'
import { createElement } from './util'
import Alert from './alert'
import Confirm from './confirm'
import Prompt from './prompt'

const map = {
  alert: {
    component: Alert,
    vm: undefined
  },
  confirm: {
    component: Confirm,
    vm: undefined
  },
  prompt: {
    component: Prompt,
    vm: undefined
  }
}

export default {
  show (type, options) {
    if (!map[type].vm) {
      const el = createElement()
      map[type].vm = new Vue(map[type].component).$mount(el)
    }
    map[type].vm.show(options)
  },
  alert (options) {
    this.show('alert', options)
  },
  confirm (options) {
    this.show('confirm', options)
  },
  prompt (options) {
    this.show('prompt', options)
  },
  hide (type) {
    // 如果指定类型就关掉指定类型，没指定就关掉所有
    if (type) {
      map[type].vm && map[type].vm.hide()
    } else {
      Object.keys(map).forEach(key => {
        map[key].vm && map[key].vm.hide()
      })
    }
  }
}
