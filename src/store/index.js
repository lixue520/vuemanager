import { createStore } from 'vuex'

export default createStore({
  // 声明变量
  state: {
    token:""   //全局状态
  },
  getters: {
  },
 // 修改变量（state不能直接赋值修改，只能通过mutations）
  mutations: {
    SET_TOKEN:(state,token)=>{
      state.token = token
      // //将变量token存储到token字段(getItem配合使用)
      localStorage.setItem("token",token)
    }
  },
  // mutations的值由actions传入
  actions: {
  },
  modules: {
  }
})
