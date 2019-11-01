<template>
  <section class="component data-box">
    <el-table :data="tableData" border style="width: 100%" align="center" stripe highlight-current-row>
    <el-table-column fixed prop="date" label="日期"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="province" label="省份"></el-table-column>
    <el-table-column prop="city" label="市区"></el-table-column>
    <el-table-column prop="address" label="地址" width="300"></el-table-column>
    <el-table-column prop="zip" label="邮编"></el-table-column>
    <el-table-column fixed="right" label="操作">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text">查看</el-button>
        <el-button type="text">编辑</el-button>
      </template>
    </el-table-column>
  </el-table>
    <pagination :total="20"></pagination>
  </section>
</template>

<script>
import Pagination from "@/components/Pagination";
export default {
  name: 'DataBox',
  components: { Pagination },
  props: {
    rules: {
      type: Function
    },
    model: {
      type: Object,
      default: function(){}
    },
    buttonWrap: {
      type: Boolean,
      default: false
    },
    hiddenSearch: {
      type: Boolean,
      default: false
    },
    hiddenReset: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1517 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1519 弄',
        zip: 200333
      }, {
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1516 弄',
        zip: 200333
      }]
    }
  },
  /**
   * 初始化
   */
  mounted() {
    
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped lang="scss" >
.component.data-box{
  padding: 0 15px;
  text-align: center;
}
</style>
