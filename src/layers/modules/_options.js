/**
 * Created by josh on 16/9/13.
 */

/**
 * 业务数据中心层
 * 提供行为约定和行为操作
 * 类型：组件类型
 * 作者：josh
 */
import Vue from 'vue'
import {
    PostOptionProducts
} from '../types'


// 行为约定
const provides ={
	// 获取组件类型数据模型

	[PostOptionProducts]:{
		// 接口地址
		url: '/api/products',
		// 请求方式
		method: 'POST',
		// 接口参数
		params: {
      		 // 用户id String required
	      	 id:null,
	      	 // 用户明 String required
	      	 name:null,
	      	 // 用户年龄 number required
	      	 age:null
	    }
	}
}

// 行为操作
const behaviors = {
	[PostOptionProducts] (provide) {

	    let result = {
	      // model: {}, 数组
	      // msg: ''	字符串
	    }

	    // request
	    return Vue.http(provide).then((response) => {
	      // success callback
	      let data = response.data;
	      if (data.code === 0) {
	        Object.assign(result, {
                model: data.result //数据字断
	        })
	      } else {
	        Object.assign(result, {
	            msg: data.msg
	        })
	      }

	      return result
	    }, (response) => {
	      // error callback
	      Object.assign(result, {
	        msg: `获取数据模型失败，原因：${response.statusText}`
	      })
	      return result
	    })
	}
}


export default {
  provides,
  behaviors
}