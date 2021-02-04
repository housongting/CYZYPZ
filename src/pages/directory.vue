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
</style>

<template>
  <div>
    <div class="container main-top">
      <div class="bg-white bg-show p-4">
        <h2 class="pb-3 text-center">2019年中国汽车零部件产业上市公司研发投入、知识产权、毛利率引导目录</h2>
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
          <el-table-column prop="two" label="研发投入(万)">
          </el-table-column>
          <el-table-column prop="three" sortable label="研发投入排名">
          </el-table-column>
          <el-table-column prop="four" label="专利申请数(件)">
          </el-table-column>
          <el-table-column prop="five" sortable label="专利申请数排名">
          </el-table-column>
          <el-table-column prop="six" label="毛利率">
          </el-table-column>
          <el-table-column prop="seven" sortable label="毛利率排名">
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
  name: "directory",
  data () {
    return {
      radio: '1',
      select: '',
      input: '',
      tableData: [{
        one: '上汽集团',
        two: '940871.09',
        three: '1',
        four: '475',
        five: '9',
        six: '10.95%',
        seven: '109'
      }
      ]
    }
  }
}
</script>
