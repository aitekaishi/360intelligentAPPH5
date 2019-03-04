<template>
	<div>
		<div class="index_1">
			<img style="width: 304px;margin-left: 15vw;height: 49px;position: relative;top: 16px;" src="../assets/index/logo.png" alt="" />
			<ul style="list-style: none;display: inline-block;margin-left: 3vw;">
				<li class="index_1_2" @click="index" style="cursor: pointer;">首页</li>
				<li class="index_1_3" @click="we" style="cursor: pointer;">关于我们</li>
				<li class="index_1_4" @click="changping" style="cursor: pointer;">产品服务</li>
				<li style="border-bottom: 2px solid #E7383E;width:64px;color:rgba(231,56,62,1);">新闻资讯</li>
				<li class="index_1_5" @click="zaoshang" style="cursor: pointer;">招商合作</li>
				<li class="index_1_6" @click="zhan" style="cursor: pointer">战略部署</li>
				<li class="index_1_7" @click="appzhuangqu" style="cursor: pointer;">APP专区</li>
				<li style="width:200px;
height:14px;
font-size:14px;
font-family:MicrosoftYaHei;
font-weight:400;
color:rgba(255,0,0,1);">24小时热线：400-8983-360</li>
			</ul>
		</div>
		<div class="news_1" style="width: 100vw;background: #F5F5F5;">
			
			<div style="height: 20px;"></div>
			<div @click="rrrr" style="width: 940px;margin: 0 auto;text-align: left;color: #D23C3C;cursor: pointer;"><img src="../assets/news/向左(1).png" style="position: relative;top: 2px;"/>&nbsp;&nbsp;新闻资讯</div>
			<div style="width: 980px;background: #FFFFFF;margin: 0 auto;padding-bottom: 0;position: relative;top: -25px;">
				<div style="width: 900px;margin: 40px;margin-bottom: 0;">
					<div style="height: 40px;"></div>
					
					<div style="display: inline-block;width: 900px;">
						<div style="color: #333333;font-size: 30px;">360°车卡管家受邀参加中国企业智能营销创新峰会</div>
						<div style="height: 20px;"></div>
						<div style="color: #333333;"> 2018-05-31</div>
						<div style="height: 10px;"></div>
						<div style="background: #EEEEEE;height: 2px;"></div>
						<div style="height: 10px;"></div>
						<div style="color: #333333;width: 870px;margin: 0 auto;text-align: justify;line-height: 30px;">
                            5月28日，以“智联万物 营创新篇”为主题的2018中国企业智能营销创新峰会在长沙万达文华酒店举行，此次活
动由百度主办、湖南省广告协会协办、湖南竞网集团承办。360°车卡管家作为百度的长期合作伙伴有幸受邀，推
广部和培训部的主管代表公司参加了本次峰会。她们认真的聆听了百度公司各位领导的精彩分享，了解到2018年
推广营销的重点和新方向，带去的疑问在会上都找到了答案。本次会议对于360°车卡管家未来的推广运营...
						<div style="text-align: center;"><img src="../assets/news/xinwenzixun-1.png" style="height: 300px;width: 500px;"/></div>
						5月28日，以“智联万物 营创新篇”为主题的2018中国企业智能营销创新峰会在长沙万达文华酒店举行，此次活
动由百度主办、湖南省广告协会协办、湖南竞网集团承办。360°车卡管家作为百度的长期合作伙伴有幸受邀，推
广部和培训部的主管代表公司参加了本次峰会。她们认真的聆听了百度公司各位领导的精彩分享，了解到2018年
推广营销的重点和新方向，带去的疑问在会上都找到了答案。本次会议对于360°车卡管家未来的推广运营...
                        </div>
					</div>
					<div style="height: 80px;"></div>
				</div>
			</div>
			<div style="height: 80px;"></div>
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
	import a1 from "../assets/news/向左.png"
	import a11 from "../assets/news/向左-1.png"
	import a2 from "../assets/news/向右.png"
	import a22 from "../assets/news/向右-1.png"
	export default {
		data () {
		    return {
		      zongshu:50,
		      one:1,
		      two:2,
		      three:3,
		      last:7,
		      number:1,
		      zuobian:a1,
		      youbian:a22,
		    }
		 },
		methods: {
			index(){
		    	this.$router.push('/')
		    },
			we() {
				this.$router.push('/we')
			},
			changping() {
				this.$router.push('/product')
			},
			zaoshang(){
		      this.$router.push('/business')
		    },
			zhan() {
				this.$router.push('/tactic')
			},
			appzhuangqu(){
		      this.$router.push('/app')
		    },
			yeshu(index){
				let _this = this
				var name = '.news_2_'+index
				if (index == 1) {
					if ($(name).html()==1) {
						_this.zuobian = a1
						_this.youbian = a22
					}else{
						_this.zuobian = a11
						_this.youbian = a22
					}
				}
			},
			rrrr(){
				this.$router.push('/news')
			}
		}
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
	.eeee{
		background: red !important;
		color: #FFFFFF !important;
	}
</style>