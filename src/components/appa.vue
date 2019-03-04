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
				<li class="index_1_3" @click="we" style="cursor: pointer;">关于我们</li>
				<li class="index_1_4" @click="changping" style="cursor: pointer;">产品服务</li>
				<li class="index_1_5" @click="news" style="cursor: pointer">新闻资讯</li>
				<li class="index_1_6" @click="zaoshang" style="cursor: pointer;">招商合作</li>
				<li class="index_1_7" @click="zhan" style="cursor: pointer">战略部署</li>
				<li style="border-bottom: 2px solid #E7383E;width:64px;color:rgba(231,56,62,1);">APP专区</li>
				<li style="width:200px;
height:14px;
font-size:14px;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(255,0,0,1);">24小时热线：400-8983-360</li>
			</ul>
		</div>

		<div><img src="../assets/app/图层3.png" style="width: 100vw;"/></div>
		<div @click="bofang" @mouseenter="fgfg" @mouseleave="tttt" style="width: 100px;margin: 0 auto;"><img :src="oooo1" style="width:100px;height:34px;border-radius:8px;position: absolute;top: 35vw;z-index: 1000;cursor: pointer;" /></div>
    
		<div class="app_1" style="">
			<div style="height: 50px;"></div>
			<div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;text-align: center;color: #4C4545;">智能信用卡生活，我们能做的更好！</div>
			<div style="height: 50px;"></div>
			<div style="width: 900px;margin: 0 auto;text-align: center;"><img src="../assets/app/介绍.png"/>
			<div style="text-align: center;color: #999999;">
                            360度智能科技是一款综合性的智能科技APP，拥有信用卡代还、车务、信用卡办理三大业务功能。它借助
移动互联、大数据和云计算技术实现各大业务功能的匹配和智能化。
                        </div></div>
                        <div style="height: 20px;"></div>
		</div>
		<div class="app_2" style="text-align: center;width: 100vw;margin: 0 auto;background: #FAFAFA;">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">APP下载</div>
      <div style="height: 50px;"></div>
      <div style="width: 700px;margin: 0 auto;">
      	<div style="width: 200px;text-align: center;display: inline-block;height: 200px;"><img src="../assets/app/二维码.png" style="width: 200px;"/><div style="font-size: 14px;color: #666666;position: relative;top: -40px;">（安卓/ios系统通用）</div></div>
      	<div style="width: 380px;height: 200px;display: inline-block;margin-left: 100px;position: relative;top: -90px;">
      		<div style="color: #666666;text-align: left;">扫一扫右侧二维码直接下载</div>
      		<div style="height: 8px;"></div>
      		<div style="color: #666666;text-align: left;">苹果手机在APPstore中搜索“360°车卡管家”下载</div>
      		<div style="height: 8px;"></div>
      		<div style="color: #666666;text-align: left;">安卓手机在腾讯应用宝中搜索“360度车卡管家”下载
</div>
      	</div>
      </div>
    </div>
		<div class="app_3" style="">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">激活码购买</div>
	      <div style="height: 50px;"></div>
	      <div style="width: 700px;margin: 0 auto;">
      	
      	<div style="width: 380px;height: 100px;display: inline-block;margin-left: 100px;position: relative;top: -40px;">
      		<div style="color: #666666;text-align: left;">从当地代理商处购买</div>
      		<div style="height: 8px;"></div>
      		<div style="color: #666666;text-align: left;">联系总部客服从指定的代理商处购买</div>
      	</div>
      	<div style="width: 200px;text-align: center;display: inline-block;height: 100px;"><img src="../assets/app/激活码.png" style="width: 200px;"/></div>
      </div>
	   </div>
	    <div class="app_4" style="background: #FAFAFA;">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">登录注册流程</div>
	      <div style="height: 50px;"></div>
	      <div class="app_4_1" style="width: 900px;margin: 0 auto;">
	      	<div ><figure style="text-align: center;"><img src="../assets/app/dengluzhuceliucheng-1.png"/><figcaption style="font-size: 12px;color: #666666;">点击导航栏上“我”进入登录/注册页</figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/1.png"/><figcaption style="font-size: 12px;color: #666666;width: 120px;position: relative;top: 45px;left: 60px;">
                            输入手机号码和密码
点击登录即可
                        </figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/dengluzhuceliucheng-3.png"/><figcaption style="font-size: 12px;color: #666666;position: relative;top: 45px;">
                            输入手机号码，获取验证码后
点击扫一扫激活码即可
                        </figcaption></figure></div>
	      </div>
	      <div style="height: 50px;"></div>
	    </div>
	    <div class="app_5">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">智能还款流程</div>
	      <div style="height: 50px;"></div>
	      <div class="app_5_1" style="width: 1200px;margin: 0 auto;">
	      		<div ><figure style="text-align: center;"><img src="../assets/app/1.png"/><figcaption style="font-size: 12px;color: #666666;">
                            完成注册后，输入注册的手机号码
和密码进行登录
                        </figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/2.png"/><figcaption style="font-size: 12px;color: #666666;">
                            
                            完成登录后，点击信用卡代还
进入人脸识别认证
                        
                        </figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/3.png"/><figcaption style="font-size: 12px;color: #666666;">
                           
                            使用手机摄像头对准自己的面部
进行识别
                        
                        </figcaption></figure></div>
                        <div><figure style="text-align: center;"><img src="../assets/app/4.png"/><figcaption style="font-size: 12px;color: #666666;">
                            
                            上传身份证正、反面照，认证后
进入绑定信用卡界面
                        
                        </figcaption></figure></div>
	      </div>
	      <div class="app_5_1" style="width: 1200px;margin: 0 auto;">
	      		<div ><figure style="text-align: center;"><img src="../assets/app/5.png"/><figcaption style="font-size: 12px;color: #666666;">
                           
                            绑定好了之后，点击“去设置”
进入还款计划界面
                        
                        </figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/6.png"/><figcaption style="font-size: 12px;color: #666666;">
                            
                            根据卡片情况选择需要的还款方式
                        
                        </figcaption></figure></div>
	      	<div><figure style="text-align: center;"><img src="../assets/app/7.png"/><figcaption style="font-size: 12px;color: #666666;">
                  
                            设置还款日期和消费地点
还款日期和天数可任意选择
                          
                        </figcaption></figure></div>
                        <div><figure style="text-align: center;"><img src="../assets/app/8.png"/><figcaption style="font-size: 12px;color: #666666;">
                            
                            确认还款计划，点击完成
                        
                        </figcaption></figure></div>
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
	import a1 from "../assets/chanping/综合服务-1.png"
	import a11 from "../assets/chanping/综合服务-2.png"
	import a2 from "../assets/chanping/银联-1.png"
	import a22 from "../assets/chanping/银联-2.png"
	import a3 from "../assets/chanping/商户-1.png"
	import a33 from "../assets/chanping/商户-2.png"
	import a4 from "../assets/chanping/费用-1.png"
	import a44 from "../assets/chanping/费用-2.png"
	import a5 from "../assets/chanping/研发-1.png"
	import a55 from "../assets/chanping/研发-2.png"
	import b1 from "../assets/business/guanlifuchi-2.png"
	import b11 from "../assets/business/guanlifuchi-1.png"
	import b2 from "../assets/business/guanggaofuchi-2.png"
	import b22 from "../assets/business/guanggaofuchi-1.png"
	import b3 from "../assets/business/peixunfuchi-2.png"
	import b33 from "../assets/business/peixunfuchi-1.png"
	import b4 from "../assets/business/yunyingfuchi-2.png"
	import b44 from "../assets/business/yunyingfuchi-1.png"
	import b5 from "../assets/business/huixiaofuchi-2.png"
	import b55 from "../assets/business/huixiaofuchi-1.png"
	import b6 from "../assets/business/ziyuanfuchi-2.png"
	import b66 from "../assets/business/ziyuanfuchi-1.png"
	import j11 from "../assets/index/提交信息未选定.png"
  	import j1 from "../assets/index/提交信息-选定.png"
	export default {
		data () {
		    return {
		      liu1:a11,
		      liu2:a22,
		      liu3:a33,
		      liu4:a44,
		      liu5:a55,
		      xixi1:b1,
		      xixi2:b2,
		      xixi3:b3,
		      xixi4:b4,
		      xixi5:b5,
		      xixi6:b6,
		      tijiao:j11,
      		oooo1:yyy1,
		    }
		  },
		name: "we",
		methods: {
			ti(){
		      let _this = this;
		      _this.tijiao = j1;
		    },
		    tiaa(){
		      let _this = this;
		      _this.tijiao = j11;
		    },
		    tib(){
		    	
		    },
		    index(){
		    	this.$router.push('/')
		    },
			we() {
				this.$router.push('/we')
			},
			changping() {
				this.$router.push('/product')
			},
			news() {
				this.$router.push('/news')
			},
			zaoshang() {
				this.$router.push('/business')
			},
			zhan() {
				this.$router.push('/tactic')
			},
			haha(index){
				var name = '.business_2_'+index
				$(name).attr("style",'width: 250px;height: 250px;display: inline-block;border: 1px solid #D23C3C;')
			},
			hahaa(index){
				let _this = this
				var name2 = '.business_3_1_'+index
				$(name2).attr("style",'box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.35);position: relative;top: -10px;')
				if (index == 1) {
					_this.xixi1 = b11
				} else if (index == 2) {
					_this.xixi2 = b22
				} else if (index == 3) {
					_this.xixi3 = b33
				} else if (index == 4) {
					_this.xixi4 = b44
				} else if (index == 5) {
					_this.xixi5 = b55
				} else if (index == 6) {
					_this.xixi6 = b66
				}
			},
			xuxu(){
				$(".zzzz").attr("style",'width: 250px;height: 250px;display: inline-block;border: 1px solid #E9E9E9;')
			},
			xuxua(){
				let _this = this
				$(".wwww").attr("style",'box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);position: relative;top: 0;')
				_this.xixi1 = b1
				_this.xixi2 = b2
				_this.xixi3 = b3
				_this.xixi4 = b4
				_this.xixi5 = b5
				_this.xixi6 = b6
			},
			zizi(index){
				let _this = this
				var name2 = '.chanping_2_1_'+index
				$(name2).attr("style",'display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.35);height: 230px;')
				if (index == 1) {
					_this.liu1 = a1
				} else if (index == 2) {
					_this.liu2 = a2
				} else if (index == 3) {
					_this.liu3 = a3
				} else if (index == 4) {
					_this.liu4 = a4
				} else if (index == 5) {
					_this.liu5 = a5
				}
			},
			gigi(){
				let _this = this
				$('.rrrr').attr("style",'display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;')
				_this.liu1 = a11
				_this.liu2 = a22
				_this.liu3 = a33
				_this.liu4 = a44
				_this.liu5 = a55
			},
			zizia(index){
				var name3 = '.chanping_3_2_'+index
				setTimeout(function  () {
					localStorage.setItem("liupan",1)
					if (localStorage.getItem('liupan') == 1) {
						$(name3).animate({height:"90px"},"slow");
						if (index == 1) {
							$('.chanping_3_2_1').animate({height:"90px"},"slow");
							$('.chanping_3_2_2').animate({height:"0"},0);
							$('.chanping_3_2_3').animate({height:"0"},0);
							$('.chanping_3_2_4').animate({height:"0"},0);
							$('.chanping_3_2_5').animate({height:"0"},0);
							$('.chanping_3_2_6').animate({height:"0"},0);
						} else if (index == 2) {
							$('.chanping_3_2_2').animate({height:"90px"},"slow");
							$('.chanping_3_2_1').animate({height:"0"},0);
							$('.chanping_3_2_3').animate({height:"0"},0);
							$('.chanping_3_2_4').animate({height:"0"},0);
							$('.chanping_3_2_5').animate({height:"0"},0);
							$('.chanping_3_2_6').animate({height:"0"},0);
						} else if (index == 3) {
							$('.chanping_3_2_3').animate({height:"90px"},"slow");
							$('.chanping_3_2_2').animate({height:"0"},0);
							$('.chanping_3_2_1').animate({height:"0"},0);
							$('.chanping_3_2_4').animate({height:"0"},0);
							$('.chanping_3_2_5').animate({height:"0"},0);
							$('.chanping_3_2_6').animate({height:"0"},0);
						} else if (index == 4) {
							$('.chanping_3_2_4').animate({height:"90px"},"slow");
							$('.chanping_3_2_2').animate({height:"0"},0);
							$('.chanping_3_2_3').animate({height:"0"},0);
							$('.chanping_3_2_1').animate({height:"0"},0);
							$('.chanping_3_2_5').animate({height:"0"},0);
							$('.chanping_3_2_6').animate({height:"0"},0);
						} else if (index == 5) {
							$('.chanping_3_2_5').animate({height:"90px"},"slow");
							$('.chanping_3_2_2').animate({height:"0"},0);
							$('.chanping_3_2_3').animate({height:"0"},0);
							$('.chanping_3_2_4').animate({height:"0"},0);
							$('.chanping_3_2_1').animate({height:"0"},0);
							$('.chanping_3_2_6').animate({height:"0"},0);
						} else if (index == 6) {
							$('.chanping_3_2_6').animate({height:"90px"},"slow");
							$('.chanping_3_2_2').animate({height:"0"},0);
							$('.chanping_3_2_3').animate({height:"0"},0);
							$('.chanping_3_2_4').animate({height:"0"},0);
							$('.chanping_3_2_1').animate({height:"0"},0);
							$('.chanping_3_2_1').animate({height:"0"},0);
						}
					}
				},1)
				
			},
			qiqi(){
				$('.yy').animate({height:"0"},0,"slow");
				localStorage.removeItem('liupan')
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
	.chanping_1_1,.chanping_2_1{
		display: -webkit-flex; /* Safari */
	    -webkit-justify-content: space-around; /* Safari 6.1+ */
	    display: flex;
	    justify-content: space-around;
	}
	.chanping_1_1 figure{
		width: 200px;
		
	}
	.chanping_2_1{
		align-items:flex-start;
	}
	.chanping_2_1 img{
		width: 80px;
		margin-bottom: 10px;
	}
	.xixi3{
		position: relative;
		left: 80px;
	}
	.xixi4{
		position: relative;
		left: -70px;
	}
	
	.ree,.business_3_1,.business_4,.app_4_1,.app_5_1{
		display: -webkit-flex; /* Safari */
	    -webkit-justify-content: space-between; /* Safari 6.1+ */
	    display: flex;
	    justify-content: space-between;
	}
	.wwww{
		width: 100px;
		padding: 20px;
		text-align: center;
		padding-top: 40px;
		border-radius: 5px;
		background: #FFFFFF;
	}
</style>