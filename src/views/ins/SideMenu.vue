<template>
    <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo" default-active="2"
        text-color="#fff">

        <!-- 路由绑定 -->
        <router-link to="/sys/index">
            <el-menu-item index="0">
              <el-icon><i class="fa fa-modx" aria-hidden="true"></i></el-icon>
                <span>首页</span>
            </el-menu-item>
        </router-link>

        <el-sub-menu index="1">
            <template #title>
                <el-icon>
                    <i class="fa fa-cog" aria-hidden="true"></i>
                </el-icon>
                <span>系统管理</span>
            </template>

            <router-link to="/sys/users">
                <el-menu-item index="1-1">
                    <el-icon>
                       <i class="fa fa-user-secret" aria-hidden="true"></i>
                    </el-icon>
                    用户管理
                </el-menu-item>
            </router-link>

            <router-link to="/sys/role">
                <el-menu-item index="1-2">
                    <el-icon>
                      <i class="fa fa-yelp" aria-hidden="true"></i>
                    </el-icon>
                    角色管理
                </el-menu-item>
            </router-link>

            <router-link to="/sys/menu">
                <el-menu-item index="1-3">
                    <el-icon>
                        <i class="fa fa-bars" aria-hidden="true"></i>
                    </el-icon>
                    菜单管理
                </el-menu-item>
            </router-link>
        </el-sub-menu>
    </el-menu>

</template>

<script>
import Home from '../Home.vue'
export default {
  components: { Home },
    name: "SideMenu",
    setup() {
        // 上下文处理
        const iconName = ""
        return {
            iconName
        }
    },
    data() {
        return {
            // 用于根据权限渲染菜单

            menuList: [
                {
                    name: 'SysUser',
                    title: "用户管理",
                    icon: "",
                    path: "",
                    childs: [
                        {
                            name: 'SysUser',
                            title: '用户管理',
                            icon: '',
                            path: 'sys/users',
                            chids: []
                        },
                    ]
                }, {
                    name: 'SysTools',
                    title: "系统工具",
                    icon: "",
                    path: "",
                    childs: [
                        {
                            name: 'SysTools',
                            title: '用户管理',
                            icon: '',
                            path: 'sys/users',
                            chids: []
                        },
                    ]
                }
            ]

        }
    }
}
</script>

<style scoped>
@import "@/views/ins/ins.scss";
</style>