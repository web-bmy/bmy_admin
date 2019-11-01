<template>
  <!--用户管理-->
  <section class="page user-manage">
    <data-form :model="userModel" @onSearch="refreshData" @resetForm="handleResetForm">
      <template slot="default-input">
        <el-form-item label="账号" prop="account">
          <el-input v-model="userModel.account"></el-input>
        </el-form-item>
        <el-form-item label="姓名" prop="realName">
          <el-input v-model="userModel.realName"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="tel">
          <el-input v-model="userModel.tel"></el-input>
        </el-form-item>
      </template>
      <template slot="default-button">
        <el-button icon="el-icon-circle-plus" type="primary">新增</el-button>
      </template>
    </data-form>
    <data-box></data-box>
  </section>
</template>
<script>
import permission from '@/directive/permission/index.js' // 权限判断指令
import DataForm from "@/components/DataForm";
import DataBox from "@/components/DataBox";
export default {
  name: 'UserManage',
  components: { DataForm, DataBox },
  directives: { permission },
  data() {
    return {
      userModel:{
        account: "",
        realName: "",
        tel: ""
      }
    }
  },
  created() {
  },
  mounted(){
  },
  destroyed() {
  },
  methods: {
    refreshData() {
      console.log('搜索')
    },
    handleResetForm() {
      console.log('重置')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
