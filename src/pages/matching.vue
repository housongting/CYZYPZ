<style>
.el-table thead tr th {
  background: #f1f5fa;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.el-table--border td {
  text-align: center;
}
.el-input-group__append {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
}
.el-tag--dark.el-tag--TagColor1 {
  background: #409eff;
  border-color: #409eff;
  color: #fff;
  border-radius: 0;
  width: 100%;
}
.el-tag--dark.el-tag--TagColor2 {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
  border-radius: 0;
  width: 100%;
}
.el-tag--dark.el-tag--TagColor3 {
  border-color: #8cc5ff;
  border-color: #8cc5ff;
  color: #fff;
  border-radius: 0;
  width: 100%;
}
.el-tag--dark.el-tag--TagColor4 {
  background: #b2d8ff;
  border-color: #b2d8ff;
  color: #fff;
  border-radius: 0;
  width: 100%;
}
</style>
<template>
  <div>

    <div class="container main-top">
      <div class="bg-white bg-show p-4">
        <h2 class="pb-3 text-center">2019年中国汽车零部件产业上市公司研发投入-知识产权-毛利率匹配目录</h2>
        <el-row class="mb-3">
          <el-col :span="18">
            <el-button type="primary" icon="el-icon-download">导出数据</el-button>
            <el-button icon="el-icon-notebook-2">查看综合匹配目录</el-button>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="请输入内容" v-model="input">
              <el-button slot="append" type="primary">搜索</el-button>
            </el-input>
          </el-col>
        </el-row>
        <el-table :data="tableData" border stripe style="width: 100%">
          <el-table-column prop="one" label="企业名称">
          </el-table-column>
          <el-table-column sortable label="研发投入-专利申请">
            <template slot-scope="scope">
              <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>
          <el-table-column sortable label="专利申请-毛利率">
            <template slot-scope="scope">
              <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
        <div class="text-right mt-3">
          <el-pagination background layout="prev, pager, next" :total="50">
          </el-pagination>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "matching",
  data () {
    return {
      radio: '1',
      select: '',
      input: '',
      tableData: [{
        one: '上汽集团',
        tag: '高-高'
      }
      ]
    }
  }
}
</script>
