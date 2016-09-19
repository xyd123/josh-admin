import NProgress from 'nprogress'
import sideConfig from './vuex/modules/s_ismobile'


//const lazyLoading = (path, ext = '.vue') => {
//    return (resolve) => {
//        require([`${path}${ext}`], resolve)
//    }
//}


module.exports = function(router){

    //** 全局 路由 钩子
    router.beforeEach(function (transition) {
        NProgress.start();
        if (sideConfig.mobile && sideConfig.sidebar) {
            sideConfig.sidebar = false
        }
        return true
    })

    router.afterEach(function (transition) {
        document.title=transition.to.title
        NProgress.done()
    })

    router.redirect({
        '*': '/index'
    })

    //定义路由规则
    router.map ({
        '/index': {
            title: '主页',
            name:'index',
            component: function(resolve) {
                require(['./components/views/index'], resolve)
            }
        },
        '/index2': {
            title: '主页2',
            name:'index2',
            component: function(resolve) {
                require(['./components/views/index2'], resolve)
            }
        },
        '/index3': {
            title: '主页3',
            name:'index3',
            component: function(resolve) {
                require(['./components/views/index3'], resolve)
            }
        },
        '/index4': {
            title: '主页4',
            name:'index4',
            component: function(resolve) {
                require(['./components/views/index4'], resolve)
            }
        }
    })
}
