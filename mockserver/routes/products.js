var router = require('express').Router(),
    JsonProducts = require('../mock/products')

//** 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});

router.route('/products')
    .post(function(req, res, next) {

        //console.log(req.body)

        res.json({
           code:0,
           result:{
               list:JsonProducts
           },
        });

    

        next();
    },function(req,res,next){
        console.log('商品列表')
    })

module.exports=router;