<template>
  <div>
    <el-button type="info" @click="logout">
      退出
    </el-button>
  </div>
</template>

<script>
export default {
  methods: {
    logout(){
      //清空token
      window.sessionStorage.clear();
      //跳转到登陆页
      this.$router.push('/login');
    }
  },
}
</script>
<style lang="scss" scoped>
  
</style>