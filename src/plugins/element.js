import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
// 把弹窗组件挂载到VUE原形对象上，可以用 this.$message 进行使用
Vue.prototype.$message = Message
