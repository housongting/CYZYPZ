<template>
  <div id="companiesList">
    <div class="Cont-MainM main-top">
      <el-container>

        <el-aside width="290px" class="p-3 sticky-top">
          <div class="bg-whiteR bg-show">
            <div class="pt-2 pb-3">
              <ul>
                <li class="h5 hover">企业资源</li>
                <li><a href="#" class="hover h6">企业名单</a></li>
                <li><a href="#" class="h6">企业分析</a></li>
              </ul>
              <ul>
                <li class="h5">专利库</li>
                <li><a href="#" class="h6">专利清单</a></li>
                <li><a href="#" class="h6">专利分析</a></li>
              </ul>
              <ul>
                <li class="h5">教育资源</li>
                <li><a href="#" class="h6">教育资源清单</a></li>
                <li><a href="#" class="h6">教育资源分析</a></li>
              </ul>
              <ul>
                <li class="h5">科技资源</li>
                <li><a href="#" class="h6">科技资源清单</a></li>
                <li><a href="#" class="h6">科技资源分析</a></li>
              </ul>
              <ul>
                <li class="h5">科技项目</li>
                <li><a href="#" class="h6">科技项目清单</a></li>
                <li><a href="#" class="h6">科技项目分析</a></li>
              </ul>
              <ul>
                <li class="h5">科技奖励</li>
                <li><a href="#" class="h6">科技奖励清单</a></li>
                <li><a href="#" class="h6">科技奖励分析</a></li>
              </ul>
              <ul>
                <li class="h5">人才库</li>
                <li><a href="#" class="h6">人才清单</a></li>
                <li><a href="#" class="h6">人才分析</a></li>
              </ul>
              <ul>
                <li class="h5">投资机构</li>
                <li><a href="#" class="h6">投资机构清单</a></li>
                <li><a href="#" class="h6">投资机构分析</a></li>
              </ul>
              <ul>
                <li class="h5">论文期刊</li>
              </ul>
              <ul>
                <li class="h5">政策法规</li>
              </ul>
              <ul>
                <li class="h5">标准规范</li>
              </ul>
              <ul>
                <li class="h5">行业新闻</li>
              </ul>
              <ul>
                <li class="h5">知识库</li>
              </ul>
            </div>
          </div>
        </el-aside>

        <el-main class="p-3">
          <div class="bg-white bg-show p-3 mb-4">
            <div class="flex justify_between">
              <div class="flex" style="flex:1">
                <p style="height:32px;line-height:32px;flex-shrink:0">当前检索条件：</p>
                <div class="tagList">
                  <el-tag>产业：汽车制造</el-tag>
                  <el-tag>汽车类型：传统燃油汽车</el-tag>
                  <el-tag>一级技术模块：动力装置、底盘</el-tag>
                  <el-tag>产品：气缸盖罩、活塞、发动机支架</el-tag>
                  <el-tag>一级技术模块：动力装置、底盘</el-tag>
                </div>
              </div>
              <el-button type="primary" style="align-self:flex-end" @click="dialogVisible=true">
                <p><i class="el-icon-upload el-icon--right"></i></p>
                变更条件
              </el-button>
            </div>
          </div>
          <!-- 条件设置 -->
          <el-dialog :visible.sync="dialogVisible" width="70%" :close-on-click-modal="false">
            <span slot="title" class="dialog-title" style="font-weight:bold;font-size:18px">
              条件设置
            </span>
            <div class="flex">
              <p style="height:32px;line-height:32px;flex-shrink:0">已选条件：</p>
              <div class="tagList" style="flex:1">
                <el-tag closable>产业：汽车制造</el-tag>
                <el-tag closable>汽车类型：传统燃油汽车</el-tag>
                <el-tag closable>一级技术模块：动力装置、底盘</el-tag>
                <el-tag closable>产品：气缸盖罩、活塞、发动机支架</el-tag>
                <el-tag closable>一级技术模块：动力装置、底盘</el-tag>
              </div>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="汽车制造" name="汽车制造">
                <div class="checkboxArr">
                  <el-form ref="form" :model="condition" label-width="120px">
                    <el-form-item label="类型：">
                      <el-checkbox-group v-model="condition.type">
                        <el-checkbox label="传统燃油汽车" name="type"></el-checkbox>
                        <el-checkbox label="新能源汽车" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="一级技术模块：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="二级技术模块：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in EJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="产品目录：" class="moreCheckGroup">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in EJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                      <el-tag size="small">+更多</el-tag>
                    </el-form-item>
                    <el-form-item label="企业类型：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="企业标签：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="经营状态：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="认证资质：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="省份：" class="moreCheckGroup">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in EJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                      <el-tag size="small">+更多</el-tag>
                    </el-form-item>
                    <el-form-item label="城市：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="区县市：">
                      <el-checkbox-group v-model="condition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-form>
                  <div class="block mt-3" style="text-align:center">
                    <el-button type="primary" icon="el-icon-search" size="small">搜索</el-button>
                    <el-button type="primary" plain size="small" @click="saveConditions=true">保存条件</el-button>
                    <el-button type="info" size="small">重置条件</el-button>
                  </div>

                  <!-- 保存条件 -->
                  <el-dialog width="400px" top="40vh" :visible.sync="saveConditions" :close-on-click-modal="false" :modal="false" class="saveConditions">
                    <span slot="title" class="dialog-title" style="font-weight:bold;font-size:18px;color:#333333">保存条件</span>
                    <el-form :model="form">
                      <p class="inputConditions">请输入条件名称</p>
                      <el-form-item>
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                      </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                      <el-button @click="dialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                  </el-dialog>
                  <!-- 分割线 -->
                  <el-divider></el-divider>
                  <!-- 脚部 -->
                  <span slot="footer" class="dialog-footer" style="font-weight:bold;font-size:18px;color:#333333">
                    已保存的搜索条件
                    <el-table ref="multipleTable" class="mt-3" stripe border :data="tableData" tooltip-effect="dark" style="width: 100%">
                      <el-table-column label="序号" width="120">
                        <template slot-scope="scope">{{scope.row.orderNum }}</template>
                      </el-table-column>
                      <el-table-column prop="name" label="条件名称" width="120">
                      </el-table-column>
                      <el-table-column prop="address" label="地址" show-overflow-tooltip>
                      </el-table-column>
                      <el-table-column label="操作">
                        <template>
                          <el-button size="mini" type="primary">设为默认条件</el-button>
                          <el-button size="mini" type="primary">查看结果</el-button>
                          <el-button size="mini" type="info">编辑</el-button>
                          <el-button size="mini" type="danger">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                    <div class="block mt-3 mb-3 text-right">
                      <el-pagination background layout="prev, pager, next" :total="1000">
                      </el-pagination>
                    </div>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="软件与新兴服务" name="软件与新兴服务"></el-tab-pane>
              <el-tab-pane label="高端装备" name="高端装备"></el-tab-pane>
              <el-tab-pane label="电子信息" name="电子信息"></el-tab-pane>
              <el-tab-pane label="新材料" name="新材料"></el-tab-pane>
              <el-tab-pane label="绿色石化" name="绿色石化"></el-tab-pane>
              <el-tab-pane label="关键基础件" name="关键基础件"></el-tab-pane>
              <el-tab-pane label="智能家电" name="智能家电"></el-tab-pane>
              <el-tab-pane label="时尚纺织服装" name="时尚纺织服装"></el-tab-pane>
              <el-tab-pane label="生物医药" name="生物医药"></el-tab-pane>
              <el-tab-pane label="文体用品" name="文体用品"></el-tab-pane>
              <el-tab-pane label="节能环保" name="节能环保"></el-tab-pane>
            </el-tabs>
          </el-dialog>

          <div class="flex justify_between align_center mb-4">
            <div>
              <span>搜索到<strong class="searchNum">50</strong>家企业</span>
              <el-button type="primary" class="ml-3" icon="el-icon-search">搜索</el-button>
            </div>
            <div class="flex btnGroup">
              <el-input v-model="input" class="inputFir" placeholder="请输入配套客户"></el-input>
              <el-input v-model="input" class="inputTwo" placeholder="请输入企业名称、产品名称、地区等关键字…"></el-input>
              <el-button type="primary">搜索</el-button>
            </div>
          </div>

          <div class="bg-white bg-show p-3 mb-4">
            <el-table ref="multipleTable" stripe border :data="tableData" tooltip-effect="dark" style="width: 100%">
              <el-table-column type="selection" width="55">
              </el-table-column>
              <el-table-column label="序号" width="120">
                <template slot-scope="scope">{{ scope.row.orderNum }}</template>
              </el-table-column>
              <el-table-column prop="name" label="企业名称" width="120">
              </el-table-column>
              <el-table-column prop="address" label="主营产品" show-overflow-tooltip>
              </el-table-column>
              <el-table-column prop="Ptkh" label="配套客户">
              </el-table-column>
              <el-table-column prop="zltx" label="质量体系">
              </el-table-column>
              <el-table-column prop="city" label="城市">
              </el-table-column>
              <el-table-column label="操作">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                  <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div class="block mt-3 mb-3">
              <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="currentPage2" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="sizes, prev, pager, next" :total="1000">
              </el-pagination>
            </div>
          </div>

        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'companiesList',
  data () {
    return {
      form: {
        name: ''
      },
      saveConditions: false, //保存条件
      YJJSMK: ['动力装置', '底盘', '车身及附件', '汽车内外装饰', '电表、仪表相关配件'],
      EJJSMK: ['配气机构', '仪表及报警装置', '润滑系统', '安全防护装置', '发电机', '车身附件', '制动系统', '曲柄连杆机构', '点火系统', '车门', '蓄电池', '照明装置及信号装置', '转向系统', '发动机机体', '行驶系统', '传动系统', '供给系统', '冷却系统'],
      condition: {
        type: [],
        firstTechnology: [],
      },
      activeName: "汽车制造",
      dialogVisible: false,
      input: '',
      tableData: [{
        orderNum: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        Ptkh: '应用于国内各大主机厂',
        zltx: 'ISO TS16949',
        city: '中国-湘潭',
      }, {
        orderNum: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        orderNum: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        orderNum: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        orderNum: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        orderNum: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        orderNum: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      currentPage2: 5
    }
  },
  methods: {
    handleEdit (index, row) {
      console.log(index, row);
    },
    handleDelete (index, row) {
      console.log(index, row);
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`);
    },
    handleClick (tab, event) {
      console.log(tab, event);
    }
  }
}
</script>

<style>
#companiesList .el-dialog__body {
  padding-bottom: 0;
  padding-top: 0;
}
#companiesList .el-dialog__footer {
  text-align: left !important;
}
#companiesList .saveConditions .el-dialog__footer {
  text-align: right !important;
}
#companiesList .saveConditions .el-dialog__body {
  padding-bottom: 0px;
  padding-top: 0px;
}
#companiesList .saveConditions .inputConditions {
  font-size: 14px;
  line-height: 38px;
  color: #333333;
}

#companiesList .moreCheckGroup .el-form-item__content {
  display: flex;
}
#companiesList .moreCheckGroup .el-checkbox-group {
  display: flex;
  overflow: hidden;
}
#companiesList .checkboxArr .el-form-item {
  margin-bottom: 0 !important;
}
#companiesList .checkboxArr .el-checkbox {
  margin-right: 20px;
}
#companiesList .checkboxArr .el-form-item__label,
#companiesList .checkboxArr .el-form-item__content {
  line-height: 24px;
}
#companiesList .searchNum {
  color: #1b91ec;
  font-size: 16px;
  font-weight: bold;
}
#companiesList .btnGroup .inputFir .el-input__inner {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
#companiesList .btnGroup .inputTwo .el-input__inner {
  border-radius: 0;
  border-left: 0px;
  width: 300px;
}
#companiesList .btnGroup .el-button {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

#companiesList .bg-whiteR .h5 {
  font-size: 16px;
  padding: 5px 20px;
}
#companiesList .bg-whiteR .h5.hover {
  color: #409eff;
}
#companiesList .bg-whiteR .h6 {
  font-size: 14px;
  padding-left: 45px;
}
#companiesList .bg-whiteR ul li a {
  display: block;
  padding: 6px 20px;
  position: relative;
}
#companiesList .bg-whiteR ul li a:hover {
  color: #409eff;
}
#companiesList .bg-whiteR ul li a::before {
  position: absolute;
  content: "";
  top: 13px;
  left: 27px;
  background: #999;
  border-radius: 10px;
  width: 7px;
  height: 7px;
}
#companiesList .bg-whiteR ul li a.hover::before {
  background: #409eff;
}
#companiesList .bg-whiteR ul li a:hover::before {
  background: #409eff;
}
#companiesList .bg-whiteR ul li a.hover {
  color: #409eff;
}
#companiesList .Tatle_L {
  color: #409eff;
  font-size: 18px;
  border-left: 5px #409eff solid;
  padding-left: 12px;
}
#companiesList h4 {
  font-size: 16px;
  font-weight: bold;
}
#companiesList .el-table thead tr th {
  background: #f1f5fa;
  font-weight: bold;
  color: #333;
  text-align: center;
}
#companiesList .el-table--border td {
  text-align: center;
}
#companiesList .el-main {
  padding: 0;
}
#companiesList .left-auto {
  width: 260px;
}
#companiesList .sticky-top {
  position: -webkit- sticky;
  position: sticky;
  top: 50px;
  z-index: 1;
}
#companiesList .el-table td,
#companiesList .el-table th {
  padding: 8px 0;
}
#companiesList .tagList .el-tag {
  margin-bottom: 6px;
}
</style>