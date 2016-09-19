<template>
<!-- 顶级实列 -->
<div>

    <div class="row">
        <a href="javascript:void(0)" class="btn btn-success" @click="onClick">http请求</a>

        {{result | json }}
        <p>---------------------</p>
        {{result2 | json }}
    </div>

</div>
</template>

<script>
  
    import actionHttp from 'layers/actions'

    export default {
        components: {
        },
        data () {
            return {
                result:null,
                result2:null,
            }
        },
        methods:{
            onClick () {

                actionHttp.PostOrderProducts({}).then((response) => {
                    this.result2 = JSON.stringify(response.order)
                })


                actionHttp.PostOptionProducts({"id":"123","name":"josh","age":12}).then((response) => {
                    this.result = JSON.stringify(response.model)
                })
            }
        }
    }
</script>

<style lang="less">
</style>
