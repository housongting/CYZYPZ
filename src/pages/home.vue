<template>
  <div>

    <header class="homePage">
      <div class="container">
        <el-row>
          <el-col :span="5" class="pt-3"><img src="../img/logo.png" alt=""></el-col>
          <el-col :span="16">
            <ul class="menu">
              <li>
                <a class="hover" href="#/home">首页</a>
              </li>
              <li><a href="javascript:void(0)" class="childlength">产业资源配置导向<i class="el-icon-arrow-down ml-2"></i>
                  <dl class="childrenNav">
                    <dd>
                      <a href="#/national">全国产业资源配置导向</a>
                    </dd>
                    <dd>
                      <a href="#/ningbo">宁波市产业资源配置导向</a>
                    </dd>
                  </dl>
                </a></li>
              <li><a href="javascript:void(0)" class="childlength">产业资源频道<i class="el-icon-arrow-down ml-2"></i>
                  <dl class="more childrenNav">
                    <!-- <dd><a href="#/home/companiesList">企业库</a></dd>
                    <dd><a href="#/home/companiesAnalysis">人才库</a></dd> -->
                    <dd><a href="#/home/companiesList">企业名单</a></dd>
                    <dd><a href="#/home/companiesAnalysis">企业分析</a></dd>
                    <dd><a href="#/home/companiesPortrait">企业画像</a></dd>
                    <dd><a href="javascript:void(0)">教育资源</a></dd>
                    <dd><a href="javascript:void(0)">投资机构</a></dd>
                    <dd><a href="javascript:void(0)">科技资源</a></dd>
                    <dd><a href="javascript:void(0)">产业知识库</a></dd>
                    <dd><a href="javascript:void(0)">专利库</a></dd>
                    <dd><a href="javascript:void(0)">论文期刊</a></dd>
                    <dd><a href="javascript:void(0)">行业新闻</a></dd>
                    <dd><a href="javascript:void(0)">政策法规</a></dd>
                    <dd><a href="javascript:void(0)">标准规范</a></dd>
                  </dl>
                </a></li>
              <li><a href="javascript:void(0)">产业发展对比分析</a></li>
              <li><a href="javascript:void(0)">产业数据大屏</a></li>
            </ul>
          </el-col>
          <el-col :span="3" class="text-right pt-3">
            <el-button type="primary" size="medium" icon="el-icon-user">会员登录</el-button>
          </el-col>
        </el-row>
      </div>
    </header>

    <keep-alive>
      <router-view />
    </keep-alive>

    <div class="link-bg homePage">
      <div class="container">
        <el-row>
          <el-col :span="4">
            <div class="tatle">
              <h1>友情链接</h1>
            </div>
          </el-col>
          <el-col :span="20">
            <el-row :gutter="30">
              <el-col :span="6">
                <el-select v-model="value" placeholder="--选择一个产业--">
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="value" placeholder="--行业协会网站--">
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="value" placeholder="--政府网站--">
                </el-select>
              </el-col>
              <el-col :span="6">
                <el-select v-model="value" placeholder="--商业网站--">
                </el-select>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="Right-div homePage">
      <el-badge :value="9" class="item">
        <div class="Collection">
          <i class="el-icon-star-on"></i>
          <div class="divC">我的收藏</div>
        </div>
      </el-badge>
      <el-badge :value="9" class="item">
        <div class="Resources">
          <i class="el-icon-s-help"></i>
          <div class="divC">资源预警</div>
        </div>
      </el-badge>
      <div class="Help">
        <i class="el-icon-question"></i>
        <div class="divC">在线帮助</div>
      </div>
      <el-backtop :right="30" :bottom="100" class="baktop"></el-backtop>
    </div>
    <footer class="pb-4 homePage">
      <div class="container">
        <el-row>
          <el-col :span="4">
            <div class="tatle">
              <h1>联系方式</h1>
            </div>
          </el-col>
          <el-col :span="9" style="padding-top:34px">
            地址：浙江省宁波市海曙区中山西路11号海曙大厦13F<br>
            热线：400-884-0606<br>
            传真：0574-83866112
          </el-col>
          <el-col :span="7" style="padding-top:34px"><br>
            官网：http://www.zjyiqiao.com<br>
            邮箱：service@zjyiqiao.com
          </el-col>
          <el-col :span="4" style="padding-top:34px" class="text-right">
            <img src="../img/yqlogin.png" alt="">
          </el-col>
        </el-row>
      </div>
    </footer>
    <div class="compy p-4 text-center homePage">
      Copyright © 2020 浙江易桥软件开发有限公司 保留所有权利 浙ICP备 XXXXXXX号
    </div>

  </div>
</template>

<script>
export default {
  name: "home",
  data () {
    return {
      value: ""
    }
  },
  mounted () {
    //点击菜单
    $('.menu>li>a').click(function (e) {
      if ($(e.currentTarget).hasClass('childlength')) {
      } else {
        $(e.currentTarget).addClass('hover').parent().siblings().children().removeClass('hover');
        $('.menu .childrenNav>dd>a').removeClass('hover');
      }
    })
    $('.menu .childrenNav>dd>a').click(function (e) {
      $('.menu>li>a').removeClass('hover');
      $('.menu .childrenNav>dd>a').removeClass('hover');
      $(e.currentTarget).addClass('hover').siblings().removeClass('hover');
      $(e.currentTarget).parents('.childlength').addClass('hover');
    })
  }
}
</script>

<style>
.homePage .el-tabs__item.is-active {
  background: #fff;
  position: relative;
  color: #409eff;
}
.homePage .el-tabs__item.is-active::before {
  position: absolute;
  content: "";
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid #fff;
  top: 36px;
  left: 50%;
  margin-left: -4px;
}
.homePage .el-tabs__item {
  color: #fff;
  text-align: center;
}
.homePage .el-tabs--card > .el-tabs__header,
.homePage .el-tabs--card > .el-tabs__header .el-tabs__nav,
.homePage .el-tabs--card > .el-tabs__header .el-tabs__item {
  border: none;
}
.homePage .el-tabs__item {
  height: 36px;
  line-height: 36px;
  border-radius: 5px;
}
.homePage .el-tabs__nav-scroll {
  padding-bottom: 6px;
}
.homePage .el-input-group input {
  height: 52px;
  font-size: 15px;
}
.homePage .el-input-group__append,
.homePage .el-input-group__prepend {
  background: #409eff;
  color: #fff;
  font-size: 16px;
}
.homePage .el-input-group__append,
.homePage .el-input-group__prepend {
  border: none;
}
.homePage .el-input__inner {
  border-color: #fff;
}
.homePage .banner {
  background: url(../img/banner.png) no-repeat center;
  height: 550px;
  width: 100%;
  padding-top: 180px;
  overflow: hidden;
  clear: both;
}
.homePage .banner .tab {
  width: 840px;
  margin: 0 auto;
  color: #fff;
}
.homePage .banner h1 {
  font-size: 38px;
  color: #fff;
  padding-bottom: 70px;
}
.homePage .hot-a a {
  padding: 0 10px;
}
.homePage .hot-a a:hover {
  color: #409eff;
}
.homePage .el-carousel__button {
  height: 5px;
  border-radius: 10px;
}
.homePage .el-carousel__indicators--outside button {
  background-color: #409eff;
}
.homePage .number-bg {
  background: url(../img/no-bg.jpg);
  overflow: hidden;
  margin-top: 50px;
  color: #fff;
}
.homePage .number-bg .tatle h1::before {
  position: absolute;
  content: "";
  left: 50%;
  background: rgba(255, 255, 255, 0.2);
  height: 12px;
  width: 80px;
  top: 28px;
  margin-left: -40px;
}
.homePage .number-ind li {
  float: left;
  width: 20%;
  margin-bottom: 15px;
  text-align: center;
}
.homePage .number-ind li em {
  font-size: 38px;
  font-weight: bold;
  display: inline-block;
}
.homePage .number-ind li span {
  display: inline-block;
  padding-left: 10px;
}
.homePage .number-ind li h6 {
  clear: both;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.7);
  position: relative;
  padding-top: 20px;
}
.homePage .number-ind li h6::before {
  position: absolute;
  content: "";
  background: rgba(255, 255, 255, 0.6);
  width: 35px;
  height: 2px;
  left: 50%;
  top: 12px;
  margin-left: -18px;
}
.homePage .ImgNewLi a {
  font-size: 17px;
  display: block;
  line-height: 26px;
}
.homePage .ImgNewLi a:hover {
  color: #409eff;
}
.homePage .ImgNewLi p {
  color: #777;
}
.homePage .ImgNewLi img {
  height: 130px;
  border-radius: 5px;
}
.homePage .NewLi a {
  font-size: 17px;
  display: block;
}
.homePage .NewLi a:hover {
  color: #409eff !important;
}
.homePage .menu .childrenNav > dd > a.hover {
  color: #fff !important;
  background: #409eff !important;
}
</style>