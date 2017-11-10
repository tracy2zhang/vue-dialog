import Dialog from './dialog'

function install (Vue, options) {
  window.$dialog = Vue.prototype.$dialog = Dialog
}

export default {
  install
}
