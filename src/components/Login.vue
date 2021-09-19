<template>
  <div class="login_container">
    <img src="@/assets/zms.jpg" alt="" />
    <div class="login_box">
      <!-- 头像区域 -->
      <div class="avatar_box">
        <img src="../assets/logo.jpg" alt="" />
      </div>
      <!-- 登录表单区域 -->
      <el-form
        ref='loginFormRules'
        :model="loginForm"
        :rules="loginFormRules"
        label-width="0px"
        class="login_form"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>

        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.password"
            prefix-icon="el-icon-key"
            type="password"
          ></el-input>
        </el-form-item>

        <!-- 按钮区 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: "",
        password: "",
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur",
          },
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm(){
      // console.log(this);
      this.$refs.loginFormRules.resetFields();
    },
    login(){
      this.$refs.loginFormRules.validate(async valid=>{
       if(!valid) return;
      const {data:res} = await this.$http.post('login',this.loginForm);
      if(res.meta.status !==200) return this.$message.error('登录失败');
      this.$message.success('登录成功');
      console.log(res);
      window.sessionStorage.setItem("token",res.data.token)
      //通过编程导航跳转到后台页面，路由地址是/home
      this.$router.push('/home')
      })
    }
  },
};
</script>

<style lang="scss" scoped>
.login_container {
  //   background-color: rgb(243, 164, 177);
  width: 100%;
  height: 100%;
  min-width: 1920px;
  min-height: 900px;
  img {
    height: 100%;
    width: 100%;
  }
}
.login_box {
  
  width: 450px;
  height: 300px;
  background-color:#fff9;
  
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .avatar_box {
    
    height: 130px;
    width: 130px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #ddd;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #eee;
    }
  }
}
.login_form {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns {
  display: flex;
  justify-content: right;
}
</style>