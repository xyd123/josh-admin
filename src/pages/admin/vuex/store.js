import types from './mutation-types'
import Vue from 'vue'
import Vuex from 'vuex'

import sideMune from './modules/s_sidemune'
import sideConfig from './modules/s_ismobile'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

Vue.config.warnExpressionErrors = true; //数据为未出来时警告

const state = {
    sideConfig
}

const mutations = {
    /* 主页 */
    [types.SIDE_MUNE_OPENED] (state, amount) {
        state.sideConfig.sidebar =  amount
    }
}

export default new Vuex.Store({
    //  TODO: 整合初始状态和变更函数，我们就得到了我们所需的 store
    //  TODO: 至此，这个 store 就可以连接到我们的应用中
    state,
    mutations,
    modules:{
        sideMune
    }
})

