<template>
    <aside class="sidebar app-sidebar animated" :class="{ slideInLeft: show.sidebar, slideOutLeft: !show.sidebar }">
        <ul class="menu-list">
            <li v-for="item in menu">
                <a class="touchable" v-link="{ name: item.link }" @click="toggle(item,  $event)" :aria-expanded="isExpanded(item) ? 'true' : 'false'">
                    <span class="icon" v-if="item.icon">
                        <i :class="['fa', item.icon]"></i>
                    </span>
                    {{ item.label }}
                    <span class="icon is-angle" v-if="item.subMenu">
                        <i class="fa fa-angle-down"></i>
                    </span>
                </a>
                <ul v-show="item.expanded" class="animated" transition="anBounceIn" @click="autoClose">
                    <li v-for="subItem in item.subMenu">
                        <a class="touchable"v-link="{ name: subItem.link }">
                            <span class="icon is-small" v-if="subItem.icon">
                                <i :class="['fa', item.icon]"></i>
                            </span>
                            {{subItem.label}}
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script>
   import { getSideMune, getSideMuneOpended } from '../../vuex/getters'
   import { actionSideMuneOpened } from '../../vuex/actions.js'

   let count = 0
   export default {
       vuex: {
           getters: {
               menu:getSideMune,
               show:getSideMuneOpended
           },
           actions: {
               actionSideMuneOpened:actionSideMuneOpened
           }
       },
        data () {
            return {
                isReady:true
            }
        },
        computed:{
           steps () {
               return this.menu.filter(i => !!i.subMenu).length
           }
        },
        ready () {
            let route = this.$route
            if (route.name) {
                this.isReady = true
            }
        },
        methods: {
            toggle (item, $e) {
                if (this.hasCollapse(item)) {
                    $e.preventDefault()
                    item.expanded = !item.expanded
                } else {
                    this.autoClose()
                }
            },
            hasCollapse (item) {
                return !!item.subMenu
            },
            isExpanded (item) {
                let hasCollapse = this.hasCollapse(item)
                if (!hasCollapse) return;
                //**初始化
                if (count < this.steps) {
                    count++
                    item.expanded = !!(item.subMenu.filter(i => i.link === this.$route.name).length)
                }
                return item.expanded
            },
            autoClose () {
                this.show.mobile && this.actionSideMuneOpened(false)
            }
        }
   }
</script>

<style lang="less" scoped>
</style>
