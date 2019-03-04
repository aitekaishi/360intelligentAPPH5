<template>
  <div>
<div class="model">
	<div @click="xiaoshi" style="font-size: 30px;color: #999999;position: relative;top: 40px;float: right;right: 15px;cursor: pointer;z-index: 1002;">&times;</div>
	<video width="1050" id="name1" height="" controls="controls" style="z-index: 10000;overflow: visible;">
                                <source src="http://zechang-360intelligent-default.oss-cn-shenzhen.aliyuncs.com/360%E6%99%BA%E8%83%BD%E5%AE%8C%E6%95%B4%E7%89%88.mp4"
                                        type="video/mp4"></source>
                                <source src="http://zechang-360intelligent-default.oss-cn-shenzhen.aliyuncs.com/360%E6%99%BA%E8%83%BD%E5%AE%8C%E6%95%B4%E7%89%88.mp4"
                                        type="video/ogg"></source>
                                <source src="http://zechang-360intelligent-default.oss-cn-shenzhen.aliyuncs.com/360%E6%99%BA%E8%83%BD%E5%AE%8C%E6%95%B4%E7%89%88.mp4"
                                        type="video/webm"></source>
                                <object width="" height="" type="application/x-shockwave-flash" data="myvideo.swf">
                                    <param name="movie" value="myvideo.swf"/>
                                    <param name="flashvars" value="autostart=true&amp;file=myvideo.swf"/>
                                </object>
                                当前浏览器不支持 video直接播放，点击这里下载视频： <a href="myvideo.webm">下载视频</a>
                            </video>
</div>
    <div class="index_1">
      <img style="width: 304px;margin-left: 15vw;position: relative;top: 16px;" src="../assets/index/logo.png" alt="" />
      <ul style="list-style: none;display: inline-block;margin-left: 3vw;">
        <li class="index_1_2" @click="index" style="cursor: pointer;">首页</li>
        <li class="index_1_3" @click="we" style="cursor: pointer">关于我们</li>
        <li class="index_1_4" @click="changping" style="cursor: pointer">产品服务</li>
        <li class="index_1_5" @click="news" style="cursor: pointer">新闻资讯</li>
        <li class="index_1_6" @click="zaoshang" style="cursor: pointer">招商合作</li>
        <li style="border-bottom: 2px solid #E7383E;color:rgba(231,56,62,1);">战略部署</li>
        <li class="index_1_7" @click="appzhuangqu" style="cursor: pointer">APP专区</li>
        <li style="width:200px;
height:14px;
font-size:14px;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(255,0,0,1);">24小时热线：400-8983-360</li>
      </ul>
    </div>

    <div class="swiper-container" style="width:100vw;">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="../assets/index/banner.png" /></div>
        <div class="swiper-slide"><img src="../assets/index/111.png" /></div>
        <div class="swiper-slide"><img src="../assets/index/222.png" /></div>
        <div class="swiper-slide"><img src="../assets/index/per.png" /></div>
        <div class="swiper-slide"><img src="../assets/index/seft.png" /></div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div><!--右箭头-->
    </div>
    <div @click="bofang" @mouseenter="fgfg" @mouseleave="tttt" style="width: 100px;margin: 0 auto;"><img :src="oooo1" style="width:100px;height:34px;border-radius:8px;position: absolute;top: 35vw;z-index: 1000;cursor: pointer;" /></div>
    <div class="index_3" style="text-align: center">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">战略布局</div>
      <div style="height: 50px;"></div>
      <div style="width: 1100px;margin: 0 auto;"><img style="width: 1100px;" src="../assets/index/zlbs.png"/></div>
      <div style="height: 50px"></div>
      <div>
				<p style="font-size: 30px;font-weight: 900;width: 1000px;margin: 0 auto;">全国各省、市独家合伙人一览表</p>
				<table>
					<tr>
						<th>地区</th>
						<th>级别</th>
						<th>运营中心地址</th>
						<th>负责人</th>
						<th>联系电话</th>
					</tr>
					<tr>
						<td>湖南</td>
						<td>省级</td>
						<td>长沙市万达广场A座</td>
						<td>吕总</td>
						<td>136****1234</td>
					</tr>
					<tr>
						<td>湖南娄底</td>
						<td>市级</td>
						<td>娄底市汇天国际13楼</td>
						<td>廖总</td>
						<td>156****1999</td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td>&nbsp; </td>
						<td> </td>
						<td> </td>
						<td> </td>
						<td> </td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
					<tr>
						<td>&nbsp;</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					</tr>
				</table>
			</div>
			<div style="height: 50px"></div>
    </div>
    <div class="index_8" style=";background: #666666">
      <div style="height: 50px;"></div>
      <div style="width: 900px;margin: 0 auto">
        <div style="display: inline-block;">
          <div style="font-size: 18px;color: #FFFFFF">栏目导航</div>
          <div style="height: 20px;"></div>
          <div style="color: #E3E3E3">公司简介</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">企业文化</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">资质认证</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">团队风采</div>
        </div>
        <div style="display: inline-block;margin-left: 40px">
          <div style="font-size: 18px;color: #FFFFFF">联系我们</div>
          <div style="height: 20px;"></div>
          <div style="color: #E3E3E3">招商电话：</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">联系QQ：</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">邮箱：</div>
          <div style="height: 10px;"></div>
          <div style="color: #E3E3E3">地址：湖南省长沙市天心区汇金国际金座604</div>
        </div>
        <div style="display: inline-block;float: right;text-align: center">
          <img src="../assets/index/apperweima.png" alt="" style="width: 120px">
          <div style="height: 12px;"></div> 
          <div style="font-size: 18px;color: #FFFFFF">下载APP</div>
        </div>
        <div style="display: inline-block;float: right;text-align: center;position: relative;left: -30px;">
          <img src="../assets/index/gongzhonghao.png" alt="" style="width: 120px">
          <div style="height: 12px;"></div>
          <div style="font-size: 18px;color: #FFFFFF">关注公众号</div>
        </div>

      </div>
      <div style="height: 80px;"></div>
			<div style="width: 100vw;margin: 0 auto;text-align: center;"><div style="width: 400px;margin: 0 auto;color: #F3F3F3;">友情链接：<a href="https://pay.feifanzhichuang.com/wxportal/creditCard/bankCards.do?org_id=001800060000" style="color: #F3F3F3;">信用卡申请</a></div></div>
			<div style="height: 10px;"></div>
			<div style="width: 100vw;margin: 0 auto;text-align: center;"><div style="width: 800px;margin: 0 auto;color: #F3F3F3;">Copyright © 2018 版权所有 <a href="http://www.miitbeian.gov.cn" style="color: #F3F3F3;">湘ICP备17023546号-1</a></div></div>
			<div style="height: 40px;"></div>
    </div>
  </div>
</template>

<script>
	import Swiper from 'swiper';
  import man1 from "../assets/index/智能还款选定.png"
  import man11 from "../assets/index/智能还款未选定.png"
  import man2 from "../assets/index/快捷支付选定.png"
  import man22 from "../assets/index/快捷支付未选定.png"
  import man3 from "../assets/index/违章代缴选定.png"
  import man33 from "../assets/index/违章代缴未选定.png"
  import man4 from "../assets/index/在线办卡选定.png"
  import man44 from "../assets/index/在线办卡未选定.png"
  import women1 from "../assets/index/产品功能-1.png"
  import women11 from "../assets/index/产品功能-2.png"
  import women2 from "../assets/index/anquanbaozhang-1.png"
  import women22 from "../assets/index/anquanbaozhang-2.png"
  import women3 from "../assets/index/fuwufeiyong-1.png"
  import women33 from "../assets/index/fuwufeiyong-2.png"
  import women4 from "../assets/index/gongsishili-1.png"
  import women44 from "../assets/index/gongsishili-2.png"
  import a11 from "../assets/index/智能还款未选定.png"
  import a1 from "../assets/index/智能还款选定.png"
  import b11 from "../assets/index/快速提额未选定.png"
  import b1 from "../assets/index/快速提额选定.png"
  import c11 from "../assets/index/账单管理未选定.png"
  import c1 from "../assets/index/账单管理选定.png"
  import d11 from "../assets/index/美化账单未选定.png"
  import d1 from "../assets/index/美化账单选定.png"
  import e11 from "../assets/index/快捷支付未选定.png"
  import e1 from "../assets/index/快捷支付选定.png"
  import f11 from "../assets/index/在线办卡未选定.png"
  import f1 from "../assets/index/在线办卡选定.png"
  import g11 from "../assets/index/违章查询未选定.png"
  import g1 from "../assets/index/违章查询选定.png"
  import h11 from "../assets/index/违章代缴未选定.png"
  import h1 from "../assets/index/违章代缴选定.png"
  import i11 from "../assets/index/预约年检未选定.png"
  import i1 from "../assets/index/预约年检选定.png"
  import j11 from "../assets/index/提交信息未选定.png"
  import j1 from "../assets/index/提交信息-选定.png"
  import yyy1 from "../assets/index/播放icon.png"
  import yyy2 from "../assets/index/播放icon拷贝.png"
  
export default {
  data () {
    return {
      liu1:man11,
      liu2:man22,
      liu3:man33,
      liu4:man44,
      pan1:women1,
      pan2:women2,
      pan3:women3,
      pan4:women4,
      index1:a11,
      index2:b11,
      index3:c11,
      index4:d11,
      index5:e11,
      index6:f11,
      index7:g11,
      index8:h11,
      index9:i11,
      tijiao:j11,
      name:'',
      shouji:'',
      weixing:'',
      connent:'',
      oooo1:yyy1,
    }
  },
  mounted(){
     var mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      pagination: {
        el: '.swiper-pagination',
        bulletActiveClass: 'my-bullet-active',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop : true,
    })       
  },
  updated(){
    let _this = this;
    if (_this.shouji.length == 12) {
      let e = _this.shouji
      _this.shouji = e.substr(0,(e.length-1))
    }
  },
  created() {
    $('.index_4_1').addClass('baishe')
  },
  methods:{
    we(){

      this.$router.push('/we')
    },
    changping(){
      this.$router.push('/product')
    },
    news(){
      this.$router.push('/news')
    },
    zaoshang(){
      this.$router.push('/business')
    },
    index(){
      this.$router.push('/')
    },
    appzhuangqu(){
      this.$router.push('/app')
    },
    ti(){
      let _this = this;
      _this.tijiao = j1;
    },
    tia(){
      let _this = this;
      _this.tijiao = j11;
    },
    xixia(){
      let _this = this;
      _this.liu1 = man11
      _this.liu2 = man22
      _this.liu3 = man33
      _this.liu4 = man44
      $('.index_2_2_1_1').removeClass('back')
      $('.index_2_2_1_2').removeClass('back')
      $('.index_2_2_1_3').removeClass('back')
      $('.index_2_2_1_4').removeClass('back')
      $('.index_2_2_1_1').attr("style","position: relative;left: 0;")
      $('.index_2_2_1_2').attr("style","position: relative;left: 0;")
      $('.index_2_2_1_3').attr("style","position: relative;left: 0;")
      $('.index_2_2_1_4').attr("style","position: relative;left: 0;")
    },
    haha1(){
      let _this = this;
      _this.liu1 = man1
      _this.liu2 = man22
      _this.liu3 = man33
      _this.liu4 = man44
      $('.index_2_2_1_1').addClass('back')
      $('.index_2_2_1_1').attr("style","position: relative;left: -10px;")
      $('.index_2_2_1_2').removeClass('back')
      $('.index_2_2_1_3').removeClass('back')
      $('.index_2_2_1_4').removeClass('back')
    },
    haha2(){
      let _this = this;
      _this.liu1 = man11
      _this.liu2 = man2
      _this.liu3 = man33
      _this.liu4 = man44
      $('.index_2_2_1_2').addClass('back')
      $('.index_2_2_1_2').attr("style","position: relative;left: -10px;")
      $('.index_2_2_1_1').removeClass('back')
      $('.index_2_2_1_3').removeClass('back')
      $('.index_2_2_1_4').removeClass('back')
    },
    haha3(){
      let _this = this;
      _this.liu1 = man11
      _this.liu2 = man22
      _this.liu3 = man3
      _this.liu4 = man44
      $('.index_2_2_1_3').addClass('back')
      $('.index_2_2_1_3').attr("style","position: relative;left: -10px;")
      $('.index_2_2_1_2').removeClass('back')
      $('.index_2_2_1_1').removeClass('back')
      $('.index_2_2_1_4').removeClass('back')
    },
    haha4(){
      let _this = this;
      _this.liu1 = man11
      _this.liu2 = man22
      _this.liu3 = man33
      _this.liu4 = man4
      $('.index_2_2_1_4').addClass('back')
      $('.index_2_2_1_4').attr("style","position: relative;left: -10px;")
      $('.index_2_2_1_2').removeClass('back')
      $('.index_2_2_1_3').removeClass('back')
      $('.index_2_2_1_1').removeClass('back')
    },
    haha5(){
      let _this = this;
      _this.pan1 = women11
      _this.pan2 = women2
      _this.pan3 = women3
      _this.pan4 = women4
      $('.index_3_1_1_1').addClass('back1')
      $('.index_3_1_1_2').removeClass('back1')
      $('.index_3_1_1_3').removeClass('back1')
      $('.index_3_1_1_4').removeClass('back1')
      $('.name1').animate({opacity:'0.7'})
      $('.name2').animate({opacity:'0'})
      $('.name3').animate({opacity:'0'})
      $('.name4').animate({opacity:'0'})
      $('.index_3_1_2_1').attr("style","height: 10px;background: red;")
      $('.index_3_1_2_2').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_3').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_4').attr("style","height: 10px;background: #FFFFFF;")
    },
    haha6(){
      let _this = this;
      _this.pan1 = women1
      _this.pan2 = women22
      _this.pan3 = women3
      _this.pan4 = women4
      $('.index_3_1_1_2').addClass('back1')
      $('.index_3_1_1_1').removeClass('back1')
      $('.index_3_1_1_3').removeClass('back1')
      $('.index_3_1_1_4').removeClass('back1')
      $('.name2').animate({opacity:'0.7'})
      $('.name1').animate({opacity:'0'})
      $('.name3').animate({opacity:'0'})
      $('.name4').animate({opacity:'0'})
      $('.index_3_1_2_2').attr("style","height: 10px;background: red;")
      $('.index_3_1_2_1').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_3').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_4').attr("style","height: 10px;background: #FFFFFF;")
    },
    haha7(){
      let _this = this;
      _this.pan1 = women1
      _this.pan2 = women2
      _this.pan3 = women33
      _this.pan4 = women4
      $('.index_3_1_1_3').addClass('back1')
      $('.index_3_1_1_2').removeClass('back1')
      $('.index_3_1_1_1').removeClass('back1')
      $('.index_3_1_1_4').removeClass('back1')
      $('.name3').animate({opacity:'0.7'})
      $('.name2').animate({opacity:'0'})
      $('.name1').animate({opacity:'0'})
      $('.name4').animate({opacity:'0'})
      $('.index_3_1_2_3').attr("style","height: 10px;background: red;")
      $('.index_3_1_2_2').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_1').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_4').attr("style","height: 10px;background: #FFFFFF;")
    },
    haha8(){
      let _this = this;
      _this.pan1 = women1
      _this.pan2 = women2
      _this.pan3 = women3
      _this.pan4 = women44
      $('.index_3_1_1_4').addClass('back1')
      $('.index_3_1_1_2').removeClass('back1')
      $('.index_3_1_1_3').removeClass('back1')
      $('.index_3_1_1_1').removeClass('back1')
      $('.name4').animate({opacity:'0.7'})
      $('.name2').animate({opacity:'0'})
      $('.name3').animate({opacity:'0'})
      $('.name1').animate({opacity:'0'})
      $('.index_3_1_2_4').attr("style","height: 10px;background: red;")
      $('.index_3_1_2_2').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_3').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_1').attr("style","height: 10px;background: #FFFFFF;")
    },
    xixi(){
      let _this = this
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan1(){
      let _this = this
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a1;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan2(){
      let _this = this
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b1;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan3(){
      let _this = this
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c1;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan4(){
      let _this = this
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d1;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan5(){
      let _this = this
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e1;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan6(){
      let _this = this
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f1;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan7(){
      let _this = this
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g1;
      _this.index8 = h11;
      _this.index9 = i11;
    },
    liupan8(){
      let _this = this
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h1;
      _this.index9 = i11;
    },
    liupan9(){
      let _this = this
      $('#pan9').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FAFAFA;position: relative;top: -10px;');
      $('#pan2').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan3').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan4').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan5').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan6').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan7').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan8').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      $('#pan1').attr("style",'width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;');
      _this.index1 = a11;
      _this.index2 = b11;
      _this.index3 = c11;
      _this.index4 = d11;
      _this.index5 = e11;
      _this.index6 = f11;
      _this.index7 = g11;
      _this.index8 = h11;
      _this.index9 = i1;
    },
    liupan10(){
      $('#liupan10').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan11(){
      $('#liupan11').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan12(){
      $('#liupan12').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan13(){
      $('#liupan13').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan14(){
      $('#liupan14').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan15(){
      $('#liupan15').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan16(){
      $('#liupan16').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan17(){
      $('#liupan17').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan18(){
      $('#liupan18').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan19(){
      $('#liupan19').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan20(){
      $('#liupan20').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
      $('#liupan21').attr("style",'width: 220px;');
    },
    liupan21(){
      $('#liupan21').attr("style",'width: 220px;box-shadow: 1px 1px 10px #000000;position: relative;top: -10px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
    },
    xixi1(){
      $('#liupan21').attr("style",'width: 220px;');
      $('#liupan11').attr("style",'width: 220px;');
      $('#liupan12').attr("style",'width: 220px;');
      $('#liupan13').attr("style",'width: 220px;');
      $('#liupan14').attr("style",'width: 220px;');
      $('#liupan15').attr("style",'width: 220px;');
      $('#liupan16').attr("style",'width: 220px;');
      $('#liupan17').attr("style",'width: 220px;');
      $('#liupan18').attr("style",'width: 220px;');
      $('#liupan19').attr("style",'width: 220px;');
      $('#liupan20').attr("style",'width: 220px;');
      $('#liupan10').attr("style",'width: 220px;');
    },
    tib(){
      let _this = this;
      console.log(_this.name+_this.shouji+_this.weixing)
    },
    xixiaa(){
    	$('.name2').animate({opacity:'0'},2)
      $('.name1').animate({opacity:'0'},2)
      $('.name3').animate({opacity:'0'},2)
      $('.name4').animate({opacity:'0'},2)
      $('.index_3_1_1_2').removeClass('back1')
      $('.index_3_1_1_1').removeClass('back1')
      $('.index_3_1_1_3').removeClass('back1')
      $('.index_3_1_1_4').removeClass('back1')
      $('.index_3_1_2_1').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_2').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_3').attr("style","height: 10px;background: #FFFFFF;")
      $('.index_3_1_2_4').attr("style","height: 10px;background: #FFFFFF;")
    },
    ww(index){
    	var name1 = '.news_1_'+index
			$(name1).attr("style",'background: #FAFAFA;width: 900px;margin: 40px;padding-left: 40px;')
    },
    xixiaaa(){
    	$(".news_1_1").attr("style",'width: 900px;margin: 40px;padding-left: 40px;')
    	$(".news_1_2").attr("style",'width: 900px;margin: 40px;padding-left: 40px;')
    },
    qq(index){
    	this.$router.push('/new')
    },
    fgfg(){
    	let _this = this
    	_this.oooo1 = yyy2
    	document.getElementById("name1").muted = false
    },
    tttt(){
    	let _this = this
    	_this.oooo1 = yyy1
    },
    /*uuuu(){
    	document.getElementById("name1").muted = true
    },*/
    bofang(){
    	$(".model").attr('style','width: 1050px;height: 500px;margin: 0 auto;position: absolute;z-index: 1001;left:-moz-calc(50% - 525px);left:-webkit-calc(50% - 525px);left: calc(50% - 525px);top:-moz-calc(50% - 250px);top:-webkit-calc(50% - 250px);top: calc(50% - 250px);background: rgba(255,255,255,0);display: block;')
    	document.getElementById("name1").autoplay = true
    },
    xiaoshi(){
    	$(".model").attr('style','width: 1050px;height: 500px;margin: 0 auto;position: absolute;z-index: 1001;left:-moz-calc(50% - 525px);left:-webkit-calc(50% - 525px);left: calc(50% - 525px);top:-moz-calc(50% - 250px);top:-webkit-calc(50% - 250px);top: calc(50% - 250px);background: rgba(255,255,255,0);display: none;')
    	document.getElementById("name1").muted = true
    	document.getElementById("name1").autoplay = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import url("main.css");
  .index_2{
    width: 100vw;
  }
  .index_2_1{
    width:120px;
    height:29px;
    font-size:30px;
    font-family:MicrosoftYaHei;
    font-weight:400;
    color:rgba(48,48,48,1);
    position: relative;
    width: 100vw;
    top: 30px;
    text-align: center;

  }
  
  .index_2_2_1_1, .index_2_2_1_2, .index_2_2_1_3, .index_2_2_1_4{
    width:500px;
    height:90px;
    border-radius:4px;
    cursor: pointer;
  }
  .zhinenghuankuang1{
    width:50px;
    height:50px;
    position: relative;
    top: 20px;
    left: 40px;
  }
  .back{
    background: #FAFAFA;
  }
  .index_3{
    width: 100vw;
  }
  .index_4,.index_6{
    width: 100vw;
    background:url("../assets/index/更多功能bg.png");
    background-size: cover;
  }
  .index_3_1_1,.index_3_1_2,.index_3_1_3,.index_3_1_4{
    display: inline-block;
    cursor: pointer;
  }
  .back1{
    color: #FF0000;
  }
  .w{
    height: 90px !important;
  }
  .baishe{
    background: #FFFFFF;
  }
  .huishe{
    background: #FAFAFA;
  }
  table{
  	width: 1000px;
  	margin: 0 auto;
					}
					td,th,table{
						border: none;
					}
					th,td{
						padding: 10px;
					}
					th{
						font-size: 30px;
						font-weight: 900;
						color: #FFF;
						background: #4F81BD;
					}
					tr:nth-of-type(even){
						background: #D0D8E8;
					}
					tr:nth-of-type(odd){
						background: #E9EDF4;
					}
					td{
						font-size: 30px;
					}
					th:nth-of-type(1){
						width: 170px;
					}
					th:nth-of-type(2){
						width: 80px;
					}
					th:nth-of-type(3){
						width: 400px;
					}
					th:nth-of-type(4){
						width: 130px;
					}
					th:nth-of-type(5){
						width: 200px;
					}
</style>
