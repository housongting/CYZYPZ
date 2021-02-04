<template>
  <div class="companiesPortrait">
    <div class="Cont-MainM main-top">
      <el-container>
        <el-aside width="290px" class="p-3 sticky-top">
          <div class="bg-whiteR bg-show">
            <div class="pt-2 pb-3">
              <ul>
                <li class="h5 hover">基本信息</li>
                <li><a href="#" class="hover h6">工商信息</a></li>
                <li><a href="#" class="h6">股东信息</a></li>
                <li><a href="#" class="h6">高层人员</a></li>
                <li><a href="#" class="h6">技术团队</a></li>
                <li><a href="#" class="h6">变更信息</a></li>
              </ul>
              <ul>
                <li class="h5">知识产权信息</li>
                <li><a href="#" class="h6">专 利</a></li>
                <li><a href="#" class="h6">论文期刊</a></li>
              </ul>
              <ul>
                <li class="h5">创新能力</li>
                <li><a href="#" class="h6">科技项目</a></li>
                <li><a href="#" class="h6">科技奖励</a></li>
                <li><a href="#" class="h6">创新平台</a></li>
              </ul>
              <ul>
                <li class="h5">主营产品</li>
                <li><a href="#" class="h6">产品列表</a></li>
                <li><a href="#" class="h6">产品路线图</a></li>
              </ul>
              <ul>
                <li class="h5">竞争对手识别</li>
              </ul>
              <ul>
                <li class="h5">供应链关系</li>
              </ul>
              <ul>
                <li class="h5">投融资</li>
                <li><a href="#" class="h6">对外投资</a></li>
                <li><a href="#" class="h6">融资事件</a></li>
              </ul>
              <ul>
                <li class="h5">财务分析</li>
              </ul>
              <ul>
                <li class="h5">关系图谱</li>
              </ul>
              <ul>
                <li class="h5">企业标签</li>
              </ul>
            </div>
          </div>
        </el-aside>

        <el-main class="p-3">
          <div class="bg-white bg-show p-3 mb-4 ">
            <div class="flex">
              <el-image :src="src" style="width:160px;align-self:flex-start" fit="contain"></el-image>
              <div class="pl-3" style="flex:1">
                <div class="flex justify_between mb-2">
                  <h2>奥克斯空调股份有限公司<span class="highlightFont ml-3">股票代码：02080</span></h2>
                  <div class="flex align_center">
                    <p>浏览次数：<span class="highlightFont">1159</span> 次</p>
                    <el-button class="ml-3" type="primary" size="small" icon="el-icon-plus">关注</el-button>
                  </div>
                </div>
                <div class="tagList">
                  <el-tag v-for="(tag,i) in tags" :key="i">
                    {{tag}}
                  </el-tag>
                </div>
              </div>
            </div>

            <div class="pt-3">
              <div class="Tatle_L mb-3">工商信息<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <table class="GSMessage" style="border:1px solid #ebeef5;border-collapse:collapse;width:100%">
                <tr>
                  <td class="tableHighlight">法定代表人</td>
                  <td>张无忌</td>
                  <td class="tableHighlight">经营状态</td>
                  <td>存续</td>
                </tr>
                <tr>
                  <td class="tableHighlight">注册资本</td>
                  <td>200000万人民币</td>
                  <td class="tableHighlight">成立日期</td>
                  <td>2016-12-08</td>
                </tr>
                <tr>
                  <td class="tableHighlight">统一社会信用代码</td>
                  <td>91330200MA283665X6</td>
                  <td class="tableHighlight">核准日期</td>
                  <td>2018-02-01</td>
                </tr>
                <tr>
                  <td class="tableHighlight">机构类型</td>
                  <td>其他股份有限公司(非上市)</td>
                  <td class="tableHighlight">所属行业</td>
                  <td>电气机械和器材制造业</td>
                </tr>
                <tr>
                  <td class="tableHighlight">登记机关</td>
                  <td>宁波市市场监督管理局</td>
                  <td class="tableHighlight">营业期限</td>
                  <td>2016-12-08至无固定期限</td>
                </tr>
                <tr>
                  <td class="tableHighlight">经营范围</td>
                  <td colspan="3">空调器及配件、制冷机械配件、热泵热水器、暖风机及配件的制造、加工、销售、安装、维修；纸箱的制造、加工、销售；自营和代理各类货物和技术的进出口，但国家限定经营或禁止进出口的货物和技术除外。（依法须经批准的项目，经相关部门批准后方可开展经营活动）</td>
                </tr>
                <tr>
                  <td class="tableHighlight">曾用名</td>
                  <td colspan="3">XXXX1111（变更时间：2020-02-01）<br>XXXX2222（变更时间：2019-02-01）</td>
                </tr>
              </table>
            </div>

            <div class="pt-3">
              <div class="Tatle_L mb-3">股东信息<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="100">
                </el-table-column>
                <el-table-column property="date" label="股东">
                </el-table-column>
                <el-table-column property="name" label="持股比例" width="180">
                </el-table-column>
                <el-table-column property="address" label="认缴出资额" width="300">
                </el-table-column>
              </el-table>
            </div>

            <div class="pt-3">
              <div class="Tatle_L mb-3">高层人员<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="100">
                </el-table-column>
                <el-table-column property="date" label="姓名">
                </el-table-column>
                <el-table-column property="name" label="性别">
                </el-table-column>
                <el-table-column property="address" label="学历">
                </el-table-column>
                <el-table-column property="name" label="职务">
                </el-table-column>
                <el-table-column property="address" label="持股比例">
                </el-table-column>
              </el-table>
            </div>

            <div class="pt-3">
              <div class="Tatle_L mb-3">技术团队<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="100">
                </el-table-column>
                <el-table-column property="date" label="姓名">
                </el-table-column>
                <el-table-column property="name" label="性别">
                </el-table-column>
                <el-table-column property="address" label="学历">
                </el-table-column>
                <el-table-column property="name" label="职务">
                </el-table-column>
              </el-table>
            </div>

            <div class="pt-3">
              <div class="Tatle_L mb-3">变更信息<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border :data="tableData" style="width: 100%">
                <el-table-column type="index" label="序号" width="100">
                </el-table-column>
                <el-table-column property="date" label="变更日期">
                </el-table-column>
                <el-table-column property="name" label="变更类型">
                </el-table-column>
                <el-table-column property="address" label="变更前内容">
                </el-table-column>
                <el-table-column property="name" label="变更后内容">
                </el-table-column>
              </el-table>
            </div>
          </div>

          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left: -1rem !important;">变更信息</div>
            <div class="pt-2">
              <div class="Tatle_L mb-3">专利总览<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <div class="mb-2 flex patentOverview">
                <div class="patentTypeTotal">
                  <p class="mb-2">专利申请总量</p>
                  <h2>5843</h2>
                </div>
                <div class="patentTypeTotalDetails flex align_center justify_between pl-3" style="flex:1;">
                  <div class="DetailsEle">
                    <p class="mb-2">发明专利</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">实用新型</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">外观设计</p>
                    <h2>5843</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">PCT</p>
                    <h2>5843</h2>
                  </div>
                </div>
              </div>

              <div class="mb-2 flex patentOverview">
                <div class="patentTypeTotal">
                  <p class="mb-2">专利授权总量</p>
                  <h2>5843</h2>
                </div>
                <div class="patentTypeTotalDetails flex align_center justify_around pl-3" style="flex:1;">
                  <div class="DetailsEle">
                    <p class="mb-2">发明专利</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">实用新型</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">外观设计</p>
                    <h2>5843</h2>
                  </div>
                  <div class="DetailsEle" style="background:#fff">
                  </div>
                </div>
              </div>

              <div class="mb-2 flex patentOverview">
                <div class="patentTypeTotal">
                  <p class="mb-2">有效专利总量</p>
                  <h2>5843</h2>
                </div>
                <div class="patentTypeTotalDetails flex align_center justify_between pl-3" style="flex:1;">
                  <div class="DetailsEle">
                    <p class="mb-2">发明专利</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">实用新型</p>
                    <h2>2356</h2>
                  </div>
                  <div class="DetailsEle">
                    <p class="mb-2">外观设计</p>
                    <h2>5843</h2>
                  </div>
                  <div class="DetailsEle" style="background:#fff">
                  </div>
                </div>
              </div>

              <div class="flex align_center justify_between patentTypeAllDetails">
                <div>
                  <p class="mb-2">发明专利授权量</p>
                  <h2>19.6%</h2>
                </div>
                <div>
                  <p class="mb-2">发明专利平均授权周期</p>
                  <h2>1.62年</h2>
                </div>
                <div>
                  <p class="mb-2">在审</p>
                  <h2>1843</h2>
                </div>
                <div>
                  <p class="mb-2">无权</p>
                  <h2>743</h2>
                </div>
              </div>
            </div>
            <div class="pt-2">
              <div class="Tatle_L mb-3">专利分析<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <div class="patentAnalysisEcharts">
                <div class="patentAnalysisLeft">
                  <p :class="{selected:selectedNum==1}" @click="pbtn(1)">专利申请年份趋势</p>
                  <p :class="{selected:selectedNum==2}" @click="pbtn(2)">专利公开年份趋势</p>
                  <p :class="{selected:selectedNum==3}" @click="pbtn(3)">专利类型分布</p>
                  <p :class="{selected:selectedNum==4}" @click="pbtn(4)">专利状态分布</p>
                  <p :class="{selected:selectedNum==5}" @click="pbtn(5)">专利技术领域（按种类分析）</p>
                  <p :class="{selected:selectedNum==6}" @click="pbtn(6)">专利技术领域（按年度趋势）</p>
                </div>
                <div class="patentAnalysisRight">
                  <div :class="{showSelected:selectedNum==1}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利申请年份趋势</p>
                    <div class="patentDiv1"></div>
                  </div>
                  <div :class="{showSelected:selectedNum==2}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利公开年份趋势</p>
                    <div class="patentDiv2"></div>
                  </div>
                  <div :class="{showSelected:selectedNum==3}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利类型分布</p>
                    <div class="patentDiv3"></div>
                  </div>
                  <div :class="{showSelected:selectedNum==4}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利状态分布</p>
                    <div class="patentDiv4"></div>
                  </div>
                  <div :class="{showSelected:selectedNum==5}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利技术领域（按种类分析）</p>
                    <div class="patentDiv5"></div>
                  </div>
                  <div :class="{showSelected:selectedNum==6}">
                    <p class="pl-3" style="height:36px;line-height:36px;font-size:16px;">专利技术领域（按年度趋势）</p>
                    <div class="patentDiv6"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 创新能力 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">创新能力</div>
            <div class="pt-2 mb-3">
              <div class="flex justify_between align_center mb-3">
                <div class="Tatle_L">科技项目<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                </div>
                <el-form :inline="true" :model="formInline">
                  <el-form-item style="width:100px">
                    <el-select v-model="formInline.region" placeholder="级别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="项目类型" style="width:140px">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                      <el-button slot="append">搜索</el-button>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="项目名称">
                </el-table-column>
                <el-table-column property="name" label="项目级别" width="120">
                </el-table-column>
                <el-table-column property="address" label="立项年度">
                </el-table-column>
                <el-table-column property="name" label="项目类型" width="120">
                </el-table-column>
              </el-table>
            </div>
            <div class="pt-2 mb-3">
              <div class="flex justify_between align_center mb-3">
                <div class="Tatle_L">科技奖励<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                </div>
                <el-form :inline="true" :model="formInline">
                  <el-form-item style="width:100px">
                    <el-select v-model="formInline.region" placeholder="级别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="奖励类型" style="width:140px">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                      <el-button slot="append">搜索</el-button>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="获奖人/获奖项目">
                </el-table-column>
                <el-table-column property="name" label="获奖级别" width="120">
                </el-table-column>
                <el-table-column property="address" label="获奖时间">
                </el-table-column>
                <el-table-column property="name" label="奖项类别" width="120">
                </el-table-column>
              </el-table>
            </div>
            <div class="pt-2">
              <div class="flex justify_between align_center mb-3">
                <div class="Tatle_L">创新平台<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                </div>
                <el-form :inline="true" :model="formInline">
                  <el-form-item style="width:100px">
                    <el-select v-model="formInline.region" placeholder="级别">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-select v-model="formInline.region" placeholder="平台类型" style="width:140px">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                      <el-button slot="append">搜索</el-button>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="获奖人/获奖项目">
                </el-table-column>
                <el-table-column property="name" label="平台级别" width="120">
                </el-table-column>
                <el-table-column property="address" label="认定时间">
                </el-table-column>
                <el-table-column property="name" label="平台类别" width="120">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 主营产品 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">主营产品</div>
            <div class="pt-2 mb-3">
              <div class="Tatle_L mb-3">产品列表<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="产品名称">
                </el-table-column>
                <el-table-column property="name" label="配套客户">
                </el-table-column>
              </el-table>
            </div>
            <div class="pt-2">
              <div class="Tatle_L mb-3">产品路线图<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <div style="height:300px;position:relative">
                <img src="../img/previous.png" alt="" style="cursor:pointer" class="previous" @click="previous">
                <img src="../img/after.png" alt="" class="after" @click="after" style="cursor:pointer">
                <div id="produceLine">
                  <!-- 第一段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <span class="year">2018</span>
                  </div>
                  <!-- 第二段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <span class="year">2019</span>
                  </div>
                  <!-- 第三段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <span class="year">2021</span>
                  </div>
                  <!-- 第四段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <span class="year">2022</span>
                  </div>
                  <!-- 第五段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                  </div>
                  <!-- 第六段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器反馈卡</div>
                    </div>
                  </div>
                  <!-- 第七段 -->
                  <div class="produceYearGroup">
                    <div class="circurLine"></div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器</div>
                    </div>
                    <div class="lineDiv">
                      <div class="verticalLine"></div>
                      <div class="horizontalLine"></div>
                      <div class="lineRight">盘式制动器缴费基数的</div>
                    </div>
                  </div>
                  <!-- 最后一段 -->
                  <div class="produceYearGroup">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 竞争对手识别 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">竞争对手识别</div>
            <div class="pt-2 mb-3">
              <div class="NBtab mt-3">
                <el-tabs v-model="activeName" type="card">
                  <el-tab-pane label="盘式制动器" name="1">
                    <div class="PSZDQ" style="height:400px" ref="chart1"></div>
                  </el-tab-pane>
                  <el-tab-pane label="汽缸盖" name="2">
                    <div class="QGG" style="height:400px" ref="chart2"></div>
                  </el-tab-pane>
                  <el-tab-pane label="汽车电子控制系统" name="3">
                    <div class="QCDZKZXT" style="height:400px" ref="chart3"></div>
                  </el-tab-pane>
                </el-tabs>
              </div>
            </div>
            <div class="pt-2">
              <div class="flex justify_between align_center mb-3">
                <div class="Tatle_L">竞争对手<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
                </div>
                <el-form :inline="true" :model="formInline">
                  <el-form-item>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                      <el-button slot="append">搜索</el-button>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="竞争对手">
                </el-table-column>
                <el-table-column property="name" label="注册资本" width="120">
                </el-table-column>
                <el-table-column property="address" label="成立日期">
                </el-table-column>
                <el-table-column property="name" label="竞品">
                </el-table-column>
                <el-table-column property="name" label="所在地">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 供应链关系 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">供应链关系</div>
            <div class="pt-2 mb-3">
              <div class="NBtab mt-3 flex justify_between align_center">
                <el-tabs v-model="supplyChain" type="card">
                  <el-tab-pane label="上游供应商" name="1">
                  </el-tab-pane>
                  <el-tab-pane label="下游客户" name="2">
                  </el-tab-pane>
                </el-tabs>
                <el-form :inline="true" :model="formInline">
                  <el-form-item>
                    <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
                      <el-button slot="append">搜索</el-button>
                    </el-input>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
              <el-table-column type="index" width="100" label="序号">
              </el-table-column>
              <el-table-column property="date" label="客户名称">
              </el-table-column>
              <el-table-column property="name" label="供应产品">
              </el-table-column>
            </el-table>
          </div>
          <!-- 投融资 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">投融资
            </div>
            <div class="pt-2 mb-3">
              <div class="Tatle_L mb-3">对外投资<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="被投资企业名称">
                </el-table-column>
                <el-table-column property="name" label="法定代表人" width="120">
                </el-table-column>
                <el-table-column property="address" label="注册资本">
                </el-table-column>
                <el-table-column property="name" label="投资比例">
                </el-table-column>
                <el-table-column property="name" label="成立日期">
                </el-table-column>
              </el-table>
            </div>
            <div class="pt-2">
              <div class="Tatle_L mb-3">融资事件<el-tooltip class="item" effect="dark" content="Right Center 提示文字" placement="right"><i class="el-icon-warning ml-2" style="color:#999"></i></el-tooltip>
              </div>
              <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
                <el-table-column type="index" width="100" label="序号">
                </el-table-column>
                <el-table-column property="date" label="融资时间">
                </el-table-column>
                <el-table-column property="name" label="融资轮次" width="120">
                </el-table-column>
                <el-table-column property="address" label="融资金额">
                </el-table-column>
                <el-table-column property="address" label="投资方">
                </el-table-column>
                <el-table-column property="name" label="事件名称">
                </el-table-column>
              </el-table>
            </div>
          </div>
          <!-- 财务分析 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav mb-3" style="margin-left:-1rem!important;">财务分析</div>
            <el-table ref="singleTable" border stripe :data="tableData" style="width: 100%">
              <el-table-column type="index" width="100" label="序号">
              </el-table-column>
              <el-table-column property="date" label="年度">
              </el-table-column>
              <el-table-column property="name" label="营业收入(元)">
              </el-table-column>
              <el-table-column property="address" label="营业成本(元)">
              </el-table-column>
              <el-table-column property="name" label="利润总额(元)">
              </el-table-column>
              <el-table-column property="name" label="研发费用(元)">
              </el-table-column>
              <el-table-column label="年报">
                <template>
                  <i class="iconfont icon-nianbao" style="color:#1B91EC;font-size:20px"></i>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <!-- 关系图谱 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">关系图谱</div>
            <el-row class="mb-3" :gutter="30">
              <el-col :span="18" class="pt-3">
                教育层次：
                <el-checkbox label="商业关系"></el-checkbox>
                <el-checkbox label="供应链关系"></el-checkbox>
                <el-checkbox label="技术合作关系"></el-checkbox>
                <el-checkbox label="成果转让关系"></el-checkbox>
                <el-checkbox label="高新流动关系"></el-checkbox>
              </el-col>
              <el-col :span="6" class="text-right">
                <el-popover placement="bottom-end" width="360" trigger="click">
                  <table class="GSMessage" style="border:1px solid #ebeef5;border-collapse:collapse;width:100%">
                    <tr>
                      <td class="tableHighlight">申请号</td>
                      <td>CN201410609730.1</td>
                    </tr>
                    <tr>
                      <td class="tableHighlight">专利名称</td>
                      <td>气缸盖</td>
                    </tr>
                    <tr>
                      <td class="tableHighlight">转让时间</td>
                      <td>2019-12-20</td>
                    </tr>
                  </table>
                  <el-button type="primary" slot="reference" @click="rotatedouble">
                    <i class="iconfont icon-arrow-double-right" style="margin-right:5px"></i>关系详情
                  </el-button>
                </el-popover>
              </el-col>
            </el-row>
            <div style="height:400px;background:#ccc"></div>
          </div>
          <!-- 企业标签 -->
          <div class="bg-white bg-show p-3 mb-4">
            <div class="Tatle_nav" style="margin-left:-1rem!important;">企业标签</div>
            <el-row :gutter="30" class="pt-3">
              <el-col :span="12">
                <div id="tagsList">
                  <a href="javascript:void(0)" title="">科技创新</a>
                  <a href="javascript:void(0)" title="">区块链</a>
                  <a href="javascript:void(0)" title="">文献综述</a>
                  <a href="javascript:void(0)" title="">机器人</a>
                  <a href="javascript:void(0)" title="">计算机科学</a>
                  <a href="javascript:void(0)" title="">对外投资</a>
                  <a href="javascript:void(0)" title="">自然语言处理</a>
                  <a href="javascript:void(0)" title="">研究价格</a>
                  <a href="javascript:void(0)" title="">模式识别</a>
                </div>
              </el-col>
              <el-col :span="12">
                <div id="tagsList2">
                  <a href="javascript:void(0)" title="">一带一路</a>
                  <a href="javascript:void(0)" title="">大数据时代</a>
                  <a href="javascript:void(0)" title="">人工智能神经网络</a>
                  <a href="javascript:void(0)" title="">智能控制</a>
                  <a href="javascript:void(0)" title="">自动驾驶</a>
                  <a href="javascript:void(0)" title="">计算机科学</a>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
import '../../static/js/tags2.js'
import '../../static/js/tags.js'
import '../fonts/iconfont.css'
export default {
  name: 'companiesPortrait',
  data () {
    return {
      btnNum: 0,
      selectedNum: 1,
      supplyChain: '1',
      activeName: "1",
      input: "",
      formInline: {
        user: '',
        region: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        yearReport: '2015'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄',
        yearReport: '2015'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄',
        yearReport: '2015'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄',
        yearReport: '2015'
      }],
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
      tags: ['国家专利奖', '浙江省专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖', '高新技术企业', '宁波市专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖', '国家专利奖', '浙江省专利奖', '高新技术企业', '宁波市专利奖']
    }
  },
  mounted () {
    var that = this;
    allEchartsInit()  //调用初始化echarts函数
    window.onresize = function () {
      allEchartsInit();   //echarts窗口事件
    }
    function allEchartsInit () {   //echarts初始化
      //盘式制动器
      that.PSZDQ()
      //汽缸盖
      that.QGG()
      //汽车电子控制系统
      that.QCDZKZXT()
      //产品路线图lineDiv的尺寸
      $('.produceYearGroup').each(function (i, v) {
        $(v).children('.lineDiv').each(function (index, element) {
          $(element).css({ bottom: Number(50 * index + 14) + 'px' })
        })
      })
      //产品路线图produceYearGroup的尺寸
      $('.produceYearGroup').each(function (index, element) {
        $(element).css({ left: 300 * index + "px" })
      })
    }
  },
  methods: {
    previous () {
      // console.log(this.btnNum, '上');
      let produceYearGroup = $('#produceLine>.produceYearGroup');
      let reciprocal = $(produceYearGroup).eq(produceYearGroup.length - 2).offset().left - 39
      let Difference = reciprocal - $('#produceLine').width();
      // console.log(Difference);
      if (Difference <= -40) {
        return
      }
      //console.log($(produceYearGroup).eq(produceYearGroup.length - 2).offset().left, $('#produceLine').width()); // x  1457
      produceYearGroup.each(function (index, element) {
        let result = $('.produceYearGroup').eq(index).css('left').substr(0, $('.produceYearGroup').eq(index).css('left').length - 2)
        $(produceYearGroup).eq(index).stop().animate({ left: Number(result) - 300 + 'px' }, 100)
      })
      this.btnNum++
    },
    after () {
      // console.log(this.btnNum, '下');
      let produceYearGroup = $('#produceLine>.produceYearGroup');
      if (this.btnNum == 0) {
        return
      }
      produceYearGroup.each(function (index, element) {
        let result = $('.produceYearGroup').eq(index).css('left').substr(0, $('.produceYearGroup').eq(index).css('left').length - 2)
        $(produceYearGroup).eq(index).stop().animate({ left: Number(result) + 300 + 'px' }, 100)
      })
      this.btnNum--
    },
    rotatedouble () {
      $('.icon-arrow-double-right').toggleClass('rotate90');
    },
    pbtn (val) {
      this.selectedNum = val;
    },
    PSZDQ () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('PSZDQ')[0]);
      myChart.setOption({
        title: {
          text: '盘式制动器 ',
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
    QGG () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('QGG')[0]);
      myChart.setOption({
        title: {
          text: '汽缸盖',
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
    QCDZKZXT () {
      var that = this;
      var myChart = that.$echarts.init(document.getElementsByClassName('QCDZKZXT')[0]);
      myChart.setOption({
        title: {
          text: '汽车电子控制系统',
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
  },
  computed () {

  },
  watch: {
    activeName (v) {
      this.$nextTick(() => {
        //盘式制动器
        this.PSZDQ()
        //汽缸盖
        this.QGG()
        //汽车电子控制系统
        this.QCDZKZXT()
        this.$refs[`chart${v}`].$echarts;
      })
    }
  }
}
</script>

<style>
#produceLine {
  height: 300px;
  position: relative;
  margin: 0 29px;
  overflow: hidden;
}

.produceYear {
  height: 10px;
  background: #1b91ec;
  width: 300px;
  position: absolute;
  left: 29px;
  bottom: 40px;
}

.previous {
  position: absolute;
  left: 0;
  bottom: 29px;
}

.after {
  position: absolute;
  right: 0;
  bottom: 29px;
}

.circurLine {
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #fff;
  border: 3px solid #1b91ec;
  bottom: -5px;
  left: 100px;
}

.verticalLine {
  height: 50px;
  width: 2px;
  background: #1b91ec;
  padding-bottom: 16px;
}

.lineRight {
  padding: 6px 14px;
  border: 1px solid #1b91ec;
  color: #1b91ec;
  position: absolute;
  left: 24px;
  bottom: 35px;
}

.horizontalLine {
  width: 25px;
  position: absolute;
  left: 0px;
  bottom: 49px;
  height: 1px;
  background: #1b91ec;
}

.lineDiv {
  position: absolute;
  left: 109px;
  bottom: 14px;
  width: 100%;
}

.lineDiv2 {
  position: absolute;
  left: 109px;
  bottom: 64px;
  width: 100%;
}

.lineDiv3 {
  position: absolute;
  left: 109px;
  bottom: 114px;
  width: 100%;
}

.produceYearGroup {
  height: 10px;
  background: #1b91ec;
  width: 300px;
  position: absolute;
  left: 0px;
  bottom: 40px;
}
.produceYearGroup:last-of-type {
  width: 1000px;
}

.year {
  position: absolute;
  bottom: -28px;
  left: 94px;
  color: #1b91ec;
  font-weight: 600;
}
.companiesPortrait .rotate90 {
  transform: rotate(90deg);
  display: inline-block;
}
.companiesPortrait .patentAnalysisEcharts {
  position: relative;
  height: 400px;
}
.companiesPortrait .patentAnalysisLeft {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 888;
  width: 240px;
}
.companiesPortrait .patentAnalysisLeft p {
  height: 36px;
  line-height: 36px;
  padding-left: 2rem;
  text-align: left;
  background: #f1f5fa;
  border-right: 1px solid #ebeef5;
  border-left: 1px solid #ebeef5;
  border-top: 1px solid #ebeef5;
  cursor: pointer;
}
.companiesPortrait .patentAnalysisLeft > p:last-of-type {
  border-bottom: 1px solid #ebeef5;
}
.companiesPortrait .patentAnalysisLeft > p.selected {
  border-right: 0px !important;
  background-color: #fff;
}
.companiesPortrait .patentAnalysisRight {
  position: absolute;
  height: 400px;
  left: 239px;
  top: 0;
  width: calc(100% - 240px);
  border: 1px solid #ebeef5;
}
.patentDiv1,
.patentDiv2,
.patentDiv3,
.patentDiv4,
.patentDiv5,
.patentDiv6 {
  height: calc(100% - 36px);
}
.companiesPortrait .patentAnalysisRight > div {
  display: none;
  height: 100%;
}
.companiesPortrait .patentAnalysisRight > div.showSelected {
  display: block !important;
}
.companiesPortrait .patentTypeAllDetails > div {
  width: 18%;
  text-align: center;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.companiesPortrait .patentTypeAllDetails > div > p {
  color: #777777;
}
.companiesPortrait .patentTypeAllDetails > div > h2 {
  font-size: 28px;
  color: #1b91ec;
}
#tagsList,
#tagsList2 {
  position: relative;
  width: 100%;
  height: 400px;
}

#tagsList a,
#tagsList2 a {
  position: absolute;
  top: 0px;
  left: 0px;
  font-family: Microsoft YaHei;
  color: #333333;
  background: #f2f4f8;
  font-weight: 500;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 6px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.08);
  letter-spacing: 1px;
}

#tagsList a:hover,
#tagsList2 a:hover {
  color: #ff0000;
}

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

.companiesPortrait .el-form-item {
  margin-bottom: 0;
}
.patentOverview .patentTypeTotalDetails .DetailsEle h2 {
  font-size: 28px;
}
.patentOverview .patentTypeTotal h2 {
  font-size: 28px;
}
.patentOverview .patentTypeTotalDetails .DetailsEle {
  width: 24%;
  height: 88px;
  background: #ebf6fe;
  color: #1b91ec;
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.patentOverview .patentTypeTotalDetails em {
  font-style: normal;
  color: #78d3f8;
  font-size: 103px;
  height: 100px;
  line-height: 81px;
}
.patentOverview .patentTypeTotal {
  width: 240px;
  height: 100px;
  background: #0091ec;
  color: #fff;
  border-radius: 4px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.Tatle_nav {
  color: #409eff;
  font-size: 18px;
  border-left: 5px #409eff solid;
  padding-left: 12px;
}
.GSMessage tr > td {
  padding: 12px 10px;
  border: 1px solid #ebeef5;
}
.GSMessage .tableHighlight {
  background: #f5f7fa;
  text-align: right;
  width: 150px;
}
.highlightFont {
  font-size: 14px;
  font-weight: bold;
  color: #1b91ec;
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
.bg-whiteR ul li a.hover::before {
  background: #409eff;
}
.bg-whiteR ul li a:hover::before {
  background: #409eff;
}
.bg-whiteR ul li a.hover {
  color: #409eff;
}
.companiesPortrait .Tatle_L {
  font-size: 16px;
  font-weight: bold;
  color: #333333;
  margin-left: 0;
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
.tagList .el-tag {
  margin-bottom: 6px;
  margin-right: 5px;
}
</style>