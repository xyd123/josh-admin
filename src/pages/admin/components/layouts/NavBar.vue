<template>
    <section class="navbar animated app-navbar">
        头部
        <a href="javascript:void(0)" class="fn-right" @click="onClosed">关闭侧边栏</a>
    </section>
</template>

<script>
import { actionSideMuneOpened } from '../../vuex/actions.js'
import { getSideMuneOpended } from '../../vuex/getters'

export default {
    vuex: {
        actions: {
            actionSideMuneOpened:actionSideMuneOpened
        },
        getters: {
            show:getSideMuneOpended
        },
    },
    data () {
        return {
        }
    },
    methods:{
        'onClosed' (){
           this.actionSideMuneOpened(!this.show.sidebar);
        }
    }
}
</script>

<style lang="less" scoped></style>
