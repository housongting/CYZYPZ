<style>
.homeCenter .el-tabs__item.is-active {
  background: #fff;
  position: relative;
  color: #409eff;
}
.homeCenter .el-tabs__item.is-active::before {
  position: absolute;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
  top: 36px;
  left: 50%;
  margin-left: -4px;
}
.homeCenter .el-tabs__item {
  color: #fff;
  text-align: center;
}
.homeCenter .el-tabs--card > .el-tabs__header,
.homeCenter .el-tabs--card > .el-tabs__header .el-tabs__nav,
.homeCenter .el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
}
.homeCenter .el-tabs__item {
  height: 36px;
  line-height: 36px;
  border-radius: 5px;
}
.homeCenter .el-tabs__nav-scroll {
  padding-bottom: 6px;
}
.homeCenter .el-input-group input {
  height: 52px;
  font-size: 15px;
}
.homeCenter .el-input-group__append,
.homeCenter .el-input-group__prepend {
  background: #409eff;
  color: #fff;
  font-size: 16px;
}
.homeCenter .el-input-group__append,
.homeCenter .el-input-group__prepend {
  border: none;
}
.homeCenter .el-input__inner {
  border-color: #fff;
}
.homeCenter .banner {
  background: url(../img/banner.png) no-repeat center;
  height: 550px;
  width: 100%;
  padding-top: 180px;
  overflow: hidden;
  clear: both;
}
.homeCenter .banner .tab {
  width: 840px;
  margin: 0 auto;
  color: #fff;
}
.homeCenter .banner h1 {
  font-size: 38px;
  color: #fff;
  padding-bottom: 70px;
}
.homeCenter .hot-a a {
  padding: 0 10px;
}
.homeCenter .hot-a a:hover {
  color: #409eff;
}
.homeCenter .el-carousel__button {
  height: 5px;
  border-radius: 10px;
}
.homeCenter .el-carousel__indicators--outside button {
  background-color: #409eff;
}
.homeCenter .number-bg {
  background: url(../img/no-bg.jpg);
  overflow: hidden;
  margin-top: 50px;
  color: #fff;
}
.homeCenter .number-bg .tatle h1::before {
  position: absolute;
  content: "";
  left: 50%;
  background: rgba(255, 255, 255, 0.2);
  height: 12px;
  width: 80px;
  top: 28px;
  margin-left: -40px;
}
.homeCenter .number-ind li {
  float: left;
  width: 20%;
  margin-bottom: 15px;
  text-align: center;
}
.homeCenter .number-ind li em {
  font-size: 38px;
  font-weight: bold;
  display: inline-block;
}
.homeCenter .number-ind li span {
  display: inline-block;
  padding-left: 10px;
}
.homeCenter .number-ind li h6 {
  clear: both;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  padding-top: 20px;
}
.homeCenter .number-ind li h6::before {
  position: absolute;
  content: "";
  background: rgba(255, 255, 255, 0.6);
  width: 35px;
  height: 2px;
  left: 50%;
  top: 12px;
  margin-left: -18px;
}
.homeCenter .ImgNewLi a {
  font-size: 17px;
  display: block;
  line-height: 26px;
}
.homeCenter .ImgNewLi a:hover {
  color: #409eff;
}
.homeCenter .ImgNewLi p {
  color: #777;
}
.homeCenter .ImgNewLi img {
  height: 130px;
  border-radius: 5px;
}
.homeCenter .NewLi a {
  font-size: 17px;
  display: block;
}
.homeCenter .NewLi a:hover {
  color: #409eff;
}
.homeCenter .menu .childrenNav > dd > a.hover {
  color: #fff;
  background: #409eff;
}
</style>

<template>

  <div class="homeCenter">
    <div class="banner">
      <h1 class="text-center">释放数据价值、共建产业生态</h1>
      <div class="tab">
        <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
          <el-tab-pane label="企业库" name="one">
            <el-input placeholder="请输入关键词搜索产业资源数据，多关键词用空格隔开，如：浙江 吉利" type="primary">
              <el-button slot="append" icon="el-icon-search">搜 索</el-button>
            </el-input>
            <div class="mt-3 hot-a">热词：<a href="#">新能源汽车</a><a href="#">发动机</a><a href="#">底盘</a><a href="#">动力装置</a></div>
          </el-tab-pane>
          <el-tab-pane label="专利库" name="two">专利库</el-tab-pane>
          <el-tab-pane label="政策法规" name="three">政策法规</el-tab-pane>
          <el-tab-pane label="标准规范" name="four">标准规范</el-tab-pane>
          <el-tab-pane label="人才库" name="five">人才库</el-tab-pane>
          <el-tab-pane label="行业新闻" name="six">行业新闻</el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="tatle">
      <h1>产业导航</h1>
    </div>
    <div class="container pt-1">
      <el-carousel indicator-position="outside" :autoplay="false" arrow="never" trigger="click" height="350px">
        <el-carousel-item>
          <el-row :gutter="30">
            <el-col :span="8" class="mb-4" v-for="(item,index) in carouselArr.slice(0,6)" :key="index">
              <div class="bg-white bg-show p-4 overflow">
                <el-row :gutter="20">
                  <el-col :span="8" class="text-right"><img :src="item.Icon" alt=""></el-col>
                  <el-col :span="15">
                    <h2 class="pb-2 text-pointer pt-2">{{item.IndustryName}}</h2>
                    <h4 class="text-li text-white">{{item.DescDetail}}</h4>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <el-carousel-item>
          <el-row :gutter="30">
            <el-col :span="8" class="mb-4" v-for="(item,index) in carouselArr.slice(6,12)" :key="index">
              <div class="bg-white bg-show p-4 overflow">
                <el-row :gutter="20">
                  <el-col :span="8" class="text-right"><img :src="item.Icon" alt=""></el-col>
                  <el-col :span="15">
                    <h2 class="pb-2 text-pointer pt-2">{{item.IndustryName}}</h2>
                    <h4 class="text-li text-white">{{item.DescDetail}}</h4>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

        <el-carousel-item>
          <el-row :gutter="30">
            <el-col :span="8" class="mb-4" v-for="(item,index) in carouselArr.slice(12,18)" :key="index">
              <div class="bg-white bg-show p-4 overflow">
                <el-row :gutter="20">
                  <el-col :span="8" class="text-right"><img :src="item.Icon" alt=""></el-col>
                  <el-col :span="15">
                    <h2 class="pb-2 text-pointer pt-2">{{item.IndustryName}}</h2>
                    <h4 class="text-li text-white">{{item.DescDetail}}</h4>
                  </el-col>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-carousel-item>

      </el-carousel>
    </div>
    <div class="number-bg pb-4">
      <div class="tatle">
        <h1>产业资源频道</h1>
      </div>
      <div class="container pt-1">
        <ul class="number-ind">
          <li class="pt-4 pl-4 pb-4"><em class="number">300,000</em><span>+</span>
            <h6>企业资源</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">1,000</em><span>+</span>
            <h6>科技资源</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">100,000</em><span>+</span>
            <h6>人才资源</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">600,000</em><span>+</span>
            <h6>专利</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">10,000</em><span>+</span>
            <h6>论文期刊</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">30,000</em><span>+</span>
            <h6>教育资源</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">10,000</em><span>+</span>
            <h6>标准规范</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">300,000</em><span>+</span>
            <h6>科技项目</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">55,000</em><span>+</span>
            <h6>科技奖励</h6>
          </li>
          <li class="pt-4 pl-4 pb-4"><em class="number">620,000</em><span>+</span>
            <h6>投资机构</h6>
          </li>
          <!-- <li class="pt-4 pl-4 pb-4"><em class="number">620,000</em><span>+</span><h6>行业新闻</h6></li>
          <li class="pt-4 pl-4 pb-4"><em class="number">620,000</em><span>+</span><h6>政策法规</h6></li>
          <li class="pt-4 pl-4 pb-4"><em class="number">620,000</em><span>+</span><h6>产业知识库</h6></li> -->
        </ul>
      </div>
    </div>
    <div class="container pb-5">
      <el-row :gutter="60">
        <el-col :span="12">
          <el-row>
            <el-col :span="12">
              <div class="tatle">
                <h1 class="float-left">行业新闻</h1>
              </div>
            </el-col>
            <el-col :span="12" class="text-right pt-5">
              <a href="#" class="text-pointer mt-2" style="font-size: 16px;display: inline-block;">更多 ></a>
            </el-col>
          </el-row>
          <div class="ImgNewLi">
            <el-row :gutter="20" class="mb-3">
              <el-col :span="9">
                <img src="../img/newimg1.jpg" alt="" class="img-flou">
              </el-col>
              <el-col :span="15">
                <a href="#">中国一汽与大众汽车集团签署进口整车与零部件合作备忘录</a>
                <p class="text-li text-white pt-2">本网讯（特派记者 苑激刚）11月5日，在第三届中国国际进口博览会（进博会）汽车展区大众汽车集团展台，中国一汽车展区大众汽车集团展台...</p>
                <el-row class="mt-1">
                  <el-col :span="6">2020.11.05</el-col>
                  <el-col :span="10" class="text-pointer">汽车制造</el-col>
                  <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="mb-3">
              <el-col :span="9">
                <img src="../img/newimg1.jpg" alt="" class="img-flou">
              </el-col>
              <el-col :span="15">
                <a href="#">中国一汽与大众汽车集团签署进口整车与零部件合作备忘录</a>
                <p class="text-li text-white pt-2">本网讯（特派记者 苑激刚）11月5日，在第三届中国国际进口博览会（进博会）汽车展区大众汽车集团展台，中国一汽车展区大众汽车集团展台...</p>
                <el-row class="mt-1">
                  <el-col :span="6">2020.11.05</el-col>
                  <el-col :span="10" class="text-pointer">汽车制造</el-col>
                  <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
                </el-row>
              </el-col>
            </el-row>
            <el-row :gutter="20" class="mb-3">
              <el-col :span="9">
                <img src="../img/newimg1.jpg" alt="" class="img-flou">
              </el-col>
              <el-col :span="15">
                <a href="#">中国一汽与大众汽车集团签署进口整车与零部件合作备忘录</a>
                <p class="text-li text-white pt-2">本网讯（特派记者 苑激刚）11月5日，在第三届中国国际进口博览会（进博会）汽车展区大众汽车集团展台，中国一汽车展区大众汽车集团展台...</p>
                <el-row class="mt-1">
                  <el-col :span="6">2020.11.05</el-col>
                  <el-col :span="10" class="text-pointer">汽车制造</el-col>
                  <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
                </el-row>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="12">
          <el-row>
            <el-col :span="12">
              <div class="tatle">
                <h1 class="float-left">政策法规</h1>
              </div>
            </el-col>
            <el-col :span="12" class="text-right pt-5">
              <a href="#" class="text-pointer mt-2" style="font-size: 16px;display: inline-block;">更多 ></a>
            </el-col>
          </el-row>
          <div class="NewLi">
            <a href="#" class="text-whiteSm">中国一汽与大众汽车集团签署进口整车与零部件合作备署进口整车与零部件忘录</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
            <a href="#" class="text-whiteSm">四川省关于印发四川省支持新能源与智能汽车产业发展若干政策措施的通知</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
            <a href="#" class="text-whiteSm">国务院办公厅关于印发新能源汽车产业发展规划（2021—2035年）的通知</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
            <a href="#" class="text-whiteSm">中国一汽与大众汽车集团签署进口整车与零部件合作备署进口整车与零部件忘录</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
            <a href="#" class="text-whiteSm">四川省关于印发四川省支持新能源与智能汽车产业发展若干政策措施的通知</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
            <a href="#" class="text-whiteSm">国务院办公厅关于印发新能源汽车产业发展规划（2021—2035年）的通知</a>
            <el-row class="mt-2 mb-4">
              <el-col :span="6">2020.11.05</el-col>
              <el-col :span="10" class="text-pointer">汽车制造</el-col>
              <el-col :span="8" class="text-right text-info">来源：中国一汽</el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>

</template>

<script>
export default {
  name: "homeCenter",
  data () {
    return {
      carouselArr: [],
      value: "",
      activeName: 'one'
    }
  },
  created () {
    this.init();

  },
  methods: {
    init () {
      this.CYDH()
    },
    handleClick (tab, event) {
      // console.log(tab, event);
    },
    CYDH () {
      var that = this;
      $.get({
        url: that.$baseURI + "/swagger/IndIndustry/list",
        success: function (res) {
          if (res.rows.length > 0) {
            let data = res.rows;
            for (let i = 0; i < data.length; i++) {
              that.carouselArr.push({
                IndustryName: data[i].IndustryName,
                DescDetail: data[i].DescDetail,
                Icon: that.$baseURI + data[i].Icon
              })
            }
            //console.log(that.carouselArr);
          }
        }
      });
    }
  }
};
</script>
