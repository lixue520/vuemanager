<template>
    <strong>DavidNan的后台管理系统</strong>
    <div class="header-avatar">
        <!-- 头像 -->
        <!-- :src支持http;本地引用只支持字符串方法;可能是编码问题 -->
        <el-avatar size="medium" :src="require('@/assets/DavidNan.gif')"></el-avatar>
        <el-dropdown>
            <span class="el-dropdown-link">
                {{ userdetils.username }}<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template v-slot:dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <router-link to='/sys/userCenter'>
                            <el-icon>
                                <i class="fa fa-id-card-o" aria-hidden="true"></i>
                            </el-icon>
                            个人中心
                        </router-link>
                    </el-dropdown-item>
                    <el-dropdown-item @click="logout">
                        <el-icon>
                           <i class="fa fa-sign-out" aria-hidden="true"></i>
                        </el-icon>登出
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <el-dropdown>
            <span class="el-dropdown-link">
                Api文档<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <template v-slot:dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item>
                        <el-link href="https://github.com/lixue520" target="_blank">
                            <el-icon>
                                <i class="fa fa-github" aria-hidden="true"></i>
                            </el-icon>
                            GitHub
                        </el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-link href="https://cn.vuejs.org/" target="_blank">
                            <el-icon>
                                <i class="fa fa-question-circle" aria-hidden="true"></i>
                            </el-icon>
                            VueApi
                        </el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-link href="https://element.eleme.cn/#/zh-CN" target="_blank">
                            <el-icon>
                                <i class="fa fa-question-circle" aria-hidden="true"></i>
                            </el-icon>
                            ElementApi
                        </el-link>
                    </el-dropdown-item>
                    <el-dropdown-item>
                        <el-link href="http://mockjs.com/examples.html" target="_blank">
                            <el-icon>
                                <i class="fa fa-question-circle" aria-hidden="true"></i>
                            </el-icon>
                            MockApi
                        </el-link>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>

        <el-link href="https://www.lanqiao.cn/" target="_blank">学校</el-link>



    </div>
</template>

<script>

export default {
    name: "Tabs",
    props: ["userdetils"],
    data() {
        return {
            Man: this.userdetils.avatar //因为 :src有点坑，所以想放弃使用他了
        }
    }, created() {
        console.log("-----------")
        // props会暴露到this上
        console.log(this.userdetils)
        console.log("-----------")
    }, methods: {
        logout() {
            this.$api.post("/logout").then(res => {
                console.log("登出")
                localStorage.clear();  //因为token放里边
                sessionStorage.clear(); //清除session
                this.$store.commit("sesetState");  //清除状态
                this.$router.push("/login"); //重回登录界面
            })
        }
    }
}
</script>

<style scoped>
@import "@/views/ins/ins.scss";

.el-link {
    text-decoration: none;
}
</style>