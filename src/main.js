import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css'
import api from "./http/index"
import * as Icons from '@element-plus/icons'
import * as NowIcons from '@element-plus/icons-vue'


//注意Vue2与Vue3的不同

require("./mock.js")//引用mock.js随机生成数据，进行ajax拦截
const app = createApp(App)

// 注册Icons 全局组件;不起作用就用font awesome
Object.keys(Icons).forEach(key => {
  app.component(key, Icons[key])
})


Object.keys(NowIcons).forEach(key => {
  app.component(key, NowIcons[key])
})

app.use(ElementPlus).use(store).use(router).use(api).mount('#app')

/**
 * Vue.use()的作用是通过全局方法 Vue.use() 使用插件
插件通常用来为 Vue 添加全局功能，可以通过全局方法 Vue.use() 使用插件，而且它需要在你调用 new Vue() 启动应用之前完成。

Vue.use(plugin, options)
plugin的类型可以是{ object | Function }
options是一个可选的对象
 */