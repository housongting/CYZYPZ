<style>
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
.el-table thead tr th {
  background: #f1f5fa;
  font-weight: bold;
  color: #333;
  text-align: center;
}
.el-table--border td {
  text-align: center;
}
.el-main {
  padding: 0;
}
.left-auto {
  width: 260px;
}
.sticky-top {
  position: -webkit-sticky;
  position: sticky;
  top: 50px;
  z-index: 1;
}
.el-table td,
.el-table th {
  padding: 8px 0;
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
.map {
  position: relative;
}
.Top5 {
  position: absolute;
  left: 20px;
  bottom: 0;
  width: 150px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  z-index: 10;
}
.Top5 h5 {
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
}
.Top5 ul {
  border-left: 3px solid #409eff;
}
.Top5 ul li {
  padding: 3px 0 3px 10px;
}
.Top5 ul li span {
  display: inline-block;
  padding-left: 10px;
  font-size: 16px;
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
.el-table td,
.el-table th {
  text-align: center;
}
</style>


<template>
  <div>

    <div class="Cont-MainM main-top">
      <el-container>
        <el-aside width="290px" class="p-3 sticky-top">
          <div class="bg-whiteR bg-show">
            <div class="bg-primary p-3">
              <el-row>
                <el-col :span="8">
                  <img :src="imgLogo" alt="">
                </el-col>
                <el-col :span="16">
                  <h3>{{imgTitle}}
                    <el-dropdown class="float-right mt-1" @command="handleCommand"><i class="el-icon-menu te-white"></i>
                      <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item :command="item" v-for="(item,index) in dropdownItemArr" :key="index">{{item.imgTitle}}</el-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </h3>
                  <h6 class="text-white pt-1" style="font-size:12px;color:rgba(255, 255, 255,0.7)">{{imgWord}}</h6>
                </el-col>
              </el-row>
            </div>
            <div class="pt-2 pb-3">
              <ul>
                <li class="h5 hover">产业发展引导目录</li>
                <li><a href="#" class="hover h6">技术发展趋势</a></li>
                <li><a href="#" class="h6">资源配置引导目录</a></li>
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
                <li><a href="#" class="h6">投资机构</a></li>
                <li><a href="#" class="h6">人才资源</a></li>
              </ul>
            </div>
          </div>
        </el-aside>
        <el-main class="p-3">
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">全球汽车零部件行业技术发展趋势</div>
            <div class="p-4">
              <h4 class="mb-3">各国汽车及零部件产业发展战略方向<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="国家" width="80">
                </el-table-column>
                <el-table-column prop="two" label="主要战略规划">
                </el-table-column>
                <el-table-column prop="three" label="发展方向">
                </el-table-column>
              </el-table>

              <el-row class="mb-3 mt-4">
                <el-col :span="12">
                  <h4>全球汽车产业领先企业发展战略布局<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                </el-col>
                <el-col :span="12" class="text-right">
                  <el-radio v-model="radio" label="1">整车领先企业</el-radio>
                  <el-radio v-model="radio" label="2">零部件领先企业</el-radio>
                </el-col>
              </el-row>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="企业" width="80">
                </el-table-column>
                <el-table-column prop="two" label="2019年主要战略举措">
                </el-table-column>
                <el-table-column prop="three" label="战略方向" width="140">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">中国汽车零部件产业发展资源配置引导目录</div>
            <div class="p-4">
              <el-row :gutter="30">
                <el-col :span="12">
                  <h4 class="mb-3">中国汽车零部件产业技术模块毛利率引导目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                  <el-table :data="tableData" border stripe style="width: 100%">
                    <el-table-column prop="one" label="技术模块">
                    </el-table-column>
                    <el-table-column prop="two" label="毛利率">
                    </el-table-column>
                    <el-table-column prop="three" label="毛利率排名">
                    </el-table-column>
                  </el-table>
                </el-col>
                <el-col :span="12">
                  <h4 class="mb-3">中国汽车零部件产业技术模块专利引导目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                  <el-table :data="tableData" border stripe style="width: 100%">
                    <el-table-column prop="one" label="技术模块">
                    </el-table-column>
                    <el-table-column prop="two" label="专利(件)">
                    </el-table-column>
                    <el-table-column prop="three" label="专利排名">
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>

              <el-row :gutter="30" class="mt-4">
                <el-col :span="12">
                  <h4 class="mb-3">中国汽车零部件产业技术模块匹配目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                  <el-table :data="tableData" border stripe style="width: 100%">
                    <el-table-column prop="one" label="技术模块">
                    </el-table-column>
                    <el-table-column prop="two" label="知识产权-毛利率匹配">
                      <template slot-scope="scope">
                        <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
                <el-col :span="12">
                  <h4 class="mb-3">中国汽车零部件产业重点企业综合匹配目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                  <el-table :data="tableData" border stripe style="width: 100%">
                    <el-table-column prop="one" label="企业名称">
                    </el-table-column>
                    <el-table-column prop="two" label="研发投入-专利申请">
                      <template slot-scope="scope">
                        <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                      </template>
                    </el-table-column>
                    <el-table-column prop="three" label="专利申请-毛利率">
                      <template slot-scope="scope">
                        <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-col>
              </el-row>
              <el-row class="mt-4 mb-3">
                <el-col :span="12">
                  <h4>中国汽车零部件产业重点企业综合引导目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                  </h4>
                </el-col>
                <el-col :span="12" class="text-right">
                  <el-link type="primary">查看更多 >></el-link>
                </el-col>
              </el-row>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="企业名称">
                </el-table-column>
                <el-table-column prop="two" label="研发投入(万)">
                </el-table-column>
                <el-table-column prop="three" label="研发投入排名">
                </el-table-column>
                <el-table-column prop="one" label="专利申请数(件)">
                </el-table-column>
                <el-table-column prop="two" label="专利申请数排名">
                </el-table-column>
                <el-table-column prop="three" label="毛利率">
                </el-table-column>
                <el-table-column prop="three" label="毛利率排名">
                </el-table-column>
              </el-table>
              <h4 class="mt-4 mb-3">主要城市汽车零部件产业技术模块专利申请量比较情况<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="技术模块">
                </el-table-column>
                <el-table-column prop="two" label="宁波">
                </el-table-column>
                <el-table-column prop="three" label="北京">
                </el-table-column>
                <el-table-column prop="one" label="天津">
                </el-table-column>
                <el-table-column prop="two" label="广州">
                </el-table-column>
                <el-table-column prop="three" label="上海">
                </el-table-column>
                <el-table-column prop="three" label="武汉">
                </el-table-column>
                <el-table-column prop="three" label="重庆">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="three" label="长春">
                  <template>
                    sss
                  </template>
                </el-table-column>
              </el-table>
              <h4 class="mt-4 mb-3">主要城市汽车零部件产业技术模块知识产权-毛利率匹配目录<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </h4>
              <el-table :data="tableData" border stripe style="width: 100%">
                <el-table-column prop="one" label="技术模块">
                </el-table-column>
                <el-table-column prop="two" label="宁波">
                </el-table-column>
                <el-table-column prop="three" label="北京">
                </el-table-column>
                <el-table-column prop="one" label="天津">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="two" label="广州">
                </el-table-column>
                <el-table-column prop="three" label="上海">
                  <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '高-低' ? 'TagColor1' : 'TagColor2'" size="medium" effect="dark" style="width:100%;border-radius: 0;">{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column prop="three" label="武汉">
                </el-table-column>
                <el-table-column prop="three" label="重庆">
                </el-table-column>
                <el-table-column prop="three" label="长春">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <div class="bg-white bg-show pt-3 pb-1 mb-4">
            <div class="Tatle_L">全国教育资源分<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
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

                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>

                  <div style="height:1px"></div>
                  <!-- 全国教育资源分 -->
                  <div id="map" class="QUZYJYF" style="height:605px;position:absolute;width:calc(50% - 15px);">

                  </div>

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
                  <div class="mt-3 mb-3 float-right" style="width:420px">
                    <el-input placeholder="请输入内容" v-model="input">
                      <el-select v-model="select" slot="prepend" placeholder="请选择">
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
            <div class="Tatle_L">全国科技资源分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">汽车类型：<el-radio v-model="radio" label="1">传统燃油汽车</el-radio>
                    <el-radio v-model="radio" label="2">新能源汽车</el-radio>
                  </div>
                  <div class="mb-2">一级技术模块：<el-checkbox label="动力装置"></el-checkbox>
                    <el-checkbox label="底盘"></el-checkbox>
                    <el-checkbox label="车身及附件"></el-checkbox>
                    <el-checkbox label="汽车内外装饰"></el-checkbox>
                    <el-checkbox label="电表、仪表及相关配件"></el-checkbox>
                  </div>
                  <div class="mb-2">资源类型：<el-checkbox label="科研院所"></el-checkbox>
                    <el-checkbox label="国家重点实验室"></el-checkbox>
                    <el-checkbox label="国家认定的企业技术中心"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入科技资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGKJZYFB" style="height:605px;position: absolute;width: calc(50% - 15px);">

                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>科研院所</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家重点实验室</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家认定的企业技术中心</div>
                    </el-col>
                  </el-row>
                  <div class="mt-3 mb-3 float-right" style="width:420px">
                    <el-input placeholder="请输入内容" v-model="input">
                      <el-button slot="append" type="primary">搜索</el-button>
                    </el-input>
                  </div>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="名称">
                    </el-table-column>
                    <el-table-column prop="three" label="资源类型">
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
            <div class="Tatle_L">全国专利分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">汽车类型：<el-radio v-model="radio" label="1">传统燃油汽车</el-radio>
                    <el-radio v-model="radio" label="2">新能源汽车</el-radio>
                  </div>
                  <div class="mb-2">一级技术模块：<el-checkbox label="动力装置"></el-checkbox>
                    <el-checkbox label="底盘"></el-checkbox>
                    <el-checkbox label="车身及附件"></el-checkbox>
                    <el-checkbox label="汽车内外装饰"></el-checkbox>
                    <el-checkbox label="电表、仪表及相关配件"></el-checkbox>
                  </div>
                  <div class="mb-2">资源类型：<el-checkbox label="发动机机体"></el-checkbox>
                    <el-checkbox label="传动系统"></el-checkbox>
                    <el-checkbox label="冷却系统"></el-checkbox>
                    <el-checkbox label="配气机构"></el-checkbox>
                    <el-checkbox label="曲柄连杆机构"></el-checkbox>
                    <el-checkbox label="润滑系统"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入专利资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QUZLFB" style="height:557px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>授权发明专利</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="mt-3 mb-3 float-right" style="width:420px">
                        <el-input placeholder="请输入内容" v-model="input">
                          <el-button slot="append" type="primary">搜索</el-button>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="专利名称">
                    </el-table-column>
                    <el-table-column prop="three" label="申请号">
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
            <div class="Tatle_L">全国论文期刊分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">文献类型：<el-checkbox label="学术期刊"></el-checkbox>
                    <el-checkbox label="学位论文"></el-checkbox>
                    <el-checkbox label="学术会议"></el-checkbox>
                  </div>
                  <div class="mb-2">汽车类型：<el-radio v-model="radio" label="1">传统燃油汽车</el-radio>
                    <el-radio v-model="radio" label="2">新能源汽车</el-radio>
                  </div>
                  <div class="mb-2">一级技术模块：<el-checkbox label="动力装置"></el-checkbox>
                    <el-checkbox label="底盘"></el-checkbox>
                    <el-checkbox label="车身及附件"></el-checkbox>
                    <el-checkbox label="汽车内外装饰"></el-checkbox>
                    <el-checkbox label="电表、仪表及相关配件"></el-checkbox>
                  </div>
                  <div class="mb-2">二级技术模块：<el-checkbox label="发动机机体"></el-checkbox>
                    <el-checkbox label="传动系统"></el-checkbox>
                    <el-checkbox label="冷却系统"></el-checkbox>
                    <el-checkbox label="配气机构"></el-checkbox>
                    <el-checkbox label="曲柄连杆机构"></el-checkbox>
                    <el-checkbox label="润滑系统"></el-checkbox>
                  </div>
                  <div class="mb-2">产品：<el-checkbox label="发动机"></el-checkbox>
                    <el-checkbox label="曲轴"></el-checkbox>
                    <el-checkbox label="连杆"></el-checkbox>
                    <el-checkbox label="气缸体"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入论文期刊频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGLWQKFB" style="height:605px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>学术期刊</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>学位论文</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>学术会议</div>
                    </el-col>
                  </el-row>
                  <div class="mt-3 mb-3 float-right" style="width:420px">
                    <el-input placeholder="请输入内容" v-model="input">
                      <el-button slot="append" type="primary">搜索</el-button>
                    </el-input>
                  </div>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="专利名称">
                    </el-table-column>
                    <el-table-column prop="three" label="文献类型">
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
            <div class="Tatle_L">全国科技奖励分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">奖项类别：<el-checkbox label="最高科学技术奖"></el-checkbox>
                    <el-checkbox label="技术发明奖"></el-checkbox>
                    <el-checkbox label="科学技术合作奖"></el-checkbox>
                    <el-checkbox label="自然科学奖"></el-checkbox>
                    <el-checkbox label="科学技术进步奖"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入科技奖励频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGKJJLFB" style="height:557px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家级科技奖励</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="mt-3 mb-3 float-right" style="width:420px">
                        <el-input placeholder="请输入内容" v-model="input">
                          <el-button slot="append" type="primary">搜索</el-button>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="获奖人/获奖项目">
                    </el-table-column>
                    <el-table-column prop="three" label="获奖年度">
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
            <div class="Tatle_L">全国科技项目分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20">
                  &nbsp;
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入科技项目频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGKJXMFB" style="height:557px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家级科技项目</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="mt-3 mb-3 float-right" style="width:420px">
                        <el-input placeholder="请输入内容" v-model="input">
                          <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="重点建设工程" value="1"></el-option>
                          </el-select>
                          <el-button slot="append" type="primary">搜索</el-button>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="获奖人/获奖项目">
                    </el-table-column>
                    <el-table-column prop="three" label="获奖年度">
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
            <div class="Tatle_L">全国企业分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">企业类型：<el-checkbox label="高新技术企业"></el-checkbox>
                    <el-checkbox label="上市公司"></el-checkbox>
                    <el-checkbox label="其他"></el-checkbox>
                  </div>
                  <div class="mb-2">汽车类型：<el-radio v-model="radio" label="1">传统燃油汽车</el-radio>
                    <el-radio v-model="radio" label="2">新能源汽车</el-radio>
                  </div>
                  <div class="mb-2">一级技术模块：<el-checkbox label="动力装置"></el-checkbox>
                    <el-checkbox label="底盘"></el-checkbox>
                    <el-checkbox label="车身及附件"></el-checkbox>
                    <el-checkbox label="汽车内外装饰"></el-checkbox>
                    <el-checkbox label="电表、仪表及相关配件"></el-checkbox>
                  </div>
                  <div class="mb-2">二级技术模块：<el-checkbox label="发动机机体"></el-checkbox>
                    <el-checkbox label="传动系统"></el-checkbox>
                    <el-checkbox label="冷却系统"></el-checkbox>
                    <el-checkbox label="配气机构"></el-checkbox>
                    <el-checkbox label="曲柄连杆机构"></el-checkbox>
                    <el-checkbox label="润滑系统"></el-checkbox>
                  </div>
                  <div class="mb-2">产品：<el-checkbox label="发动机"></el-checkbox>
                    <el-checkbox label="曲轴"></el-checkbox>
                    <el-checkbox label="连杆"></el-checkbox>
                    <el-checkbox label="气缸体"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入企业资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGQYFB" style="height:605px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>企业数量</div>
                    </el-col>
                    <el-col :span="4" class="Numb">其中 <em>{</em></el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>高新技术企业</div>
                    </el-col>
                    <el-col :span="6" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>上市公司</div>
                    </el-col>
                    <el-col :span="2" class="Numb"><em>}</em></el-col>
                    <div class="mt-3 mb-3 float-right" style="width:420px">
                      <el-input placeholder="请输入内容" v-model="input">
                        <el-button slot="append" type="primary">搜索</el-button>
                      </el-input>
                    </div>
                  </el-row>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="企业名称">
                    </el-table-column>
                    <el-table-column prop="three" label="企业类型">
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
            <div class="Tatle_L">全国投资机构分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20">
                  &nbsp;
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入投资机构频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGTZJGFB" style="height:557px;position: absolute;width: calc(50% - 15px);">
                    map
                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="12" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>投资机构数量</div>
                    </el-col>
                    <el-col :span="12">
                      <div class="mt-3 mb-3 float-right" style="width:420px">
                        <el-input placeholder="请输入内容" v-model="input">
                          <el-select v-model="select" slot="prepend" placeholder="请选择">
                            <el-option label="重点建设工程" value="1"></el-option>
                          </el-select>
                          <el-button slot="append" type="primary">搜索</el-button>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="机构名称">
                    </el-table-column>
                    <el-table-column prop="three" label="机构类型">
                    </el-table-column>
                    <el-table-column prop="one" label="机构总部">
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
            <div class="Tatle_L">全国人才分布<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
            </div>
            <div class="pl-4 pr-4 pb-4">
              <el-row class="mb-3">
                <el-col :span="20" class="pt-3">
                  <div class="mb-2">汽车类型：<el-radio v-model="radio" label="1">传统燃油汽车</el-radio>
                    <el-radio v-model="radio" label="2">新能源汽车</el-radio>
                  </div>
                  <div class="mb-2">一级技术模块：<el-checkbox label="动力装置"></el-checkbox>
                    <el-checkbox label="底盘"></el-checkbox>
                    <el-checkbox label="车身及附件"></el-checkbox>
                    <el-checkbox label="汽车内外装饰"></el-checkbox>
                    <el-checkbox label="电表、仪表及相关配件"></el-checkbox>
                  </div>
                </el-col>
                <el-col :span="4" class="text-right">
                  <el-button type="primary">进入人才资源频道</el-button>
                </el-col>
              </el-row>
              <el-row :gutter="30">
                <el-col :span="12">
                  <div class="Top5 bg-white p-3">
                    <h5>TOP5城市</h5>
                    <ul>
                      <li>上海市<span class="number">70</span> 个</li>
                      <li>北京市<span class="number">58</span> 个</li>
                      <li>武汉市<span class="number">53</span> 个</li>
                      <li>天津市<span class="number">48</span> 个</li>
                      <li>重庆市<span class="number">41</span> 个</li>
                    </ul>
                  </div>
                  <div style="height:1px"></div>
                  <div id="map" class="QGRCFB" style="height:605px;position: absolute;width: calc(50% - 15px);">
                    map

                  </div>
                </el-col>
                <el-col :span="12">
                  <el-row>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>科研院所</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家重点实验室</div>
                    </el-col>
                    <el-col :span="8" class="Numb"><span class="number">2100</span><i>个</i>
                      <div>国家认定的企业技术中心</div>
                    </el-col>
                  </el-row>
                  <div class="mt-3 mb-3 float-right" style="width:420px">
                    <el-input placeholder="请输入内容" v-model="input">
                      <el-button slot="append" type="primary">搜索</el-button>
                    </el-input>
                  </div>
                  <el-table :data="tableData" border stripe style="width: 100%" class="mb-3">
                    <el-table-column prop="one" label="序号">
                    </el-table-column>
                    <el-table-column prop="two" label="机构名称">
                    </el-table-column>
                    <el-table-column prop="three" label="机构类型">
                    </el-table-column>
                    <el-table-column prop="one" label="机构总部">
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
import "../../node_modules/echarts/map/js/china.js"
export default {
  name: "national",
  data () {
    return {
      imgLogo: require('../img/Pr-Micon1.png'),
      imgTitle: "汽车制造",
      imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
      value: "",
      radio: '1',
      select: '',
      input: '',
      dropdownItemArr: [
        {
          imgTitle: '汽车制造',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon1.png'),
        },
        {
          imgTitle: '软件与新兴服务',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon2.png'),
        },
        {
          imgTitle: '高端装备',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon3.png'),
        },
        {
          imgTitle: '电子信息',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon4.png'),
        },
        {
          imgTitle: '新材料',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon5.png'),
        },
        {
          imgTitle: '绿色石化',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon6.png'),
        },
        {
          imgTitle: '关键基础件',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon7.png'),
        },
        {
          imgTitle: '智能家电',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon8.png'),
        },
        {
          imgTitle: '时尚纺织服装',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon9.png'),
        },
        {
          imgTitle: '生物医药',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon10.png'),
        },
        {
          imgTitle: '文体用品',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon11.png'),
        },
        {
          imgTitle: '节能环保',
          imgWord: "这里可以写一段，关于汽车制造相关的产业资源配置关于汽车制造相关的产业资源配置",
          imgLogo: require('../img/Pr-Micon12.png'),
        }
      ],
      dataList: [
        {
          name: '南海诸岛',
          value: 0
        },
        {
          name: '北京',
          value: 20
        },
        {
          name: '天津',
          value: 15
        },
        {
          name: '上海',
          value: 100
        },
        {
          name: '重庆',
          value: 150
        },
        {
          name: '河北',
          value: 5
        },
        {
          name: '河南',
          value: 92
        },
        {
          name: '云南',
          value: 84
        },
        {
          name: '辽宁',
          value: 35
        },
        {
          name: '黑龙江',
          value: 66
        },
        {
          name: '湖南',
          value: 68
        },
        {
          name: '安徽',
          value: 40
        },
        {
          name: '山东',
          value: 49
        },
        {
          name: '新疆',
          value: 79
        },
        {
          name: '江苏',
          value: 76
        },
        {
          name: '浙江',
          value: 52
        },
        {
          name: '江西',
          value: 9
        },
        {
          name: '湖北',
          value: 12
        },
        {
          name: '广西',
          value: 35
        },
        {
          name: '甘肃',
          value: 32
        },
        {
          name: '山西',
          value: 22
        },
        {
          name: '内蒙古',
          value: 15
        },
        {
          name: '陕西',
          value: 45
        },
        {
          name: '吉林',
          value: 88
        },
        {
          name: '福建',
          value: 75
        },
        {
          name: '贵州',
          value: 72
        },
        {
          name: '广东',
          value: 900
        },
        {
          name: '青海',
          value: 4526
        },
        {
          name: '西藏',
          value: 3641
        },
        {
          name: '四川',
          value: 46
        },
        {
          name: '宁夏',
          value: 42
        },
        {
          name: '海南',
          value: 9999
        },
        {
          name: '台湾',
          value: 256
        },
        {
          name: '香港',
          value: 30
        },
        {
          name: '澳门',
          value: 12
        }
      ],
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
    allEchartsInit();//调用地图

    window.onresize = function () {
      allEchartsInit();   //echarts窗口事件
    }

    function allEchartsInit () {
      // 全国教育资源分
      that.QUZYJYF();
      //全国科技资源分布
      that.QGKJZYFB();
      //全国专利分布
      that.QUZLFB();
      //全国论文期刊分布
      that.QGLWQKFB();
      //全国科技奖励分布
      that.QGKJJLFB();
      //全国科技项目分布
      that.QGKJXMFB();
      //全国企业分布
      that.QGQYFB();
      //全国投资机构分布
      that.QGTZJGFB();
      //全国人才分布
      that.QGRCFB();
    }


  },
  methods: {
    handleCommand (command) {
      var that = this;
      switch (command.imgTitle) {
        case "汽车制造":
          that.imgLogo = require('../img/Pr-Micon1.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;
          break;
        case "软件与新兴服务":
          that.imgLogo = require('../img/Pr-Micon2.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "高端装备":
          that.imgLogo = require('../img/Pr-Micon3.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "电子信息":
          that.imgLogo = require('../img/Pr-Micon4.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "新材料":
          that.imgLogo = require('../img/Pr-Micon5.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "绿色石化":
          that.imgLogo = require('../img/Pr-Micon6.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "关键基础件":
          that.imgLogo = require('../img/Pr-Micon7.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "智能家电":
          that.imgLogo = require('../img/Pr-Micon8.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "时尚纺织服装":
          that.imgLogo = require('../img/Pr-Micon9.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "生物医药":
          that.imgLogo = require('../img/Pr-Micon10.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "文体用品":
          that.imgLogo = require('../img/Pr-Micon11.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
        case "节能环保":
          that.imgLogo = require('../img/Pr-Micon12.png');
          that.imgTitle = command.imgTitle;
          that.imgWord = command.imgWord;

          break;
      }
    },
    QUZYJYF () {
      var option1 = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "本科教育点：45" + "<br />" + "专科教育点：45" + "<br />" + "硕士点：45" + "<br />" + "博士点：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false   //隐藏视觉映射组件
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
          label: { //绑定文字设置(图中省名字的设置
            normal: { //初始状态配置（是否显示文本、颜色）
              show: true,
              fontSize: "12",  //地图字体大小
              formatter: '{a}',
              color: "rgba(0,0,0,0.7)"
            },
            emphasis: {   //高亮字体颜色
              show: true,
              color: '#fff'
            }
          },
          itemStyle: { //鼠标选中图斑设置模块
            normal: {
              // shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国教育资源分",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QUZYJYF')[0])
      // 绘制图表
      myChart.setOption(option1);
      myChart.resize();
    },
    QGKJZYFB () {
      var option2 = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "科研院所：45" + "<br />" + "国家重点实验室：45" + "<br />" + "国家认定企业技术中心：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国科技资源分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGKJZYFB')[0])
      // 绘制图表
      myChart.setOption(option2);
      myChart.resize();
    },
    QUZLFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "授权发明专利：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国专利分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QUZLFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGLWQKFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "学术期刊：45" + "<br />" + "学位论文：45" + "<br />" + "学术会议：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国论文期刊分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGLWQKFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGKJJLFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "国家级科技奖励：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国科技奖励分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGKJJLFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGKJXMFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "国家级科技项目：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国科技项目分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGKJXMFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGQYFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "高新技术企业：45" + "<br />" + "上市公司：45" + "<br />" + "其他：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国企业分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGQYFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGTZJGFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "投资机构：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国投资机构分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGTZJGFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    QGRCFB () {
      var option = {
        tooltip: { //提示框组件
          // triggerOn: "click", //提示框触发条件‘click’为鼠标点击触发
          formatter: function (params) { //提示框浮层内容格式器
            if (params.data.name == "南海诸岛") {
              return ""
            } else {
              return "城市：" + params.data.name + "<br />" + "投资机构：45"
            }
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
              min: 80,
              label: ">80人",
              color: "#568EFF"
            }, {
              min: 60,
              max: 80,
              label: "60-80人",
              color: "#8AB1FF"
            }, {
              min: 20,
              max: 60,
              label: "20-60人",
              color: "#8AB1FF"
            }, {
              max: 20,
              label: "<20人",
              color: "#CCDDFF"
            }],
          show: false
        },
        geo: { //地图组件配置
          map: "china", //选择地图
          roam: false, //可缩放和平移true（或！0），false（或！1）
          scaleLimit: { //缩放比例
            min: 1,
            max: 2
          },
          zoom: 1.2, //地图显示比例
          top: 50, //地图距离上边框距离
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
              //shadowBlur: 50,
              //shadowColor: 'rgba(0, 0, 0, 0.2)',
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
            name: "全国人才分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('QGRCFB')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },

  }
}
</script>

