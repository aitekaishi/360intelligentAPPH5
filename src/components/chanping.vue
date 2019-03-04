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
				<li style="border-bottom: 2px solid #E7383E;width:64px;color:rgba(231,56,62,1);">产品服务</li>
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
    
		<div class="chanping_1">
			<div style="height: 50px;"></div>
			<div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;text-align: center;color: #303030;">产品介绍</div>
			<div style="height: 50px;"></div>
			<div class="chanping_1_1" style="width: 900px;margin: 0 auto;cursor: pointer;">
				<figure @mouseenter="haha(1)" @mouseleave="xuxu" style="display: inline-block;text-align: center;">
					<img src="../assets/chanping/智能还款.png" style="width: 70px;"/>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_1" style="font-size: 20px;color: #303030;">智能还款</figcaption>
				</figure>
				<figure @mouseenter="haha(2)" @mouseleave="xuxu" style="display: inline-block;text-align: center;">
					<img src="../assets/chanping/快捷支付.png" style="width: 70px;"/>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_2" style="font-size: 20px;color: #303030;">快捷支付</figcaption>
				</figure>
				<figure @mouseenter="haha(3)" @mouseleave="xuxu" style="display: inline-block;text-align: center;">
					<img src="../assets/chanping/违章代缴.png" style="width: 70px;"/>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_3" style="font-size: 20px;color: #303030;">违章代缴</figcaption>
				</figure>
				<figure @mouseenter="haha(4)" @mouseleave="xuxu" style="display: inline-block;text-align: center;">
					<img src="../assets/chanping/zaixianbanka.png" style="width: 70px;"/>
					<div style="height: 10px;"></div>
					<figcaption class="chanping_1_1_4" style="font-size: 20px;color: #303030;">在线办卡</figcaption>
				</figure>
			</div>
			<div style="height: 50px;"></div>
			<div class="chanping_1_2" style="width: 900px;background: #FBFBFB;margin: 0 auto;display: none;">
				<div class="chanping_1_2_1 xuxu" style="padding: 20px;display: none;">
					<div>一键托管，真实消费，美化账单，利于提额</div>
					<div style="height: 10px;"></div>
					<div style="color: #999999;line-height: 27px;text-indent: 2em;">
                            卡内5%余额即可实现全额还款，使该信用卡账单无限延期，达到缓解还款压力的目的。一键设置生成最佳还款计划，落地商户消
费带积分，还款消费整进散出，美化账单，有利于提升信用卡评级。费率低至78元每万元，适合资金周转困难的用户，从此远离
信用卡逾期风险。
                        </div>
				</div>
				<div class="chanping_1_2_2 xuxu" style="padding: 20px;display: none;">
					<div>门槛低，速度快，超安全，费用少</div>
					<div style="height: 10px;"></div>
					<div style="color: #999999;line-height: 27px;text-indent: 2em;">
                            在线一键盘活信用卡内资金，激活信用卡小

金库，优化资金配置,无缝对接用户的储蓄卡和

信用卡，轻松实现无卡支付。服务费低至0.6%，

解决用户急用钱的难题，省事省力省钱。

 

 



                        </div>
				</div>
				<div class="chanping_1_2_3 xuxu" style="padding: 20px;display: none;">
					<div>一键处理 ，全国联网，在线缴费，极速查询</div>
					<div style="height: 10px;"></div>
					<div style="color: #999999;line-height: 27px;text-indent: 2em;">
                            在线代缴全国各地的车辆违章业务，用户

足不出户可实现销分缴费，免去车管所奔波和

外出寻找中介的烦恼。服务覆盖全国90%地区

，且费用远低于当地市场价，极大地节约了用

户成本。
                        </div>
				</div>
				<div class="chanping_1_2_4 xuxu" style="padding: 20px;display: none;">
					<div>门槛低，下卡快，额度高，卡种多</div>
					<div style="height: 10px;"></div>
					<div style="color: #999999;line-height: 27px;text-indent: 2em;">
                            轻松在线申请各大银行信用卡，申请门槛低，

下卡速度快，授信额度大。
                        </div>
				</div>
			</div>
		</div>
		<div style="height: 50px;"></div>
		<div class="chanping_2" style="text-align: center;width: 100vw;margin: 0 auto;background: #FFFCFC;">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">五大优势</div>
      <div style="height: 50px;"></div>
      <div class="chanping_2_1" style="width: 900px;margin: 0 auto;cursor: pointer;">
      	<div class="chanping_2_1_1 rrrr" @mouseenter="zizi(1)" @mouseleave="gigi" style="display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;"><figure style="width: 180px;position: relative;left: -35px;text-align: center;">
      		<img :src="liu1"/>
      		<figcaption><div style="color: #333333;font-size: 18px;margin-bottom: 5px;">信用卡综合服务平台</div><div style="color: #999999;width: 150px;position: relative;left: 15px;line-height: 20px;">
                            一款集智能还款、在线
办卡、快捷支付、违章
代缴的综合型APP服务
平台
                        </div></figcaption>
      	</figure></div>
      	<div class="chanping_2_1_2 rrrr" @mouseenter="zizi(2)" @mouseleave="gigi" style="display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;"><figure style="width: 180px;position: relative;left: -35px;text-align: center;">
      		<img :src="liu2" style="margin-bottom: 25px;"/>
      		<figcaption><div style="color: #333333;font-size: 18px;margin-bottom: 5px;">银联合作</div><div style="color: #999999;width: 150px;position: relative;left: 15px;line-height: 20px;">
                            
                            全网唯一支持所有银联
标识的信用卡还款APP
                        
                        </div></figcaption>
      	</figure></div>
      	<div class="chanping_2_1_3 rrrr" @mouseenter="zizi(3)" @mouseleave="gigi" style="display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;"><figure style="width: 180px;position: relative;left: -35px;text-align: center;">
      		<img :src="liu3"/>
      		<figcaption><div style="color: #333333;font-size: 18px;margin-bottom: 5px;">落地商户带积分</div><div style="color: #999999;width: 150px;position: relative;left: 15px;line-height: 20px;">
                            
                            全网唯一接通全国落地
商户带积分的还款APP
                        
                        </div></figcaption>
      	</figure></div>
      	
      </div>
      <div class="chanping_2_1" style="width: 900px;margin: 0 auto;position: relative;top: 50px;cursor: pointer;">
      	<div class="chanping_2_1_4 xixi3 rrrr" @mouseenter="zizi(4)" @mouseleave="gigi" style="display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;"><figure style="width: 180px;position: relative;left: -35px;text-align: center;">
      		<img :src="liu4"/>
      		<figcaption><div style="color: #333333;font-size: 18px;margin-bottom: 5px;">费用最低</div><div style="color: #999999;width: 150px;position: relative;left: 15px;line-height: 20px;">
                            
                            万元账单只需78元
无其他费用
                        
                        </div></figcaption>
      	</figure></div>
      	<div class="chanping_2_1_5 xixi4 rrrr" @mouseenter="zizi(5)" @mouseleave="gigi" style="display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.1);height: 230px;"><figure style="width: 180px;position: relative;left: -35px;text-align: center;">
      		<img :src="liu5"/>
      		<figcaption><div style="color: #333333;font-size: 18px;margin-bottom: 5px;">自主研发系统</div><div style="color: #999999;width: 150px;position: relative;left: 15px;line-height: 20px;">
                            
                            自主研发了苹果、安卓
及分润管理系统
                        
                        </div></figcaption>
      	</figure></div>
      	
      </div>
      <div style="height: 110px;"></div>
    </div>
		<div class="chanping_3">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">六大保障</div>
	      <div style="height: 50px;"></div>
	    </div>
		<div class="chanping_3_1" style="width: 900px;margin: 0 auto;cursor: pointer;height: 350px;overflow: hidden;">
			<div style="width: 430px;height: 300px;">
				<div class="chanping_3_1_1" @mouseenter="zizia(1)" @mouseleave="qiqi" style="background: rgba(215,126,126,1);border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/账户安全.png" alt="" style="width: 25px;height: 25px;"/><figcaption style="color: #FFFFFF;">账户安全</figcaption></figure></div>
				<div class="chanping_3_2_1 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">采用实名认证和人脸识别技术，确认是用户本人使用APP,账户安全有保障。</div>
                        </div>
				<div class="chanping_3_1_2" @mouseenter="zizia(2)" @mouseleave="qiqi" style="background: #FFC1C1;border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/银联合作.png" alt="" style="width: 30px;height: 25px;"/><figcaption style="color: #FFFFFF;">银联合作</figcaption></figure></div>
				<div class="chanping_3_2_2 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">平台与中国银联合作，支持绑定银联旗下所有银行信用卡，所有资金走银联代扣通道，所有流程受银联监管。</div>
                        </div>
				<div class="chanping_3_1_3" @mouseenter="zizia(3)" @mouseleave="qiqi" style="background: rgba(215,126,126,1);border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/公司垫付.png" alt="" style="width: 25px;height: 25px;"/><figcaption style="color: #FFFFFF;">公司垫付</figcaption></figure></div>
				<div class="chanping_3_2_3 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">出现规定时间内资金未及时到账的意外情况，公司第一时间启动垫付程序，维护用户利益。</div>
                        </div>
			</div>
			<div style="width: 430px;height: 300px;position: relative;top: -300px;left: 450px;">
				<div class="chanping_3_1_4" @mouseenter="zizia(4)" @mouseleave="qiqi" style="background: #FFC1C1;border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/资金安全.png" alt="" style="width: 25px;height: 25px;"/><figcaption style="color: #FFFFFF;">资金安全</figcaption></figure></div>
				<div class="chanping_3_2_4 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">无需充值，资金只在用户信用卡和支付通道双向流通，资金安全有保障。</div>
                        </div>
				<div class="chanping_3_1_5" @mouseenter="zizia(5)" @mouseleave="qiqi" style="background: #D77E7E;border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/保险合作.png" alt="" style="width: 25px;height: 25px;"/><figcaption style="color: #FFFFFF;">保险合作</figcaption></figure></div>
				<div class="chanping_3_2_5 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">阳光财产保险全程承保，用户所有信用卡一键投保，盗刷最高可获赔50万元。</div>
                        </div>
				<div class="chanping_3_1_6" @mouseenter="zizia(6)" @mouseleave="qiqi" style="background: #FFC1C1;border-radius: 5px;padding-top: 1px;padding-bottom: 1px;margin-bottom: 10px;"><figure style="text-align: center;"><img src="../assets/chanping/售后无忧.png" alt="" style="width: 25px;height: 25px;"/><figcaption style="color: #FFFFFF;">售后无忧</figcaption></figure></div>
			<div class="chanping_3_2_6 yy"  style="color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -11px;overflow: hidden;height: 90px;display: none;">
                            <div style="width: 410px;margin: 10px auto;">全国7*12小时的多渠道在线客户服务体系，实时为用户排忧解难，做到360°全方位服务无终点。</div>
                        </div>
			</div>
			<div style="height: 60px;"></div>
		</div>
	    <div style="height: 40px;"></div>
	    <div class="we_3" style="background: #FAFAFA;">
	      <div style="height: 50px;"></div>
	      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color: #333333;text-align: center;">常见问题</div>
	      <div style="height: 50px;"></div>
	      <div style="width: 1000px !important;margin: 0 auto;">
	      	<div style="width: 450px;display: inline-block;height: 150px;">
	      		<div style="font-size: 20px;color: #666666;">对于合伙人来说，360°车卡管家有哪些优势？</div>
	      		<div style="height: 10px;"></div>
	      		<div style="font-size: 14px;color: #999999;">
                            模式好，区域独家合伙能够避免恶性竞争，保障各级合伙人的固定利润。分润高，
省级、市级、县级合伙人的分润远高于同行其他平台。扶持多，总部从招商到运营
销售，全程一对一指导。功能多，相较于同行其他APP，多一个主要功能，APP覆
盖的用户群体更广，用户粘度更大，吸引力更强，更便于市场推广。
                        </div>
	      	</div>
	      	<div style="width: 450px;display: inline-block;margin-left: 50px;height: 150px;position: relative;top: -20px;">
	      		<div style="font-size: 20px;color: #666666;">360°车卡管家采用哪种招商模式？</div>
	      		<div style="height: 10px;"></div>
	      		<div style="font-size: 14px;color: #999999;">
                            独家合伙人和渠道代理商两种模式，独家合伙人即每个行政区域只设一个，要求是
具有一定的人脉和区域影响力，有能力招募和管理下级合伙人；只要购买一定数量
的激活码就可成为渠道代理商，其他方面要求较低。
                        
                        </div>
	      	</div>
	      	<div style="width: 450px;display: inline-block;height: 150px;">
	      		<div style="font-size: 20px;color: #666666;">360°车卡管家的独家合伙人，有名额限制吗？</div>
	      		<div style="height: 10px;"></div>
	      		<div style="font-size: 14px;color: #999999;">
                            360°车卡管家以省—市—县三级行政区域为单位，每个行政区域只设一位独家合伙
人，比如，湖南省只有一个省级独家合伙人，株洲市只有一个市级独家合伙人， 攸
县只有一个县级独家合伙人。
                        
                        </div>
	      	</div>
	      	<div style="width: 450px;display: inline-block;margin-left: 50px;height: 150px;position: relative;top: -20px;">
	      		<div style="font-size: 20px;color: #666666;">合伙人的职责是什么？</div>
	      		<div style="height: 10px;"></div>
	      		<div style="font-size: 14px;color: #999999;">
                            
                            简单来说，合伙人就是和总部一起创业的伙伴，主要职责是招募本区域内的下级独
家合伙人和渠道代理商，共同把产品推向全国市场。
                        
                        </div>
	      	</div>
	      </div>
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
	export default {
		data () {
		    return {
		      liu1:a11,
		      liu2:a22,
		      liu3:a33,
		      liu4:a44,
		      liu5:a55,
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
			index(){
		    	this.$router.push('/')
		    },
			we() {
				this.$router.push('/we')
			},
			zaoshang(){
		      this.$router.push('/business')
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
				var name = '.chanping_1_1_'+index
				var nam4 = '.chanping_1_2_'+index
				$(name).attr("style",'font-size: 20px;color: #D23C3C;')
				$(nam4).attr("style",'padding: 20px;display: block;')
				$('.chanping_1_2').slideDown(1000)
			},
			xuxu(){
				$(".chanping_1_1 figcaption").attr("style",'font-size: 20px;color: #303030;')
				$(".xuxu").attr("style",'padding: 20px;display: none;')
				$('.chanping_1_2').attr("style",'width: 900px;background: #FBFBFB;margin: 0 auto;display: none;')
			},
			zizi(index){
				let _this = this
				var name2 = '.chanping_2_1_'+index
					$(name2).attr("style",'display: inline-block;background: #FFFFFF;border-radius: 5px;width: 190px;box-shadow: 0px 3px 7px 0px rgba(210,60,60,0.35);height: 230px;position: relative;top: -20px;')
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
						if (index == 1) {
							$('.chanping_3_2_1').slideDown()
							$('.chanping_3_2_2').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_3').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_4').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_5').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_6').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						} else if (index == 2) {
							$('.chanping_3_2_2').slideDown()
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_3').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_4').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_5').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_6').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						} else if (index == 3) {
							$('.chanping_3_2_3').slideDown()
							$('.chanping_3_2_2').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_4').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_5').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_6').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						} else if (index == 4) {
							$('.chanping_3_2_4').slideDown()
							$('.chanping_3_2_2').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_3').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_5').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_6').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						} else if (index == 5) {
							$('.chanping_3_2_5').slideDown()
							$('.chanping_3_2_2').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_3').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_4').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_6').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						} else if (index == 6) {
							$('.chanping_3_2_6').slideDown()
							$('.chanping_3_2_2').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_3').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_4').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
							$('.chanping_3_2_1').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
						}
				},1)
				
			},
			qiqi(){
				$('.yy').attr('style','color: #999999;width: 428px;height: 0;background:rgba(255,255,255,1);border:1px solid rgba(215,126,126,1);box-shadow:0px 3px 7px 0px rgba(215,126,126,0.1);border-radius:0px 0px 5px 5px;position: relative;top: -12px;overflow: hidden;height: 90px;display: none;')
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
</style>