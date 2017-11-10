import { extend } from './util'

export default {
  destroyed () {
    const parent = this.$el.parentNode
    parent.removeChild(this.$el)
  },

  methods: {
    show (options) {
      extend(this, options)
      this.state = 1
      const { backdrop } = this.$refs
      backdrop && backdrop.show()
    },
    hide () {
      this.state = 0
      const { backdrop } = this.$refs
      backdrop && backdrop.hide()
    }
  }
}
