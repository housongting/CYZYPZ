<template>
  <div id="companiesAnalysis">
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
            <div class="flex">
              <p class="flex_shrink" style="height:32px;line-height:32px">已选条件：</p>
              <div class="tagList" style="flex:1">
                <el-tag v-for="tag in tags" :key="tag" closable>
                  {{tag}}
                </el-tag>
              </div>
            </div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="汽车制造" name="汽车制造">
                <div class="checkboxArr">
                  <el-form ref="form" :model="checkedCondition" label-width="120px">
                    <el-form-item label="类型：">
                      <el-checkbox-group v-model="checkedCondition.type">
                        <el-checkbox label="传统燃油汽车" name="type"></el-checkbox>
                        <el-checkbox label="新能源汽车" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="一级技术模块：">
                      <el-checkbox-group v-model="checkedCondition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="二级技术模块：">
                      <el-checkbox-group v-model="checkedCondition.firstTechnology">
                        <el-checkbox :label="item" v-for="item in YJJSMK" :key="item" name="firstTechnology"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="分析区域：">
                      <el-checkbox-group v-model="checkedCondition.type">
                        <el-checkbox label="全国" name="type"></el-checkbox>
                        <el-checkbox label="宁波" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-form>
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
          </div>

          <el-row :gutter="20" class="mb-4">
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">企业分布</div>
                <div class="pl-4 pr-4 pb-4">
                  <el-row class="mb-3">
                    <el-col :span="24" class="pt-3">
                      教育层次：
                      <el-checkbox label="上市公司"></el-checkbox>
                      <el-checkbox label="高新技术企业"></el-checkbox>
                      <el-checkbox label="其他"></el-checkbox>
                    </el-col>
                  </el-row>
                </div>
                <!-- 企业分布 -->
                <div class="enterpriseDistribution" style="height:430px"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">企业名单</div>
                <div class="pl-4 pr-4">
                  <el-row class="mb-3 pt-3">
                    <el-col :span="4" class="Numb"><span class="number">2100</span><i>家</i>
                      <div>企业教育</div>
                    </el-col>
                    <el-col :span="5" class="Numb"><span class="number">2100</span><i>亿元</i>
                      <div>主营业务收入</div>
                    </el-col>
                    <el-col :span="5" class="Numb"><span class="number">2100</span><i>亿元</i>
                      <div>利润总额</div>
                    </el-col>
                    <el-col :span="10">
                      <div class="float-right">
                        <el-input placeholder="请输入内容" v-model="input">
                          <el-button slot="append" type="primary">搜索</el-button>
                        </el-input>
                      </div>
                    </el-col>
                  </el-row>

                </div>
                <div class="pl-4 pr-4 mb-3">
                  <el-table ref="singleTable" stripe border :data="tableData" style="width: 100%">
                    <el-table-column type="index" label="序号" width="50">
                    </el-table-column>
                    <el-table-column property="date" label="名称" width="120">
                    </el-table-column>
                    <el-table-column property="name" label="教育层次" width="120">
                    </el-table-column>
                    <el-table-column property="address" label="城市">
                    </el-table-column>
                  </el-table>
                  <div class="text-right mt-3">
                    <el-pagination background layout="prev, pager, next" :total="1000">
                    </el-pagination>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="mb-4">
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">高新技术企业分布排名</div>
                <div class="highEnterpriseRank" style="height:360px"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">上市企业分布排名</div>
                <div class="listedEnterpriseRank" style="height:360px"></div>
              </div>
            </el-col>
          </el-row>

          <el-row :gutter="20" class="mb-4">
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">企业类型统计</div>
                <div class="enterpriseType" style="height:360px"></div>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="bg-white bg-show pt-3 pb-3">
                <div class="Tatle_L">企业发展统计</div>
                <div class="enterpriseDevelopment" style="height:360px"></div>
              </div>
            </el-col>
          </el-row>

        </el-main>

      </el-container>
    </div>

  </div>
</template>

<script>
import "../../node_modules/echarts/map/js/china.js"
export default {
  name: "companiesAnalysis",
  data () {
    return {
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
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
      ],
      input: '',
      checkedCondition: {
        type: '',
        firstTechnology: ''
      },
      YJJSMK: ['动力装置', '底盘', '车身及附件', '汽车内外装饰', '电表、仪表相关配件'],
      tags: ['汽车类型：传统燃油汽车', '产业：汽车制造'],
      activeName: '汽车制造'
    }
  },
  mounted () {
    var that = this;
    allEchartsInit();//调用地图

    window.onresize = function () {
      allEchartsInit();   //echarts窗口事件
    }

    function allEchartsInit () {
      //企业分布
      that.enterpriseDistribution();
      //高新技术企业分布排名
      that.highEnterpriseRank();
      //上市企业分布排名
      that.listedEnterpriseRank();
      //企业类型统计
      that.enterpriseType();
      //企业发展统计
      that.enterpriseDevelopment();
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    enterpriseDistribution () {
      var option = {
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
            name: "企业分布",
            type: "map",
            geoIndex: 0,
            data: this.dataList
          },
        ]
      }
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('enterpriseDistribution')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    highEnterpriseRank () {
      var option = {
        color: ['#0091EC'],
        grid: {
          containLabel: true,
          left: '5%',
          right: '5%',
          top: '10%',
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
          data: ['北京', '上海', '宁波', '广东', '四川', '贵州', '新疆']
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
          name: '高新技术企业分布排名',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: '40%',
          type: 'bar'
        }]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('highEnterpriseRank')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    listedEnterpriseRank () {
      var option = {
        color: ['#0091EC'],
        grid: {
          containLabel: true,
          left: '5%',
          right: '5%',
          top: '10%',
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
          data: ['北京', '上海', '宁波', '广东', '四川', '贵州', '新疆']
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
          name: '上市企业分布排名',
          data: [120, 200, 150, 80, 70, 110, 130],
          barWidth: '40%',
          type: 'bar'
        }]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('listedEnterpriseRank')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    enterpriseType () {
      var option = {
        color: ['#0091EC', '#73D13D', '#FFC53D', '#EB4F38'],
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [{
          name: ['企业类型统计'],
          type: 'pie',
          radius: [80, 140],
          center: ['50%', '50%'],
          avoidLabelOverlap: true,
          hoverOffset: 30,
          data: [{
            value: 335,
            name: '高新技术企业'
          },
          {
            value: 310,
            name: '上市公司'
          },
          {
            value: 234,
            name: '规上企业'
          },
          {
            value: 135,
            name: '科技型中小企业'
          },
          ],
          itemStyle: {
            normal: {
              borderColor: '#FFFFFF',
              borderWidth: '2',
            },
          },
          emphasis: {
            itemStyle: {
              borderWidth: 10,
              borderColor: '#FFFFFF',
            }
          },
        }]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('enterpriseType')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    },
    enterpriseDevelopment () {
      var option = {
        color: ['#0091EC', '#73D13D', '#FFC53D', '#EB4F38'],
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['高新技术企业', '上市公司', '规上企业', '科技型中小企业']
        },
        grid: {
          containLabel: true,
          left: '5%',
          right: '5%',
          top: '10%',
          bottom: '5%'
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2014', '2015', '2016', '2017', '2018', '2019', '2020']
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
        series: [
          {
            name: '高新技术企业',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210],
            symbolSize: 10,
            lineStyle: {
              width: 3//设置线条粗细
            }
          },
          {
            name: '上市公司',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310],
            symbolSize: 10,
            lineStyle: {
              width: 3//设置线条粗细
            }
          },
          {
            name: '规上企业',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410],
            symbolSize: 10,
            lineStyle: {
              width: 3//设置线条粗细
            }
          },
          {
            name: '科技型中小企业',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320],
            symbolSize: 10,
            lineStyle: {
              width: 3//设置线条粗细
            }
          },
        ]
      };
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementsByClassName('enterpriseDevelopment')[0])
      // 绘制图表
      myChart.setOption(option);
      myChart.resize();
    }
  }
}
</script>

<style>
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

.companiesAnalysis .Tatle_L {
  color: #409eff;
  font-size: 18px;
  border-left: 5px #409eff solid;
  padding-left: 12px;
}

.checkboxArr .el-form-item {
  margin-bottom: 0 !important;
}
.checkboxArr .el-checkbox {
  margin-right: 20px;
}
.checkboxArr .el-form-item__label,
.checkboxArr .el-form-item__content {
  line-height: 24px;
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