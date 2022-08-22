<template>
    <!-- <el-container>：外层容器。当子元素中包含 <el-header> 或 <el-footer> 时，全部子元素会垂直上下排列，否则会水平左右排列。

<el-header>：顶栏容器。

<el-aside>：侧边栏容器。

<el-main>：主要区域容器。

<el-footer>：底栏容器 -->
    <el-container>
        <el-aside width="200px">
            <!-- 侧边栏菜单 -->
            <SideMenu></SideMenu>
        </el-aside>
        <el-container>
            <el-header>
            <Tabs :userdetils="userInfo"></Tabs>
            </el-header>
            <el-main>
                <!-- 子路由展示 -->
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>

import SideMenu from "@/views/ins/SideMenu.vue";
import Tabs from "./ins/Tabs.vue";
export default {
    name: "Home",
    components:{
    SideMenu,
    Tabs
},data(){
    return{
        userInfo:{
            // 定义用户信息，初始数据为默认；
            //后期从后台获取
            // 除模板外，函数和这里的数据会暴露在this上
            id:'',
            username:'',
            avatar:''
        }
    }
},methods:{
    getUserInfo(){
           this.$api.get("/sys/userInfo").then(res => {
                this.userInfo = res.data.data
          })
    }
},created(){
    this.getUserInfo()
}
}
</script>

<style scoped>
@import "@/views/ins/ins.scss";
</style>