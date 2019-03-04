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
        <li style="color:rgba(231,56,62,1);cursor: pointer;border-bottom: 2px solid #E7383E;">首页</li>
        <li class="index_1_2"  @click="we" style="cursor: pointer">关于我们</li>
        <li class="index_1_3"  @click="changping" style="cursor: pointer">产品服务</li>
        <li class="index_1_4"  @click="news" style="cursor: pointer">新闻资讯</li>
        <li class="index_1_5"  @click="zaoshang" style="cursor: pointer">招商合作</li>
        <li class="index_1_6"  @click="zhan" style="cursor: pointer">战略部署</li>
        <li class="index_1_7"  @click="appzhuangqu" style="cursor: pointer">APP专区</li>
        <li style="width:200px;height:14px;font-size:14px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,0,0,1);">24小时热线：400-8983-360</li>
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
    <div class="index_2">
    	<div style="height: 20px;"></div>
      <div class="index_2_1">产品功能</div>
      <div class="index_2_2" style="text-align: center">
        <div class="index_2_2_1" style="display: inline-block;text-align: left;position: relative;left: -60px;">
          <div style="height: 100px"></div>
          <div class="index_2_2_1_1" @mouseenter="haha1" @mouseleave="xixia">
            <img class="zhinenghuankuang1" :src="liu1"/>
              <div style="position: relative;left: 120px;top: -30px;">智能还款</div>
              <div style="height: 5px;"></div>
            <p style="display: inline-block;color: #999999;position: relative;left: 120px;top: -40px;">一键托管，真实消费，美化账单，利于提额。</p>
          </div>
          <div class="index_2_2_1_2" @mouseenter="haha2" @mouseleave="xixia"><img class="zhinenghuankuang1" :src="liu2"/>
            <div style="position: relative;left: 120px;top: -30px;">快捷支付</div>
            <div style="height: 5px;"></div>
            <p style="display: inline-block;color: #999999;position: relative;left: 120px;top: -40px;">极速到账，24H服务，资金安全，超低费用。</p></div>
          <div class="index_2_2_1_3" @mouseenter="haha3" @mouseleave="xixia"><img class="zhinenghuankuang1" :src="liu3"/>
            <div style="position: relative;left: 120px;top: -30px;">违章代缴</div>
            <div style="height: 5px;"></div>
            <p style="display: inline-block;color: #999999;position: relative;left: 120px;top: -40px;">一键处理，全国联网，极速查询，在线缴费。</p></div>
          <div class="index_2_2_1_4" @mouseenter="haha4" @mouseleave="xixia"><img class="zhinenghuankuang1" :src="liu4"/>
            <div style="position: relative;left: 120px;top: -30px;">在线办卡</div>
            <div style="height: 5px;"></div>
            <p style="display: inline-block;color: #999999;position: relative;left: 120px;top: -40px;">一键申请，极低门槛，大额授信，快速下卡。</p></div>
        </div>
        <img src="../assets/index/车卡.png" alt="" style="position: relative;left: 60px;width:524px;height:354px;">
      </div>
    </div>
    <div style="height: 50px"></div>
    <div class="index_3" style="text-align: center">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;color:rgba(255,255,255,1);">为什么选择360°车卡管家？</div>
      <div style="height: 85px"></div>
      <div class="index_3_1" style="width: 1000px;margin: 0 auto;">
        <div class="index_3_1_1" style="margin-right: 3px;" @mouseenter="haha5" @mouseleave="xixiaa">
          <div class="index_3_1_2_1" style="height: 10px;background: #FFFFFF"></div>
          <div style="background: #FFFFFF;opacity: 0.7;text-align: center;padding: 20px 50px 0 50px">
            <img :src="pan1" alt="">
            <p class="index_3_1_1_1" style="position: relative;top: -10px;font-size: 25px">产品功能优</p>
          </div>
        </div>
        <div class="index_3_1_2" style="margin-right: 8px" @mouseenter="haha6" @mouseleave="xixiaa">
          <div class="index_3_1_2_2" style="height: 10px;background: #FFFFFF"></div>
          <div style="background: #FFFFFF;opacity: 0.7;text-align: center;padding: 20px 50px 0 50px">
            <img :src="pan2" alt="">
            <p class="index_3_1_1_2" style="position: relative;top: -10px;font-size: 25px">安全保障多</p>
          </div>
        </div><div class="index_3_1_3" style="margin-right: 8px" @mouseenter="haha7" @mouseleave="xixiaa">
        <div class="index_3_1_2_3" style="height: 10px;background: #FFFFFF"></div>
        <div style="background: #FFFFFF;opacity: 0.7;text-align: center;padding: 20px 50px 0 50px">
          <img :src="pan3" alt="">
          <p class="index_3_1_1_3" style="position: relative;top: -10px;font-size: 25px">服务费用低</p>
        </div>
      </div><div class="index_3_1_4" style="margin-right: 8px" @mouseenter="haha8" @mouseleave="xixiaa">
        <div class="index_3_1_2_4" style="height: 10px;background: #FFFFFF"></div>
        <div style="background: #FFFFFF;opacity: 0.7;text-align: center;padding: 20px 50px 0 50px">
          <img :src="pan4" alt="">
          <p class="index_3_1_1_4" style="position: relative;top: -10px;font-size: 25px">公司实力强</p>
        </div>
      </div>
        <div></div>
        <div>
          <div style="width: 195px;background: #FFFFFF;display: inline-block;padding-left: 15px;padding-right: 15px;position: relative;left: -9px;top: -25px;opacity: 0;height: 90px;color: #999999;" class="name1">
            集信用卡智能还款、快捷支付、
            在线办理和违章代缴于一体，智
            能便捷办于一体，智能便捷.
          </div>
          <div style="width: 195px;background: #FFFFFF;display: inline-block;padding-left: 15px;padding-right: 15px;position: relative;left: -6px;top: -25px;opacity: 0;height: 90px;color: #999999;" class="name2">
           
            中国银联合作、阳光保险护航，

资金和卡片都安全<span style="visibility: hidden;">集信用卡智能还款、快捷支付、</span> 
          </div>
          <div style="width: 195px;background: #FFFFFF;display: inline-block;padding-left: 15px;padding-right: 15px;position: relative;left: -2px;top: -25px;opacity: 0;height: 90px;color: #999999;" class="name3">
            还万元账单仅需78元，

快捷支付万元仅需60元<span style="visibility: hidden;">集信用卡智能还款、wqwqwq快捷支付、</span> 
          </div>
          <div style="width: 195px;background: #FFFFFF;display: inline-block;padding-left: 15px;padding-right: 15px;position: relative;left: 1px;top: -25px;opacity: 0;height: 90px;color: #999999;" class="name4">
            平台由三家实力金融公司联合打造

运营经验丰富<span style="visibility: hidden;">集信用卡智能还款、快捷ddsdsdsd支付、</span> 
          </div>
          <div style="height: 30px;"></div>
        </div>
      </div>
    </div>
    <div class="index_4" style="text-align: center;">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">更多功能展示</div>
      <div style="height: 89px;"></div>
      <div class="index_4_2" style="width: 1000px;height: 730px;margin: 0 auto;cursor: pointer;">
        <div>
          <div class="index_4_1" id="pan1" @mouseenter="liupan1" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
            <div><img :src="index1" alt="" style="width: 50px;height: 50px;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px">智能还款</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;font-size: 14px;height: 60px;">
              5%的卡内可用额度就可
              全额还款，避免逾期
              <div style="line-height: 20px;visibility: hidden">ssss</div>
            </div>
          </div>
          <div class="index_4_1" id="pan2" @mouseenter="liupan2" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
            <div><img :src="index2" alt="" style="width: 50px;height: 50px;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px">快速提额</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;;font-size: 14px;height: 60px;">

              全国落地商户消费带积分
              有利于提额<div style="line-height: 20px;visibility: hidden">ssss</div>
            </div>
          </div>
          <div class="index_4_1" id="pan3" @mouseenter="liupan3" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF">
            <div><img :src="index3" alt="" style="width: 50px;height: 50px;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px">账单管理</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;font-size: 14px;height: 60px;">

              本月消费还款清单一目了
              然，还款进度实时掌握

            </div>
          </div>
          <div class="index_4_1" id="pan4" @mouseenter="liupan4" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
            <div><img :src="index4" alt="" style="width: 50px;height: 50px;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px">美化账单</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;font-size: 14px;height: 60px;">

              智能模拟用户的真实消费
              习惯，自动生成多元化场
              景消费账单

            </div>
          </div>

        </div>
        <div style="position: relative;top: 8px;">
        <div class="index_4_1" id="pan5" @mouseenter="liupan5" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF">
          <div><img :src="index5" alt="" style="width: 50px;height: 50px;"></div>
          <div style="height: 30px;"></div>
          <div style="color:#303030;font-size: 24px">快捷支付</div>
          <div style="height: 5px"></div>
          <div style="color: #999999;font-size: 14px;height: 60px;">

            一键激活信用卡小金库
            优化资金配置，轻松实现
            个人无卡支付和收款

          </div>
        </div>
        <div class="index_4_1" id="pan6" @mouseenter="liupan6" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
          <div><img :src="index6" alt="" style="width: 50px;height: 50px;"></div>
          <div style="height: 30px;"></div>
          <div style="color:#303030;font-size: 24px">在线办卡</div>
          <div style="height: 5px"></div>
          <div style="color: #999999;;font-size: 14px;height: 60px;">

            在线一键申请各大银行的
            信用卡，门槛低、额度高
            下卡快

          </div>
        </div>
        <div class="index_4_1" id="pan7" @mouseenter="liupan7" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF">
          <div><img :src="index7" alt="" style="width: 50px;height: 50px;"></div>
          <div style="height: 30px;"></div>
          <div style="color:#303030;font-size: 24px">违章查询</div>
          <div style="height: 5px"></div>
          <div style="color: #999999;font-size: 14px;height: 60px;">

            全国各地车辆可异地销分
            免去中介烦恼
            <div style="line-height: 20px;visibility: hidden">ssss</div>


          </div>
        </div>
        <div class="index_4_1" id="pan8" @mouseenter="liupan8" @mouseleave="xixi" style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
          <div><img :src="index8" alt="" style="width: 50px;height: 50px;"></div>
          <div style="height: 30px;"></div>
          <div style="color:#303030;font-size: 24px">违章代缴</div>
          <div style="height: 5px"></div>
          <div style="color: #999999;font-size: 14px;height: 60px;">

            在线一键缴费，节约车管
            所排队时间
            <div style="line-height: 20px;visibility: hidden">ssss</div>

          </div>
        </div>

      </div>
        <div style="position: relative;top: 15px;">
          <div class="index_4_1" id="pan9" @mouseenter="liupan9" @mouseleave="xixi"  style="width: 145px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;">
            <div><img :src="index9" alt="" style="width: 50px;height: 50px;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px">预约年检</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;font-size: 14px;height: 60px;">

              提供相关资料，便可提供
              车辆年检服务，解决异地
              用车问题

            </div>
          </div>
          <div class="index_4_1"  style="width: 605px;display: inline-block;height: 145px;padding: 40px;background: #FFFFFF;position: relative;top: -19px;">
            <div><img :src="index2" alt="" style="width: 50px;height: 50px;opacity: 0;"></div>
            <div style="height: 30px;"></div>
            <div style="color:#303030;font-size: 24px;opacity: 0;">快速提额</div>
            <div style="height: 5px"></div>
            <div style="color: #999999;;font-size: 14px;height: 60px;opacity: 0;">

              全国落地商户消费带积分
              有利于提额
              用车问题
              全国落地商户消费带积分
              有利于提额
              用车问题全国落地商户消费带积分
              有利于提额
              用车问题

            </div>
          </div>

        </div>




      </div>
    </div>
    <div class="index_5">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;text-align: center;">新闻资讯</div>
      <div class="news_1" style="width: 100vw;">
			<div style="width: 980px;background: #FFFFFF;margin: 0 auto;padding-bottom: 0;cursor: pointer;">
				<div @click="qq(1)" class="news_1_1" @mouseenter="ww(1)" @mouseleave="xixiaaa" style="width: 900px;margin: 40px;padding-left: 40px;">
					<div style="height: 40px;"></div>
					<div style="display: inline-block;width: 200px;"><img src="../assets/news/xinwenzixun-1.png" style="height: 160px;"/></div>
					<div style="display: inline-block;width: 600px;position: relative;left: 100px;">
						<div style="color: #333333;font-size: 20px;">360°车卡管家受邀参加中国企业智能营销创新峰会</div>
						<div style="height: 20px;"></div>
						<div style="color: #999999;"> 2018-05-31</div>
						<div style="height: 20px;"></div>
						<div style="color: #999999;font-size: 12px;width: 580px;height: 80px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;">
                            5月28日，以“智联万物 营创新篇”为主题的2018中国企业智能营销创新峰会在长沙万达文华酒店举行，此次活
动由百度主办、湖南省广告协会协办、湖南竞网集团承办。360°车卡管家作为百度的长期合作伙伴有幸受邀，推
广部和培训部的主管代表公司参加了本次峰会。她们认真的聆听了百度公司各位领导的精彩分享，了解到2018年
推广营销的重点和新方向，带去的疑问在会上都找到了答案。本次会议对于360°车卡管家未来的推广运营...
                        </div>
					</div>
					<div style="height: 20px;"></div>
				</div>
				<div @click="qq(2)" class="news_1_2" @mouseenter="ww(2)" @mouseleave="xixiaaa" style="width: 900px;margin: 40px;padding-left: 40px;">
					<div style="height: 40px;"></div>
					<div style="display: inline-block;width: 200px;"><img src="../assets/news/xinwenzixun-5.png" style="height: 160px;"/></div>
					<div style="display: inline-block;width: 600px;position: relative;left: 100px;">
						<div style="color: #333333;font-size: 20px;">360°车卡管家江苏省各市县招商会盛大举行</div>
						<div style="height: 20px;"></div>
						<div style="color: #999999;"> 2018-05-31</div>
						<div style="height: 20px;"></div>
						<div style="color: #999999;font-size: 12px;width: 580px;height: 80px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 5;overflow: hidden;">
                            
                            5月26日，360°车卡管家江苏省招商会在江苏省无锡国际饭店举行。江苏省，地处长三角经济区，是全国最富裕的
省份之一。江苏省信用卡市场巨大，用户活跃，因此本次招商会受到360°车卡管家总部的高度重视，总部总经理杨
总、市场总监梁总亲临招商会现场全程扶持。
                        
                        </div>
					</div>
					<div style="height: 20px;"></div>
				</div>
				
			</div>
		</div>
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
    <div class="index_7" style="text-align: center;background: #FAFAFA">
      <div style="height: 50px;"></div>
      <div style="font-size:30px;font-family:MicrosoftYaHei;font-weight:400;">合作伙伴</div>
      <div style="height: 50px;"></div>
      <div style="width: 900px;margin: 0 auto;cursor: pointer">
        <img src="../assets/index/xinye.png" id="liupan10" @mouseenter="liupan10" @mouseleave="xixi1" alt="" style="width: 220px;">
        <img src="../assets/index/jianshe.png" id="liupan11" @mouseenter="liupan11" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/minsheng.png" id="liupan12" @mouseenter="liupan12" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/zhaoshnag.png"id="liupan13" @mouseenter="liupan13" @mouseleave="xixi1" alt="" style="width: 220px">
      </div>
      <div style="width: 900px;margin: 0 auto;cursor: pointer">
        <img src="../assets/index/jiaotong.png" id="liupan14" @mouseenter="liupan14" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/nongye.png" id="liupan15" @mouseenter="liupan15" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/gongshang.png" id="liupan16" @mouseenter="liupan16" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/zhongguoyinhang.png" id="liupan17" @mouseenter="liupan17" @mouseleave="xixi1" alt="" style="width: 220px">
      </div>
      <div style="width: 900px;margin: 0 auto;cursor: pointer">
        <img src="../assets/index/youzheng.png" id="liupan18" @mouseenter="liupan18" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/guangda.png" id="liupan19" @mouseenter="liupan19" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/zhongguoyinlian.png" id="liupan20" @mouseenter="liupan20" @mouseleave="xixi1" alt="" style="width: 220px">
        <img src="../assets/index/zhifubao.png" id="liupan21" alt="" @mouseenter="liupan21" @mouseleave="xixi1" style="width: 220px">
      </div>
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
    zhan(){
      this.$router.push('/tactic')
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
      $('#liupan10').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan11').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan12').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan13').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan14').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan15').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan16').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan17').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan18').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan19').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan20').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
      $('#liupan21').attr("style",'width: 220px;box-shadow: 10px -1px 12px 0px rgba(55,55,55,0.1);position: relative;top: -10px;');
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
    	let _this = this;
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
      _this.pan1 = women1
      _this.pan2 = women2
      _this.pan3 = women3
      _this.pan4 = women4
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
    },
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
    background: red;
    width: 100vw;
    height: 600px;
    background:url("../assets/index/banner2.png");
    background-size: cover;
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
  
</style>
