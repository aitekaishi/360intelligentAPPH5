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
				<li style="border-bottom: 2px solid #E7383E;width:64px;color:rgba(231,56,62,1);">招商合作</li>
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
    
		<div class="business_1" style="background: #FAFAFA;">
			<div style="height: 50px;"></div>
			<div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;text-align: center;color: #303030;">合作利润</div>
			<div style="height: 5px;"></div>
			<div style="font-size: 14px;color: #999999;text-align: center;">１个APP  4大盈利点</div>
			<div style="font-size: 14px;color: #999999;text-align: center;">交易不停分润不止 一次投入终生收益</div>
			<div style="height: 10px;"></div>
			<div class="chanping_1_1" style="width: 900px;margin: 0 auto;cursor: pointer;">
				<figure style="display: inline-block;text-align: center;">
					<div style="width: 150px;height: 150px;border-radius: 50%;border: 2px solid #004A81;"><div style="width: 140px;height: 140px;border-radius: 50%;border: 2px solid #004A81;position: relative;top: 3px;left: 3px;text-align: center;"><img src="../assets/business/智能还款.png" style="width: 70px;position: relative;top: 20px;"/></div></div>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_1" style="font-size: 16px;color: #3F3F3F;"><div>
                            全区域智能还款分润
（高达30元/万元）
                        </div></figcaption>
				</figure>
				<figure style="display: inline-block;text-align: center;">
					<div style="width: 150px;height: 150px;border-radius: 50%;border: 2px solid #078287;"><div style="width: 140px;height: 140px;border-radius: 50%;border: 2px solid #078287;position: relative;top: 3px;left: 3px;text-align: center;"><img src="../assets/business/快捷支付.png" style="width: 70px;position: relative;top: 25px;"/></div></div>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_1" style="font-size: 16px;color: #3F3F3F;"><div>
                            
                            全区域快捷支付分润
（高达17元/万元）
                        
                        </div></figcaption>
				</figure>
				<figure   style="display: inline-block;text-align: center;">
					<div style="width: 150px;height: 150px;border-radius: 50%;border: 2px solid #EC8F21;"><div style="width: 140px;height: 140px;border-radius: 50%;border: 2px solid #EC8F21;position: relative;top: 3px;left: 3px;text-align: center;"><img src="../assets/business/激活条形码.png" style="width: 70px;position: relative;top: 40px;"/></div></div>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_1" style="font-size: 16px;color: #3F3F3F;"><div>
                            
                               全区域激活码利润
					<div style="width: 160px;">（最高可赚168元/个）</div>
                        
                        </div></figcaption>
				</figure>
				<figure  style="display: inline-block;text-align: center;">
					<div style="width: 150px;height: 150px;border-radius: 50%;border: 2px solid #CA1D1F;"><div style="width: 140px;height: 140px;border-radius: 50%;border: 2px solid #CA1D1F;position: relative;top: 3px;left: 3px;text-align: center;"><img src="../assets/business/违章代缴.png" style="width: 70px;position: relative;top: 33px;"/></div></div>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_1" style="font-size: 16px;color: #3F3F3F;"><div>
                            
                            全区域违章代缴分润
（高达21元/万元）
                        
                        </div></figcaption>
				</figure>
			</div>
			<div style="height: 50px;"></div>
		</div>
		<div class="business_2" style="text-align: center;width: 100vw;margin: 0 auto;">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">合作模式</div>
      <div style="height: 10px;"></div>
      <div style="font-size: 14px;color: #999999;text-align: center;">独家合伙人+渠道代理商</div>
      <div style="height: 50px;"></div>
      <div class="ree" style="width: 600px;margin: 0 auto;cursor: pointer;">
      	<div class="business_2_1 zzzz" @mouseenter="haha(1)" @mouseleave="xuxu" style="width: 250px;height: 250px;display: inline-block;border: 1px solid #E9E9E9;">
      		<div style="height: 50px;"></div>
      		<div><img src="../assets/business/区域保护.png"/></div>
      		<div style="height: 20px;"></div>
      		<div style="color: #333333;">区域保护</div>
      		<div style="height: 5px;"></div>
      		<div style="color: #666666;font-size: 14px;">避免内部恶性竞争</div>
      	</div>
      	<div class="business_2_2 zzzz" @mouseenter="haha(2)" @mouseleave="xuxu" style="width: 250px;height: 250px;display: inline-block;border: 1px solid #E9E9E9;">
      		<div style="height: 50px;"></div>
      		<div><img src="../assets/business/统一管理.png"/></div>
      		<div style="height: 20px;"></div>
      		<div style="color: #333333;">统一管理</div>
      		<div style="height: 5px;"></div>
      		<div style="color: #666666;font-size: 14px;">便于搭建高质量销售团队</div>
      	</div>
      </div>
      <div style="height: 40px;"></div>
      <div class="ree" style="width: 600px;margin: 0 auto;cursor: pointer;">
      	<div class="business_2_3 zzzz" @mouseenter="haha(3)" @mouseleave="xuxu" style="width: 250px;height: 250px;display: inline-block;border: 1px solid #E9E9E9;">
      		<div style="height: 50px;"></div>
      		<div><img src="../assets/business/层级分明.png"/></div>
      		<div style="height: 20px;"></div>
      		<div style="color: #333333;">层级分明</div>
      		<div style="height: 5px;"></div>
      		<div style="color: #666666;font-size: 14px;">合伙人固定利润有保障</div>
      	</div>
      	<div class="aiai business_2_4 zzzz" @mouseenter="haha(4)" @mouseleave="xuxu" style="width: 250px;height: 250px;display: inline-block;border: 1px solid #E9E9E9;">
      		<div style="height: 50px;"></div>
      		<div><img src="../assets/business/团队互助.png"/></div>
      		<div style="height: 20px;"></div>
      		<div style="color: #333333;">团队互助</div>
      		<div style="height: 5px;"></div>
      		<div style="color: #666666;font-size: 14px;">促进品牌可持续发展</div>
      	</div>
      </div>
      <div style="height: 110px;"></div>
    </div>
		<div class="business_3" style="background: #FFFCFC;">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">扶持政策</div>
	      <div style="height: 50px;"></div>
	    </div>
		<div style="background: #FFFCFC;">
			<div class="business_3_1" style="width: 900px;margin: 0 auto;height: 250px;cursor: pointer;">
			<div @mouseenter="hahaa(1)" @mouseleave="xuxua" class="business_3_1_1 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi1"/>
			<div style="height: 30px;"></div>
			<div style="color: #333333;">管理扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            总部提供管理模式、
人员编制、薪酬制度
和考核体系的指导。
                        </div></div>
			<div @mouseenter="hahaa(2)" @mouseleave="xuxua" class="business_3_1_2 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi2"/>
			<div style="height: 30px;"></div>
			<div style="color: #333333;">广告扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            
                            总部提供百度等知名
平台的广告投放，日
常宣传图文的设计。
                        
                        </div></div>
			<div @mouseenter="hahaa(3)" @mouseleave="xuxua" class="business_3_1_3 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi3"/>
			<div style="height: 30px;"></div>
			<div style="color: #333333;">培训扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            
                            总部提供招商、管
理、经营、策划等能
力的全方位培训。
                        
                        </div></div>
			<div @mouseenter="hahaa(4)" @mouseleave="xuxua" class="business_3_1_4 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi4"/>
			<div style="height: 30px;"></div>
			<div style="color: #333333;">运营扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            
                           
                            总部提供招商、推
广、直销及活动方
案的一对一指导。
                        
                        
                        </div></div>
			<div @mouseenter="hahaa(5)" @mouseleave="xuxua" class="business_3_1_5 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi5"/>
			<div style="height: 38px;"></div>
			<div style="color: #333333;">会销扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            
                            总部提供会销全案，
配备专业的会销讲师
协助招商。
                        
                        </div></div>
			<div @mouseenter="hahaa(6)" @mouseleave="xuxua" class="business_3_1_6 wwww" style="box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.1);"><img :src="xixi6"/>
			<div style="height: 30px;"></div>
			<div style="color: #333333;">资源扶持</div>
			<div style="height: 5px;"></div>
			<div style="color: #666666;font-size: 14px;text-align: justify;">
                            
                            总部引荐意向代理给
相关地区合伙人，优
化资源配置。
                        
                        </div></div>
		</div>
		<div style="height: 80px;"></div>
		</div>
	    <div class="we_3" style="background: #FAFAFA;">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">合作流程</div>
	      <div style="height: 50px;"></div>
	      <div style="width: 900px;margin: 0 auto;"><img src="../assets/business/hezuoliucheng.png" style="width: 900px;"/></div>
	      <div style="height: 10px;"></div>
	      <div class="business_4" style="width: 840px;margin: 0 auto;">
	      	<div><span style="color: #D23C3C;font-size: 20px;">1&nbsp;&nbsp;</span>提交申请<div style="color: #999999;font-size: 14px;width: 120px;text-align: justify;">
                            意向合伙人提交申请
书、营业执照、场地
照片、管理层简历及
其他材料
                        </div></div>
                        <div><span style="color: #D23C3C;font-size: 20px;">2&nbsp;&nbsp;</span>总部审核<div style="color: #999999;font-size: 14px;width: 120px;text-align: justify;">
                           
                            总部审核该资料，判
断是否达到申请条件
                        
                        </div></div>
                        <div><span style="color: #D23C3C;font-size: 20px;">3&nbsp;&nbsp;</span>实地考察<div style="color: #999999;font-size: 14px;width: 120px;text-align: justify;">
                            
                            达到申请条件的合伙
人，由总部派专人实
地考察
                        
                        </div></div>
                        <div><span style="color: #D23C3C;font-size: 20px;">4&nbsp;&nbsp;</span>总部验收<div style="color: #999999;font-size: 14px;width: 120px;text-align: justify;">
                            
                            通过审核的合伙人，
需按总部要求统一布
局，完成后由总部派
专人验收
                        
                        </div></div>
                        <div><span style="color: #D23C3C;font-size: 20px;">5&nbsp;&nbsp;</span>签约授权<div style="color: #999999;font-size: 14px;width: 120px;text-align: justify;">
                            
                            达到验收标准的合伙
人，与总部正式签
约，获得授权证书并
开通后台系统。
                        
                        </div></div>
	      	
	      </div>
	      <div style="height: 50px;"></div>
	    </div>
	   <div class="index_6" style="text-align: center">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">合作加盟</div>
      <div style="height: 50px;"></div>
      <div style="text-align: center;">
      	<input type="text" placeholder="姓名" v-model="name" style="background:rgba(250,250,250,1);outline: none;border: none;width: 280px;height: 35px;padding-left: 10px;margin-right: 20px;">
      <input type="tel" placeholder="手机" oninput="value=value.replace(/[^\d]/g,'')" v-model="shouji" style="background:rgba(250,250,250,1);outline: none;border: none;width: 280px;height: 35px;padding-left: 10px;margin-right: 20px;">
      <input type="text" placeholder="微信" v-model="weixing" style="background:rgba(250,250,250,1);outline: none;border: none;width: 280px;height: 35px;padding-left: 10px;margin-right: 20px;">
      </div>
      <div style="height: 20px;"></div>
      <div style="text-align: center;">
      	<textarea placeholder="内容" v-model="connent" style="width: 905px;height: 280px;background:rgba(250,250,250,1);outline: none;border: none;font-family: MicrosoftYaHei;resize: none;padding-left: 10px;position: relative;left: -10px;"></textarea>
      </div>
      <div style="height: 40px;"></div>
      <div><img :src="tijiao" @click="tib" alt="" style="width: 160px;height: 40px;cursor: pointer;" @mouseenter="ti" @mouseleave="tia"></div>
      <div style="height: 40px;"></div>
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
		methods: {
			ti(){
		      let _this = this;
		      _this.tijiao = j1;
		    },
		    tia(){
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
			zhan() {
				this.$router.push('/tactic')
			},
			appzhuangqu(){
		      this.$router.push('/app')
		    },
			haha(index){
				var name = '.business_2_'+index
				$(name).attr("style",'width: 250px;height: 250px;display: inline-block;border: 1px solid #D23C3C;position: relative;top: -30px;')
			},
			hahaa(index){
				let _this = this
				var name3 = '.business_3_1_'+index
				$(name3).attr("style",'box-shadow: 0px 3px 7px 0px rgba(201,80,80,0.35);position: relative;top: -10px;')
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
	
	.ree,.business_3_1,.business_4{
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