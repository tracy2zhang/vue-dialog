<template>
  <div id="app">
    <div class="container">
      <button class="ui blue button" @click="alert">Alert</button>
      <button class="ui blue button" @click="confirm">Confirm</button>
      <button class="ui blue button" @click="prompt">Prompt</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      alert () {
        this.$dialog.alert({
          title: 'Alert',
          desc: 'this is an alert!'
        })
      },
      confirm () {
        this.$dialog.confirm({
          title: 'Confirm',
          desc: 'this is a confirm!',
          confirm: () => {
            window.alert('yes')
          },
          cancel: () => {
            window.alert('no')
          }
        })
      },
      prompt () {
        this.$dialog.prompt({
          title: `What's your name?`,
          desc: 'this is a prompt!',
          confirm: text => {
            window.alert(`yes: ${text}`)
          },
          cancel: () => {
            window.alert('no')
          }
        })
      }
    }
  }
</script>

<style>
html, body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: border-box;
  padding-top: 20px;
}
</style>
