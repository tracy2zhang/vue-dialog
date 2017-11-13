# vue-utopia-dialog

> A Vue.js dialog plugin

## 安装

```bash
  npm install vue-utopia-dialog -S
```

## 使用

```js
import Dialog from 'vue-utopia-dialog'
import 'vue-utopia-dialog/dist/css/dialog.css'
// 或者
// import Dialog from 'vue-utopia-dialog/src/lib/index'
Vue.use(Dialog)
```
```js
// this.$dialog.alert(option)
// this.$dialog.confirm(option)
// this.$dialog.prompt(option)
export default {
  name: 'dialog-test',
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
```

### alert
##### option.title
标题，默认为 '提示'
##### option.desc
内容，默认为 ''
##### option.okText
确定按钮文字，默认为 '确定'
##### option.okBgColor
确定按钮颜色，默认为 '#ffcc24'
##### option.okColor
确定按钮字体颜色，默认为 '#000000'

### confirm
##### option.title
标题，默认为 '提示'
##### option.desc
内容，默认为 ''
##### option.cancelText
取消按钮文字，默认为 '取消'
##### option.cancelBgColor
取消按钮颜色，默认为 '#eaeaea'
##### option.cancelColor
取消按钮字体颜色，默认为 '#000000'
##### option.confirmText
确定按钮文字，默认为 '确定'
##### option.confirmBgColor
确定按钮颜色，默认为 '#ffcc24'
##### option.confirmColor
确定按钮字体颜色，默认为 '#000000'
##### option.cancel
点击取消按钮的回调函数
##### option.confirm
点击确定按钮的回调函数

### prompt
##### option.title
标题，默认为 '提示'
##### option.placeholder
输入框的placeholder，默认为 ''
##### option.text
输入框的文字，默认为 ''
##### option.cancelText
取消按钮文字，默认为 '取消'
##### option.cancelBgColor
取消按钮颜色，默认为 '#eaeaea'
##### option.cancelColor
取消按钮字体颜色，默认为 '#000000'
##### option.confirmText
确定按钮文字，默认为 '确定'
##### option.confirmBgColor
确定按钮颜色，默认为 '#ffcc24'
##### option.confirmColor
确定按钮字体颜色，默认为 '#000000'
##### option.cancel
点击取消按钮的回调函数
##### option.confirm
点击确定按钮的回调函数，有一个参数，值为输入框的文字

### [Demo](https://tracy2zhang.github.io/vue-dialog)
