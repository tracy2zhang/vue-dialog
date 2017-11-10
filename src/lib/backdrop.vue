<template lang="html">
  <transition name="fadein">
    <div class="backdrop" v-show="state == 1"></div>
  </transition>
</template>

<script>
export default {
  name: 'backdrop',
  data () {
    return {
      state: 0
    }
  },
  methods: {
    show () {
      this.state = 1
    },
    hide () {
      this.state = 0
    }
  }
}
</script>
