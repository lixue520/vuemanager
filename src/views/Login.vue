<template>
  <el-row type="flex" class="row-bg" justify="center">
    <!-- span横跨列数 -->
    <el-col :xl="6" :lg="7">
      <div class="grid-content bg-purple">
        <h3>欢迎来的DavidNan的VueAdmin管理系统</h3>
        <el-image :src="require('@/assets/DavidNan.gif')" class="img-test"></el-image>
        <p>邮箱号: 2926594808@qq.com</p>
        <p>如有疑问请发送到DavidNan的邮箱</p>
      </div>
    </el-col>
    <el-col :span="1">
      <el-divider direction="vertical"></el-divider>
    </el-col>

    <el-col :xl="6" :lg="7">
      <!-- 1.ref:将form表单注册成实例 -->
      <!-- A1 :model 其实相当于 v-bind:model 的缩写，对于我想要绑定的 input 的值应该使用 v-bind:value ，
    所以如果在 input 元素上想要使用缩写形式应该是 :value ，经过我的试验发现这种缩写形式确实是可行的，
    数据可以成功渲染到浏览器;    -->
      <!-- A2 :model 是 v-bind:model 的缩写，可以实现将父组件的值传递给子组件，但是子组件不能传给父组件，无法双向绑定 -->
      <!-- A3 v-bind:value 可以简写为 :value ，数据只能从data流向页面 -->
      <!-- A4 v-model 是 v-model:value 的缩写，通常用于表单上的双向数据绑定（表单接受值 value，故v-model默认收集的就是 
    value ，所以缩写直接省略 value），可以实现子组件到父组件的双向数据动态绑定。数据不仅能从data流向页面，
    还可以从页面流向data。 -->
      <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
        <el-form-item label="用户名" prop="username" style="width: 380px;">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" style="width: 380px;">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code" style="width: 380px;">
          <el-input v-model="loginForm.code" class="Codesize"></el-input>
          <el-image :src="captchaImg" class="captchaImg" @click="getCaptcha"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>


</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: '',
        code: '',
        token: '' //随机码；后端生成
      },
      rules: {
        username: [
          // 必填 ；提示；失去焦点时；
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ], password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
        ], code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { min: 5, max: 5, message: '长度在5个字符', trigger: 'blur' }
        ]

      },
      captchaImg: null
    };
  },
  methods: {
    submitForm(formName) {
      // 2.ref将form表单注册成功后；会将form的数据利用this.$refs拿过来form数据；使用validate
      //进行校验；校验成功 valid=true;具体怎么校验?看他是否按照规则填写
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert('submit!');
          console.log(valid)
         this.postLoginForm()
       
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }, postLoginForm(){
         this.$api.post("/login", this.loginForm).then(res => {
          //在本组件中提交mutation
          const jwt = res.headers['authorization']
          this.$store.commit('SET_TOKEN', jwt)
          this.$router.push("/")
          })
    },
    getCaptcha() {
      console.log("/captcha")
      this.$api.post('/captcha',this.loginForm)
        .then((res) => {
          this.loginForm.token = res.data.data.token
          this.captchaImg = res.data.data.captchaImg
          console.log(res)
        })
    }
  }, created() {
    // 生命周期钩子函数；渲染前调用
    // 注意不能放在普通方法中，否则会失效
    console.log("生命周期钩子函数")
    this.getCaptcha()
  }
}
</script>

<style scoped>
.img-test {
  width: 200px;
  height: 200px;
  border: 1px solid blanchedalmond;
}

/* 
.div-pos {
  margin-top: 100px;
  margin-left: 50px;
} */
.el-divider {
  height: 200px;
}

.el-row {
  background-color: #fafafa;
  height: 100%;
  /* 弹性布局： */
  display: flex;
  /* 交叉轴的中点对齐；默认中轴线为横向 */
  align-items: center;
  text-align: center;
  justify-content: center;
}

.el-form-item {
  width: 380px;
}

.captchaImg {
  float: left;
  margin-left: 8px;
  border-radius: 4px;
}

.Codesize {
  width: 172px;
  /* 向左侧浮动 */
  float: left;
}
</style>