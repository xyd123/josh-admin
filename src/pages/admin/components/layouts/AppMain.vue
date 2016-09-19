<template>
    <section class="app-main" :class="{'isOpend':!show.sidebar}">
        <ul class="breadcrumb">
            <li><a href="#">Home</a></li>
            <li><a href="#">Library</a></li>
            <li class="active">Data</li>
        </ul>
        <div class="container-fluid">
            <router-view
                    class="animated"
                    transition="onfade"
                    transition-mode="out-in">
            </router-view>
        </div>

    </section>
</template>

<script>
    import {getSideMuneOpended } from '../../vuex/getters'
    export default {
        vuex: {
            getters: {
                show:getSideMuneOpended
            }
        },
        data () {
            return {

            }
        }
    }
</script>

<style lang="less" scoped>
    .onfade-transition {
        transition: all .3s ease;
    }
    .onfade-enter, .onfade-leave {
        opacity: 0;
    }
</style>
