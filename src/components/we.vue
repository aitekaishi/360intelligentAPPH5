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
			<img style="width: 304px;margin-left: 15vw;height: 49px;position: relative;top: 16px;" src="../assets/index/logo.png" alt="" />
			<ul style="list-style: none;display: inline-block;margin-left: 3vw;">
				<li class="index_1_2" @click="index" style="cursor: pointer;">首页</li>
				<li style="border-bottom: 2px solid #E7383E;width:64px;color:rgba(231,56,62,1);">关于我们</li>
				<li class="index_1_3" @click="changping" style="cursor: pointer">产品服务</li>
				<li class="index_1_4" @click="news" style="cursor: pointer">新闻资讯</li>
				<li class="index_1_5" @click="zaoshang" style="cursor: pointer">招商合作</li>
				<li class="index_1_6" @click="zhan" style="cursor: pointer">战略部署</li>
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
				<!--<img src="../assets/index/播放icon.png" style="position: relative;top: -50px;width:146px;
  height:50px;
  border:2px solid rgba(255,255,255,1);
  border-radius:8px;" />-->
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev swiper-button-white"></div>
			<!--左箭头-->
			<div class="swiper-button-next swiper-button-white"></div>
			<!--右箭头-->
		</div>
		<div @click="bofang" @mouseenter="fgfg" @mouseleave="tttt" style="width: 100px;margin: 0 auto;"><img :src="oooo1" style="width:100px;height:34px;border-radius:8px;position: absolute;top: 35vw;z-index: 1000;cursor: pointer;" /></div>
    
		<div class="we_1" style="background: #FAFAFA;">
			<div style="height: 50px;"></div>
			<div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;text-align: center;color: #333333;">企业简介</div>
			<div style="height: 50px;"></div>
			<p style="width: 900px;margin: 0 auto;text-indent: 2em;color: #656565;line-height: 27px;">
				湖南泽昌智能科技有限责任公司由湖南汇元资产管理有限公司、长沙泽昌商务咨询有限公司和深圳润合金融服务发展有限公司共同出资成立，实力雄厚。公 司总部坐落于星城长沙湘江河畔的万达总部国际大楼，环境优美。公司配备一支BAT背景的高端技术和管理团队，借助移动互联、大数据和云计算技术自主研发 的“360°智能科技”，是国内首款集信用卡账单延期、车务代办和信用卡办理于一体的综合型智能APP，只需一键托管，便可高效解决信用卡还款和车务烦恼。
			</p>
			<p style="width: 900px;margin: 0 auto;text-indent: 2em;color: #656565;line-height: 27px;">

				近年来，信用卡发卡量和汽车保有量剧增，信用卡分期还款和车务违章人数占比大。面对巨大的市场需求和发展前景，湖南泽昌智能科技有限责任公司积极 响应国家“十三五计划”提出的“转变经济增长方式、调整经济结构，大力倡导消费金融、鼓励金融创新”的号召，开发和运营的360度智能科技APP，有助于发展普 惠金融，推进社会信用体系建设。
			</p>
			<div style="height: 50px;"></div>
			<div style="width: 900px;margin: 0 auto;">
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
				<div style="width: 210px;box-sizing: border-box;margin: 5px;background: #B5B5B5;height: 120px;display: inline-block;"></div>
			</div>
			<div style="height: 60px;"></div>
		</div>
		<div class="we_11">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">企业文化</div>
	      <div style="height: 50px;"></div>
	    </div>
		<div class="we_2" style="width: 895px;margin: 0 auto;height: 580px;">
			<div style="position: relative;left: 240px;top: 80px;">
				<div style="font-size: 18px;">企业使命</div>
				<div style="height: 5px;"></div>
				<div style="font-size: 14px;color: #666666;">改善社会信用环境，提高全民信用质量</div>
			</div>
			<div style="position: relative;left: 470px;top: 155px;width: 185px;text-align: right;">
				<div style="font-size: 18px;">企业价值</div>
				<div style="height: 5px;"></div>
				<div style="font-size: 14px;color: #666666;">携手才能共进，互利才能共赢</div>
			</div>
			<div style="position: relative;left: 240px;top: 230px;">
				<div style="font-size: 18px;">经营理念</div>
				<div style="height: 5px;"></div>
				<div style="font-size: 14px;color: #666666;">科技融入生活，科技改变生活，科技服务生活</div>
			</div>
			<div style="position: relative;left: 470px;top: 310px;width: 185px;text-align: right;">
				<div style="font-size: 18px;">企业愿景</div>
				<div style="height: 5px;"></div>
				<div style="font-size: 14px;color: #666666;">人人享受智能科技带来的快感</div>
			</div>
			
	    </div>
	    <div style="height: 40px;"></div>
	    <div class="we_3" style="background: #FAFAFA;">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">资质荣耀</div>
	      <div style="height: 50px;"></div>
	      <div style="width: 1000px !important;margin: 0 auto;">
	      	<div class="swiper-container1" style="width:1100px;overflow: hidden;">
			<div class="swiper-wrapper" style="width:900px;">
				<div class="swiper-slide" style="width: 300px;"><figure><img src="../assets/we/安卓营业执照.png" style="width: 300px;height: 400px;"/><figcaption style="width: 300px;text-align: center;position: relative;left: 0;">国家版权局向湖南泽昌智能科技有限责任公司颁发Android计算机软件著作权登记证书</figcaption></figure></div>
				<div class="swiper-slide" style="width: 300px;"><figure><img src="../assets/we/工商营业执照.png" style="width: 300px;height: 400px;"/><figcaption style="width: 300px;text-align: center;position: relative;left: 0;">国家工商局向湖南泽昌智能科技有限责任公司颁发营业执照登记证书</figcaption></figure></div>
				<div class="swiper-slide" style="width: 300px;"><figure><img src="../assets/we/分润管理系统证书.png" style="width: 300px;height: 400px;"/><figcaption style="width: 300px;text-align: center;position: relative;left: 0;">国家版权局向湖南泽昌智能科技有限责任公司颁发分润管理系统证书</figcaption></figure></div>
				<div class="swiper-slide" style="width: 300px;"><figure><img src="../assets/we/iOS营业执照.png" style="width: 300px;height: 400px;"/><figcaption style="width: 300px;text-align: center;position: relative;left: 0;">国家工商局向湖南泽昌智能科技有限责任公司颁发IOS营业执照登记证书</figcaption></figure></div>
				<div class="swiper-slide" style="width: 300px;"><figure><img src="../assets/we/保险.png" style="width: 300px;height: 400px;"/><figcaption style="width: 300px;text-align: center;position: relative;left: 0;">阳光保险向湖南泽昌智能科技有限责任公司颁发战略合作伙伴证书</figcaption></figure></div>
				<div class="swiper-slide" style="width: 300px;position: relative;left: 60px;top: 150px;"><figure><img src="../assets/we/商业奖.png" style="width: 150px;"/><figcaption style="width: 150px;text-align: center;position: relative;left: 0;">中国互联网金融行业协会向湖南泽昌智能科技有限责任公司颁发最佳商业模式奖</figcaption></figure>
					
				</div>
				<div class="swiper-slide" style="width: 300px;position: relative;left: 40px;top: 150px;"><figure><img src="../assets/we/会员单位.png" style="width: 150px;"/><figcaption style="width: 150px;text-align: center;position: relative;left: 0;">中国互联网金融行业协会会员单位</figcaption></figure></div>
				
			</div>
			<div class="swiper-pagination"></div>
			<div class="swiper-button-prev xixi1"></div>
			<!--左箭头-->
			<div class="swiper-button-next xixi2"></div>
			<!--右箭头-->
		</div>
	      </div>
	    </div>
	    <div class="we_4" style="text-align: center">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;">管理体系</div>
      <div style="height: 50px;"></div>
      <div style="width: 900px;text-align: center;margin: 0 auto;">
      	<img src="../assets/we/管理体系1.png" style="width: 900px;"/>
      </div>
      <div style="height: 50px;"></div>
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
	import yyy1 from "../assets/index/播放icon.png"
  import yyy2 from "../assets/index/播放icon拷贝.png"
	import Swiper from 'swiper';
	export default {
		data () {
		    return {
		      oooo1:yyy1,
		    }
		  },
		name: "we",
		methods: {
			index(){
		      this.$router.push('/')
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
		    zhan(){
		      this.$router.push('/tactic')
		    },
		    appzhuangqu(){
		      this.$router.push('/app')
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
	    var mySwiper1 = new Swiper('.swiper-container1', {
      autoplay: true,
      slidesPerView : 3,
      centeredSlides : true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop : true,
    })
	  },
	}
</script>

<style scoped>
	@import url("main.css");
	.we_2{
		background-image: url(../assets/we/理念拷贝.png);
		background-size: cover;
	}
	figcaption{
		font-size: 12px;
	}
	.swiper-container1 .swiper-slide{
		position: relative;
		left: -40px;
	}
	.xixi1,.xixi2{
		position: relative;top: -270px;
		color: red;
	}
	.xixi1{
		left: 0;
	}
	.xixi2{
		right: 60px;
		float: right;
		top: -310px;
	}
</style>