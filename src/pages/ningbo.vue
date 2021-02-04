<style>
.NBtab .el-tabs__item.is-active {
  background: #0091ec;
  position: relative;
  color: #fff;
  border-bottom: 0px !important;
}
.NBtab .el-tabs__nav-scroll {
  overflow: unset;
}
.NBtab .el-tabs--card > .el-tabs__header {
  border-bottom: 0px;
}
.NBtab .el-tabs__nav-wrap {
  padding-bottom: 6px;
}
.NBtab .el-tabs__item.is-active:before {
  position: absolute;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #0091ec;
  top: 35px;
  left: 50%;
  margin-left: -4px;
}
.NBtab .el-tabs__item {
  color: #0091ec;
  text-align: center;
  height: 36px;
  line-height: 36px;
  border-radius: 0px;
  border-top: 1px solid #ccc !important;
  border-left: 1px solid #ccc !important;
  border-bottom: 1px solid #ccc !important;
}
.NBtab .el-tabs__item:last-of-type {
  border-right: 1px solid #ccc !important;
}

.bg-whiteR .h5 {
  font-size: 16px;
  padding: 5px 20px;
}
.bg-whiteR .h5.hover {
  color: #409eff;
}
.bg-whiteR .h6 {
  font-size: 14px;
  padding-left: 45px;
}
.bg-whiteR ul li a {
  display: block;
  padding: 6px 20px;
  position: relative;
}
.bg-whiteR ul li a:hover {
  color: #409eff;
}
.bg-whiteR ul li a::before {
  position: absolute;
  content: "";
  top: 13px;
  left: 27px;
  background: #999;
  border-radius: 10px;
  width: 7px;
  height: 7px;
}
.el-tabs__item {
  color: #606266;
  text-align: center;
}
.bg-whiteR ul li a.hover::before {
  background: #409eff;
}
.bg-whiteR ul li a:hover::before {
  background: #409eff;
}
.bg-whiteR ul li a.hover {
  color: #409eff;
}
.Tatle_L {
  color: #409eff;
  font-size: 18px;
  border-left: 5px #409eff solid;
  padding-left: 12px;
}
h4 {
  font-size: 16px;
  font-weight: bold;
}
h5 {
  font-size: 14px;
  font-weight: normal;
}
.h3 {
  font-size: 16px;
}
.h2 {
  font-size: 22px;
  font-weight: bold;
}
.One {
  border: 3px #f56c6c solid;
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  position: relative;
  padding: 2px;
}
.One-bg {
  width: 70px;
  height: 70px;
  background: url(../img/one-bg.png) no-repeat 0 40px;
  overflow: hidden;
  border-radius: 76px;
  font-size: 22px;
  font-weight: bold;
  padding-top: 12px;
}
.Two {
  border: 3px #e6a23c solid;
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  position: relative;
  padding: 2px;
}
.Two-bg {
  width: 70px;
  height: 70px;
  background: url(../img/two-bg.png) no-repeat 0 45px;
  overflow: hidden;
  border-radius: 76px;
  font-size: 22px;
  font-weight: bold;
  padding-top: 12px;
}
.Free {
  border: 3px #409eff solid;
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 80px;
  position: relative;
  padding: 2px;
}
.Free-bg {
  width: 70px;
  height: 70px;
  background: url(../img/free-bg.png) no-repeat 0 50px;
  overflow: hidden;
  border-radius: 76px;
  font-size: 22px;
  font-weight: bold;
  padding-top: 12px;
}
.el-table thead tr th {
  background: #f1f5fa;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.el-table--border td {
  text-align: center;
}
.Numb {
  color: #999;
}
.Numb span {
  color: #333;
  font-size: 24px;
}
.Numb i {
  color: #333;
  font-style: normal;
  padding-left: 3px;
}
.Numb em {
  font-style: normal;
  font-size: 34px;
  font-weight: lighter;
}
.el-input-group__append {
  background-color: #409eff;
  color: #fff;
  border-color: #409eff;
}
.el-pagination {
  padding: 0;
}
.borderColor {
  border: 1px solid #eaeff3;
}

.nbIndustry .ZYCityAssess {
  display: flex;
  text-align: center;
  border: 1px solid #eaeff3;
}
.nbIndustry .ZYCityAssess .ZYCityAssess_left {
  display: flex;
  flex-direction: column;
  border-right: 1px solid #eaeff3;
}
.nbIndustry .ZYCityAssess .ZYCityAssess_left .ZYCityAssessClasstify {
  width: 136px;
  height: 225px;
  text-align: center;
  font-weight: bold;
  line-height: 21px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.classtifySelected {
  background: #0091ec;
  color: #ffffff;
}
.nbIndustry .ZYCityAssess .ZYCityAssess_center {
  width: calc((100% - 136px) / 2);
  box-sizing: border-box;
  border-right: 1px solid #eaeff3;
  display: flex;
  flex-direction: column;
}
.nbIndustry .ZYCityAssess .ZYCityAssess_center .el-checkbox {
  margin-right: 8px;
}
</style>
<template>

  <div class="nbIndustry">

    <div class="Cont-MainM main-top">
      <el-container>
        <el-aside width="290px" class="p-3 sticky-top">
          <div class="bg-whiteR bg-show">
            <div class="bg-primary p-3">
              <el-row>
                <el-col :span="8">
                  <img src="../img/Pr-Micon1.png" alt="">
                </el-col>
                <el-col :span="16">
                  <h3>软件与新兴服务
                    <el-dropdown class="float-right mt-1"><i class="el-icon-menu te-white"></i>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>汽车制造</el-dropdown-item>
                        <el-dropdown-item>软件与新兴服务</el-dropdown-item>
                        <el-dropdown-item>高端装备</el-dropdown-item>
                        <el-dropdown-item>电子信息</el-dropdown-item>
                        <el-dropdown-item>新材料</el-dropdown-item>
                        <el-dropdown-item>绿色石化</el-dropdown-item>
                        <el-dropdown-item>关键基础件</el-dropdown-item>
                        <el-dropdown-item>智能家电</el-dropdown-item>
                        <el-dropdown-item>时尚纺织服装</el-dropdown-item>
                        <el-dropdown-item>生物医药</el-dropdown-item>
                        <el-dropdown-item>文体用品</el-dropdown-item>
                        <el-dropdown-item>节能环保</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </h3>
                  <h6 class="text-white pt-1" style="font-size:12px;color:rgba(255, 255, 255,0.7)">这里可以写一段，关于汽车制造相关的产业资源配置的大数据</h6>
                </el-col>
              </el-row>
            </div>
            <div class="pt-2 pb-3">
              <ul>
                <li class="h5 hover">产业发展引导目录</li>
                <li><a href="#" class="hover h6">资源配置导向</a></li>
                <li><a href="#" class="h6">资源配置引导目录</a></li>
                <li><a href="#" class="h6">历年发展趋势</a></li>
              </ul>
              <ul>
                <li class="h5">科教资源</li>
                <li><a href="#" class="h6">教育资源</a></li>
                <li><a href="#" class="h6">科技资源</a></li>
              </ul>
              <ul>
                <li class="h5">成果资源</li>
                <li><a href="#" class="h6">专利</a></li>
                <li><a href="#" class="h6">论文期刊</a></li>
                <li><a href="#" class="h6">科技奖励</a></li>
                <li><a href="#" class="h6">科技项目</a></li>
              </ul>
              <ul>
                <li class="h5">产业资源</li>
                <li><a href="#" class="h6">企业资源</a></li>
                <li><a href="#" class="h6">人才资源</a></li>
              </ul>
            </div>
          </div>
        </el-aside>
        <el-main class="p-3">
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">宁波市汽车制造资源配置导向</div>
            <div class="p-4">
              <h4 class="mb-3">宁波市发展导向<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="border p-3" style="height:140px">
                    <div class="pb-3 mt-2"><span class="h3">综合导向类型：</span><span class="h2">科教-成果资源需求型</span></div>
                    <div><span class="h3">科教-成果-产业匹配度：</span><span class="h2">科教-成果资源需求型</span></div>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="border p-3" style="height:140px">
                    <el-row>
                      <el-col :span="8" class="text-center">
                        <h5>科教资源密集度</h5>
                        <div class="One mt-2">
                          <div class="One-bg">
                            0.41
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8" class="text-center">
                        <h5>科技成果支撑力</h5>
                        <div class="Two mt-2">
                          <div class="Two-bg">
                            0.38
                          </div>
                        </div>
                      </el-col>
                      <el-col :span="8" class="text-center">
                        <h5>产业竞争力</h5>
                        <div class="Free mt-2">
                          <div class="Free-bg">
                            0.33
                          </div>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <h4 class="mb-3 mt-3">主要城市发展现状<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="城市">
                </el-table-column>
                <el-table-column prop="two" label="科教资源密集度">
                </el-table-column>
                <el-table-column prop="three" label="科技成果支撑力">
                </el-table-column>
                <el-table-column prop="three" label="产业竞争力">
                </el-table-column>
              </el-table>
              <h4 class="mb-3 mt-3">主要城市发展耦合协调度<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="城市">
                </el-table-column>
                <el-table-column prop="two" label="综合协调度">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-成果资源">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-产业基础资源">
                </el-table-column>
                <el-table-column prop="two" label="产业基础资源-成果资源">
                </el-table-column>
              </el-table>
              <h4 class="mb-3 mt-3">主要城市发展评价<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>

              <div class="ZYCityAssess">

                <div class="ZYCityAssess_left">
                  <div class="ZYCityAssessClasstify classtifySelected">
                    <i class="iconfont icon-chanyeyuanqu mb-2" style="font-size:30px"></i>
                    <p>城市产业竞<br>争力评价</p>
                  </div>
                  <div class="ZYCityAssessClasstify">
                    <i class="iconfont icon-zhishichanquan mb-2" style="font-size:30px"></i>
                    <p>城市知识产权<br>支撑力评价</p>
                  </div>
                </div>

                <div class="ZYCityAssess_center">
                  <p class="text-left pb-3 pt-3 pl-3">全国主要城市</p>
                  <div class="d-flex flex-grow-1 pl-3">
                    <div class="checkboxGroup flex flex-column text-left">
                      <el-checkbox v-model="checked" v-for="city in cityOptions" :key="city">{{city}}</el-checkbox>
                    </div>
                    <!-- 气泡图 -->
                    <div id="Bubble" class="flex-grow-1 mr-3">
                    </div>
                  </div>
                </div>
                <div class="ZYCityAssess_center">
                  <p class="text-left pb-3 pt-3 pl-3">城市知识产权支撑力排名</p>
                  <div id="cityZSPM" class="flex-grow-1 ml-3 mr-3"></div>
                </div>

              </div>
            </div>
          </div>
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">宁波市汽车制造资源配置引导目录</div>
            <div class="p-4">
              <h4 class="mb-3">宁波市汽车零部件产业技术模块引导目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="城市">
                </el-table-column>
                <el-table-column prop="two" label="综合协调度">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-成果资源">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-产业基础资源">
                </el-table-column>
                <el-table-column prop="two" label="产业基础资源-成果资源">
                </el-table-column>
              </el-table>

              <h4 class="mb-3 mt-3">宁波市汽车零部件产业技术模块匹配目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="城市">
                </el-table-column>
                <el-table-column prop="two" label="综合协调度">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-成果资源">
                </el-table-column>
                <el-table-column prop="three" label="科教资源-产业基础资源">
                </el-table-column>
                <el-table-column prop="two" label="产业基础资源-成果资源">
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">宁波市历史发展趋势<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>

            <div class="pl-4 pr-4 pb-4">
              <div class="NBtab mt-3">
                <el-tabs v-model="activeName" type="card">
                  <el-tab-pane label="科技成果支撑力" name="1">
                    <div class="KJCGZCL" style="height:400px" ref="chart1"></div>
                  </el-tab-pane>
                  <el-tab-pane label="产业竞争力" name="2">
                    <div class="CYJZL" style="height:400px" ref="chart2"></div>
                  </el-tab-pane>
                  <el-tab-pane label="科教资源密集度" name="3">
                    <div class="KJZYMJD" style="height:400px" ref="chart3"></div>
                  </el-tab-pane>
                </el-tabs>
              </div>

            </div>

          </div>

          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">宁波市教育资源<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="12" class="pt-3">
                  教育层次：<el-checkbox label="本科"></el-checkbox>
                  <el-checkbox label="专科"></el-checkbox>
                  <el-checkbox label="硕士研究生"></el-checkbox>
                  <el-checkbox label="博士研究生"></el-checkbox>
                </el-col>
                <el-col :span="12" class="text-right">
                  <el-button type="primary">进入教育资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div style="height:1px"></div>
                  <!-- 宁波市教育资源 -->
                  <div class="NBSJYZY" style="height:693px;position:absolute;width:calc(50% - 15px);"> </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>本科教育点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>专科教育点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>硕士点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>博士点</div>
                    </el-col>
                  </el-row>

                  <div class="mt-3 mb-3 float-right" style="width:500px">
                    <el-input placeholder="请输入内容" v-model="input">

                      <el-select v-model="select" slot="prepend" placeholder="重点建设工程">
                        <el-option label="重点建设工程" value="1"></el-option>
                      </el-select>

                      <el-button slot="append" type="primary">搜索</el-button>
                    </el-input>
                  </div>

                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="名称">
                    </el-table-column>
                    <el-table-column prop="three" label="教育层次">
                    </el-table-column>
                    <el-table-column prop="one" label="城市">
                    </el-table-column>
                  </el-table>
                  <div class="text-right">
                    <el-pagination background layout="prev, pager, next" :total="50">
                    </el-pagination>
                  </div>
                </el-col>

              </el-row>
            </div>
          </div>
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">宁波市教育资源分<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="12" class="pt-3">
                  教育层次：<el-checkbox label="本科"></el-checkbox>
                  <el-checkbox label="专科"></el-checkbox>
                  <el-checkbox label="硕士研究生"></el-checkbox>
                  <el-checkbox label="博士研究生"></el-checkbox>
                </el-col>
                <el-col :span="12" class="text-right">
                  <el-button type="primary">进入教育资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div style="height:1px"></div>
                  <!-- 宁波市教育资源分 -->
                  <div class="NBSJYZYF" style="height:693px;position:absolute;width:calc(50% - 15px);"> </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>本科教育点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>专科教育点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>硕士点</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>博士点</div>
                    </el-col>
                  </el-row>

                  <div class="mt-3 mb-3 float-right" style="width:500px">
                    <el-input placeholder="请输入内容" v-model="input">

                      <el-select v-model="select" slot="prepend" placeholder="重点建设工程">
                        <el-option label="重点建设工程" value="1"></el-option>
                      </el-select>

                      <el-button slot="append" type="primary">搜索</el-button>
                    </el-input>
                  </div>

                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="名称">
                    </el-table-column>
                    <el-table-column prop="three" label="教育层次">
                    </el-table-column>
                    <el-table-column prop="one" label="城市">
                    </el-table-column>
                  </el-table>
                  <div class="text-right">
                    <el-pagination background layout="prev, pager, next" :total="50">
                    </el-pagination>
                  </div>
                </el-col>

              </el-row>
            </div>
          </div>

        </el-main>

      </el-container>
    </div>

  </div>

</template>

<script>
import '../fonts/iconfont.css'
export default {
  name: "ningbo",
  data () {
    return {
      checked: false,
      cityOptions: ['上海', '北京', '广州', '深圳', '成都', '重庆', '宁波', '长春'],
      activeName: "1",
      select: "",
      input: "",
      value: "",
      tabPosition: 'left',
      tableData: [{
        one: '美国',
        two: '电动汽车普',
        three: '新能源、智能化',
        tag: '高-高'
      }, {
        one: '欧洲',
        two: '智能交通系',
        three: '低二氧化碳排放',
        tag: '高-高'
      }, {
        one: '日本',
        two: '2014',
        three: '自动驾驶',
        tag: '高-低'
      }, {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      },
      {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      },
      {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      },
      {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      },
      {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      }, {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      },
      {
        one: '中国',
        two: '汽车产业',
        three: '新能源、智能化',
        tag: '高-高'
      }]
    }
  },
  mounted () {
    var that = this;

    allEchartsInit()  //调用初始化echarts函数
    window.onresize = function () {
      allEchartsInit();   //echarts窗口事件
    }
    function allEchartsInit () {   //echarts初始化
      //宁波市教育资源
      that.NBSJYZY()
      //宁波市教育资源分
      that.NBSJYZYF()
      //科技成果支撑力
      that.KJCGZCL()
      //产业竞争力
      that.CYJZL()
      //科教资源密集度
      that.KJZYMJD()
      //城市产业竞争力评价
      that.Bubble()
      //城市知识产权支撑力排名
      that.cityZSPM()
    }

  },
  methods: {
    NBSJYZY () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('NBSJYZY')[0]);
      var NBMap = "./static/json/ningbo.json";
      $.get(NBMap, function (NBMap) {
        that.$echarts.registerMap('NB', NBMap);
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: function (params) { //提示框浮层内容格式器
              return "区域：" + params.data.name + "<br />" + "本科教育点：45" + "<br />" + "专科教育点：45" + "<br />" + "博士点：45" + "<br />" + "硕士点：45"
            }
          },
          visualMap: { //设置图例的相关参数
            min: 0,
            // max:555,
            left: 0, //图例距离左侧边框的距离
            bottom: 0, //图例距离底部边框的距离
            //calculable:true,
            showLabel: false,   //visualMap各阶段的文字
            // text: ["高", "低"], //图例文本设置
            pieces: [
              //图例中文字颜色得设置,min与max的设置与图中显示相关联
              {
                min: 120,
                label: ">120人",
                color: "#568EFF"
              }, {
                min: 80,
                max: 120,
                label: "80-120人",
                color: "#8AB1FF"
              }, {
                min: 40,
                max: 80,
                label: "40-80人",
                color: "#8AB1FF"
              }, {
                max: 40,
                label: "<40人",
                color: "#CCDDFF"
              }],
            show: false
          },
          geo: { //地图组件配置
            map: "NB", //选择地图
            roam: false, //可缩放和平移true（或！0），false（或！1）
            scaleLimit: { //缩放比例
              min: 1,
              max: 2
            },
            zoom: 1.2, //地图显示比例
            top: 60, //地图距离上边框距离
            label: { //绑定文字设置(图中省名字的设置
              normal: { //初始状态配置（是否显示文本、颜色）
                show: true,
                fontSize: "12",  //地图字体大小
                formatter: '{a}',
                color: "rgba(0,0,0,0.7)"
              },
              emphasis: {
                show: true,
                color: '#fff'
              }
            },
            itemStyle: { //鼠标选中图斑设置模块
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)" //边框样式
              },
              emphasis: { //选中后
                areaColor: "#EB4F38", //鼠标移入颜色
                shadowOffsetX: 0, //阴影水平方向上偏移量
                shadowOffsetY: 0, //阴影垂直方向上偏移量
                borderWidth: 0, //描边现况宽
              },
            }
          },
          series: [
            {
              name: "宁波市教育资源",
              type: "map",
              geoIndex: 0,
              data: [
                { name: '余姚市', value: 20 },
                { name: '北仑区', value: 20 },
                { name: '慈溪市', value: 60 },
                { name: '江北区', value: 60 },
                { name: '镇海区', value: 60 },
                { name: '海曙区', value: 34 },
                { name: '鄞州区', value: 13869.47 },
                { name: '奉化区', value: 13869.47 },
                { name: '象山县', value: 13869.47 },
                { name: '宁海县', value: 13869.47 },
              ]
            }
          ]
        }
        );
      });
      myChart.resize();
    },
    NBSJYZYF () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('NBSJYZYF')[0]);
      var NBMap = "./static/json/ningbo.json";
      $.get(NBMap, function (NBMap) {
        that.$echarts.registerMap('NB', NBMap);
        myChart.setOption({
          tooltip: {
            trigger: 'item',
            formatter: function (params) { //提示框浮层内容格式器
              return "区域：" + params.data.name + "<br />" + "本科教育点：45" + "<br />" + "专科教育点：45" + "<br />" + "博士点：45" + "<br />" + "硕士点：45"
            }
          },
          visualMap: { //设置图例的相关参数
            min: 0,
            // max:555,
            left: 0, //图例距离左侧边框的距离
            bottom: 0, //图例距离底部边框的距离
            //calculable:true,
            showLabel: false,   //visualMap各阶段的文字
            // text: ["高", "低"], //图例文本设置
            pieces: [
              //图例中文字颜色得设置,min与max的设置与图中显示相关联
              {
                min: 120,
                label: ">120人",
                color: "#568EFF"
              }, {
                min: 80,
                max: 120,
                label: "80-120人",
                color: "#8AB1FF"
              }, {
                min: 40,
                max: 80,
                label: "40-80人",
                color: "#8AB1FF"
              }, {
                max: 40,
                label: "<40人",
                color: "#CCDDFF"
              }],
            show: false
          },
          geo: { //地图组件配置
            map: "NB", //选择地图
            roam: false, //可缩放和平移true（或！0），false（或！1）
            scaleLimit: { //缩放比例
              min: 1,
              max: 2
            },
            zoom: 1.2, //地图显示比例
            top: 60, //地图距离上边框距离
            label: { //绑定文字设置(图中省名字的设置
              normal: { //初始状态配置（是否显示文本、颜色）
                show: true,
                fontSize: "12",  //地图字体大小
                formatter: '{a}',
                color: "rgba(0,0,0,0.7)"
              },
              emphasis: {
                show: true,
                color: '#fff'
              }
            },
            itemStyle: { //鼠标选中图斑设置模块
              normal: {
                borderColor: "rgba(0, 0, 0, 0.2)" //边框样式
              },
              emphasis: { //选中后
                areaColor: "#EB4F38", //鼠标移入颜色
                shadowOffsetX: 0, //阴影水平方向上偏移量
                shadowOffsetY: 0, //阴影垂直方向上偏移量
                borderWidth: 0, //描边现况宽
              },
            }
          },
          series: [
            {
              name: "宁波市教育资源分",
              type: "map",
              geoIndex: 0,
              data: [
                { name: '余姚市', value: 20 },
                { name: '北仑区', value: 20 },
                { name: '慈溪市', value: 60 },
                { name: '江北区', value: 60 },
                { name: '镇海区', value: 60 },
                { name: '海曙区', value: 34 },
                { name: '鄞州区', value: 13869.47 },
                { name: '奉化区', value: 13869.47 },
                { name: '象山县', value: 13869.47 },
                { name: '宁海县', value: 13869.47 },
              ]
            }
          ]
        }
        );
      });
      myChart.resize();
    },
    KJCGZCL () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('KJCGZCL')[0]);
      myChart.setOption({
        title: {
          text: '近五年科技成果支撑力发展趋势',
          top: '2%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          label: {
            show: true
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,  //数值与线条对齐
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
          data: ['2010', '2011', '2012', '2013', '2014', '2016', '2010', '2011', '2012', '2013', '2014', '2016', '2013', '2014', '2016']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 12, 589, 66, 33, 478, 562, 865, 124, 426],
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: 'rgb(33,148,246)',
            borderWidth: 1,
          },
          lineStyle: {
            width: 3//设置线条粗细
          }
        }]
      })
      myChart.resize();
    },
    CYJZL () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('CYJZL')[0]);
      myChart.setOption({
        title: {
          text: '近五年产业竞争力发展趋势',
          top: '2%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          label: {
            show: true
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,  //数值与线条对齐
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
          data: ['2010', '2011', '2012', '2013', '2014', '2016', '2010', '2011', '2012', '2013', '2014', '2016', '2013', '2014', '2016']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 12, 589, 66, 33, 478, 562, 865, 124, 426],
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: 'rgb(33,148,246)',
            borderWidth: 1,
          },
          lineStyle: {
            width: 3//设置线条粗细
          }
        }]
      })
      myChart.resize();
    },
    KJZYMJD () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('KJZYMJD')[0]);
      myChart.setOption({
        title: {
          text: '近五年科教资源密集度发展趋势',
          top: '2%',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          label: {
            show: true
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,  //数值与线条对齐
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
          data: ['2010', '2011', '2012', '2013', '2014', '2016', '2010', '2011', '2012', '2013', '2014', '2016', '2013', '2014', '2016']
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(170,172,174,0.4)'
            }
          },
        },
        series: [{
          data: [820, 932, 901, 934, 1290, 1330, 1320, 12, 589, 66, 33, 478, 562, 865, 124, 426],
          type: 'line',
          symbolSize: 10,
          itemStyle: {
            color: 'rgb(33,148,246)',
            borderWidth: 1,
          },
          lineStyle: {
            width: 3//设置线条粗细
          }
        }]
      })
      myChart.resize();
    },
    Bubble () {
      let that = this;
      var dataBJ = [
        [0.1, 0.3, "良"], //X轴、y轴、其他信息
        [0.3, 0.6, "良"],
        [0.6, 0.7, "良"],
        [0.8, 0.5, "轻度污染"],
        [1.0, 0.9, "轻度污染"]
      ];
      var dataGZ = [
        [0.2, 0.2, "良"],
        [0.4, 0.1, "良"],
        [0.6, 0.8, "良"],
        [0.8, 0.4, "轻度污染"],
        [1.0, 0.6, "轻度污染"]
      ];
      var dataSH = [
        [0.2, 0.6, "良"],
        [0.4, 0.4, "良"],
        [0.6, 0.7, "良"],
        [0.8, 0.8, "轻度污染"],
        [1.0, 0.2, "轻度污染"]
      ];
      var myChart = that.$echarts.init(document.getElementById('Bubble'));
      var option = {
        color: [
          'rgb(97,221,170)', 'rgb(120,211,248)', 'rgb(246,189,22)'
        ],
        grid: {
          containLabel: true,
          left: '3%',
          right: '7%',
          top: '5%',
          bottom: '5%'
        },
        tooltip: {
          padding: 10,
          backgroundColor: 'rgba(0,0,0,0.5)',
          borderColor: '#777',
          borderWidth: 1,
          formatter: function (obj) {
            return obj.seriesName + ":" + obj.value[1]
          }
        },
        xAxis: {
          type: 'value',
          max: 1,
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#D5DFE8'
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            formatter: '{value}',
            textStyle: {
              color: '#333333'
            }
          }
        },
        yAxis: {
          type: 'value',
          max: 1,
          axisLine: {
            lineStyle: {
              color: '#D5DFE8'
            },
          },
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#D5DFE8'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333'
            }
          }
        },
        series: [{
          name: '北京',
          type: 'scatter',
          symbolSize: function (data) {
            return data[1] * 70;
          },
          itemStyle: {
            shadowBlur: 60,
            shadowColor: 'rgba(25, 100, 150, 0.2)',
            shadowOffsetY: 5,
          },
          data: dataBJ
        },
        {
          name: '上海',
          type: 'scatter',
          symbolSize: function (data) {
            return data[1] * 70;
          },
          itemStyle: {
            shadowBlur: 60,
            shadowColor: 'rgba(25, 100, 150, 0.2)',
            shadowOffsetY: 5,
          },
          data: dataSH
        },
        {
          name: '广州',
          type: 'scatter',
          symbolSize: function (data) {
            return data[1] * 70;
          },
          itemStyle: {
            shadowBlur: 60,
            shadowColor: 'rgba(25, 100, 150, 0.2)',
            shadowOffsetY: 5,
          },
          data: dataGZ
        },
        ]
      }
      myChart.setOption(option);
      myChart.resize();
    },
    cityZSPM () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementById('cityZSPM'));
      var option = {
        color: ['#0091EC'],
        grid: {
          containLabel: true,
          left: '2%',
          right: '5%',
          top: '5%',
          bottom: '5%'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        xAxis: {
          type: 'category',
          data: ['北京', '上海', '宁波', '广东', '四川', '贵州', '新疆'],
          axisTick: {   //坐标轴刻度
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#D5DFE8'
            }
          },
          axisLabel: {
            textStyle: {
              color: '#333333'
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {  //坐标轴线
            show: false
          },
          axisTick: {   //坐标轴刻度
            show: false
          }
        },
        series: [{
          name: '城市知识产权支撑力排名',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: '40%',
          type: 'bar'
        }]
      };
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    }
  },
  watch: {
    activeName (v) {
      this.$nextTick(() => {
        //科技成果支撑力
        this.KJCGZCL()
        //产业竞争力
        this.CYJZL()
        //科教资源密集度
        this.KJZYMJD()
        this.$refs[`chart${v}`].$echarts;
      })
    }
  }
}
</script>
