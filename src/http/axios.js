/* 导入官方的axios */
import axios from "axios";
//导入基本配置信息 
import config from "@/http/config";

// 创建axios实例
/*官网的创建实例方式如下
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});
 */
const instanceVue = axios.create({
    baseURL: config.baseUrl,
    timeout: config.timeOut,
    headers: config.headers
})


const instanceSpringboot = axios.create({
    baseURL: config.baseUrlFile,
    timeout: config.timeOut,
    headers: config.headers
})


//设置拦截器
instanceVue.interceptors.request.use(config => {
	config.headers['Authorization'] = localStorage.getItem("token")
	return config
})

instanceVue.interceptors.response.use(
	response => {

		console.log("response ->" + response)

		let res = response.data

		if (res.code === 200) {
			return response
		} else {
            // 弹窗信息
			Element.Message.error(!res.msg ? '系统异常' : res.msg)
            // Promise.reject() 方法返回一个带有拒绝原因的 Promise 对象。
			return Promise.reject(response.data.msg)
		}
	},
	error => {

		console.log(error)

		if (error.response.data) {
			error.massage = error.response.data.msg
		}

		if (error.response.status === 401) {
			router.push("/login")
		}

		Element.Message.error(error.massage, {duration: 3000})
		return Promise.reject(error)
	}
)



//导出实例方法，后期将组件导出并挂载到入口js里共给全局调用

/** 常用的基本配置
   axios.create({
       baseURL:'http://localhost:8080', //请求的域名，基本地址
       timeout:5000,  //请求的超时时长，单位毫秒
       url:'/data.json',  //请求的路径
       method:'get，post，put，patch，delete' , //请求方法
       headers:{
           token:''  //比如token登录鉴权，请求的时候携带token，让后端识别登录人的信息
       },   //请求头
       params:{},  //请求参数拼接在URL上
       data:{},    //请求参数放在请求体里

   }) */

export function get(url, params) {
    return instanceVue.get(url, params);
}

export function post(url, params) {
    return instanceVue.post(url, params)
}

