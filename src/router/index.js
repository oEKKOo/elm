//路由逻辑 根据path确定页面组件使用

import{createRouter ,createWebHashHistory }from 'vue-router'
 
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path:'/',
            component: ()=>import('../views/home')
        },
        {
            path:'/home',
            component: ()=>import('../views/home')
        },
        {
            path:'/cart',
            component: ()=>import('../views/cart')
        },
        {
            path:'/order',
            component: ()=>import('../views/order')
        },
        {
            path:'/mine',
            component: ()=>import('../views/mine')
        }
    ]
})

export default router  