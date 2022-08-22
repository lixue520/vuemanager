
// 用于定义请求体与基本请求url
export default {
    baseUrl: 'http://localhost:8081',     //前端测试用
    springboot: 'http://localhost:8092',  //后端
    timeOut: 5000,
    headers: {
        //注明请求传送的是Json格式数据
        //'Content-Type': 'application/x-www-form-urlencoded'  这是表单格式
        'Content-Type': 'application/json;charset=UTF-8'
    }
}