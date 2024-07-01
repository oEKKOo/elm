import { createApp } from 'vue'
import App from './App.vue'
import './assets/base.css' //页面布局
import 'amfe-flexible'; //页面比例
import router from './router/index'   //路由
import {Button,Icon}from'vant';    //全局引入组件
import'vant/lib/index.css';    //全局引入组件样式
import{Tab,Tabs}from'vant';
const app = createApp(App)
app.use(router).use(Button).use(Icon).use(Tab).use(Tabs)  //组件
app.mount('#app')
