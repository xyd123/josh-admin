<template>
<div>
    <nav-bar></nav-bar>
    <side-bar></side-bar>
    <app-main></app-main>
</div>
</template>
<script>

//TODO: 创建根组件
import store from './vuex/store' // import 我们刚刚创建的 store
import {NavBar, SideBar, AppMain, FooterBar} from './components/layouts/index.js'
import isMobile from  'components/utils/isMobile'
import sideConfig from './vuex/modules/s_ismobile'

export default {
    store,
    components:{
        NavBar,
        SideBar,
        AppMain
    },
    beforeCompile (){
        isMobile(function(data){
            sideConfig.mobile = data
            sideConfig.sidebar = !sideConfig.mobile
        })
    }
}
</script>

<style lang="less">
    /*bootstrap*/
    @import '../../assets/css/bootstrap.min.css';
    @import'../../assets/css/bootstrap-theme.min.css';
    /*font-awesome*/
    @import '~font-awesome/less/font-awesome';
    /* nprogress */
    @import '~nprogress/nprogress.css';
    /*layout*/
    @import '../../assets/less/base.less';

</style>
