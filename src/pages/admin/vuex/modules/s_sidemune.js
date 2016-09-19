import types from '../mutation-types'

let Mune = [
    {
        label: '商品管理',
        icon: 'fa-tachometer',
        expanded: false,
        subMenu: [
            {
                link: 'index',
                label: '商品库'
            },
            {
                link: 'index2',
                label: '商品分组'
            }
        ]
    },
    {
        label: '页面管理',
        icon: 'fa-tachometer',
        expanded: false,
        subMenu: [
            {
                link: 'index3',
                label: '微页面'
            },
            {
                link: 'index4',
                label: '草稿页面'
            }
        ]
    },
    {
        link: 'index',
        label: '订单管理',
        icon: 'fa-bar-chart-o'
    },
    {
        link: 'index',
        label: '营销',
        icon: 'fa-laptop'
    },
    {
        link: 'index',
        label: '数据中心',
        icon: 'fa-building-o'
    },
    {
        link: 'index',
        label: '帐号帐号',
        icon: 'fa-table'
    },
    {
        link: 'index',
        label: '设置',
        icon: 'fa-table'
    }
];

const state = {
    data:Mune
}

const mutations = {
    [types.SIDE_MUNE](state, data) {
        state.data = data
    }
}

export default {
    state,
    mutations
}