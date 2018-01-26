<template>
	<div>
		<section class="sectionBox">
			<div class="info pb0">
				<div class="f16 bold mtop10 p010" style="line-height:20px; margin-top:10px">${product.name }</div>
				<div class="message p010">
					<span>${product.desc}</span>
				</div>
				<div class="special bordertopgrey mtop10">
					<div class="market-price p010 f12">原价：￥${product.price}</div>
					<div class="hot-price f16 p010 mtop5">精选价：<span class="red bold">￥${product.priceDiscount }</span></div>
					<div class="p010 grey mtop5">${product.defaultDeliveryName }</div>
					<c:if test="${not empty product.sosName }">
						<div class="p010 grey mtop5">来自：
							<a <c:if test="${not empty product.sosIntroduceUrl }"> class="blue" href="${product.sosIntroduceUrl }"</c:if>
					<c:if test="${empty product.sosIntroduceUrl }"> class="grey" href="javascript:void(0)"</c:if> >${product.sosName }</a>
					</div>
					</c:if>
					<div class="p010 grey mtop5">${themeAdDesc }</div>
				</div>
				<div class="item-standard readonly-box">
					<div>
						<div class="number disbox p010">
							<div class="name grey">数量</div>
							<div class="btn-num btnReduce border-left-radius">-</div>
							<input class="input-normal w80 itemNum border-black" maxlength="3" type="text" value="1" />
							<div class="btn-num btnAdd border-right-radius">+</div>
						</div>
					</div>
				</div>

				<c:if test="${product.filmStatus eq 1}">
					<section class="divide-box borderbottomgrey"></section>
					<div class="list-box bgwhite">
						<a class="displaybox" href="${product.filmLookUrl}">
							<div class="item-standard-name height36 f16 boxflex01">支持在线订座的影院</div>
							<div class="box-arrow t-right grey"></div>
						</a>
					</div>
					<section class="divide-box bordertbgrey"></section>
					<div class="list-box bgwhite borderbottomgrey">
						<a class="displaybox" href="${product.filmPayUrl}">
							<div class="item-standard-name height36 f16 boxflex01">在线订座<span class="bgred icon-new">new</span></div>
							<div class="box-arrow t-right grey"></div>
						</a>
					</div>
				</c:if>
				<section class="divide-box"></section>
				<ul class="item-price f16 borderbottom" style="padding:12px 10px;">
					<li class="left"><img style="width:15px; vertical-align:middle; margin-top:-2px;" src="../../static/images/phone-icon.png" /> 客服电话</li>
					<li class="right">
						<a href="tel:0755-86713324">0755-86713324</a>
					</li>
				</ul>
			</div>
		</section>
		<section class="divide-box"></section>
		<section id="tabBox" class="tabBox">
			<div class="hd tab-head borderbottomgrey">
				<ul>
					<li class="wp50 on">
						<a href="javascript:void(0)">介绍</a>
					</li>
					<li class="wp50">
						<a href="javascript:void(0)">参数</a>
					</li>
				</ul>
			</div>
			<div class="bd" id="tabBox-bd">
				<div class="con bgwhite">
					<div id="tabOne" class="p010">
						<div class="info pt10 lineheight0">
							<c:choose>
								<c:when test="${not empty product.ebuyProductIntroducePicBigList}">
										<img class="item-pic-big" src="${tmpPic}<c:choose><c:when test=" ${fn:contains(tmpPic, '?')} ">&</c:when><c:otherwise>?</c:otherwise></c:choose>x-oss-process=image/resize,w_560/format,jpg/quality,q_95/interlace,1" />
								</c:when>
								<c:otherwise>
									<div class="img-desc-text-box t-center">该商品暂无图文介绍</div>
								</c:otherwise>
							</c:choose>
						</div>
					</div>
				</div>
				<div class="con bgwhite" style="display:none">
					<div id="tabTwo" class="p010">
						<div class="info pt10">
									<table class="bordered grey">
											<tr>
												<td>${pp.tPropName }</td>
												<td>${pp.tPropValue }</td>
											</tr>
									</table>
									<div class="img-desc-text-box t-center">该商品暂无参数</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<div id="gotop" class="go-top" style="display:none;"><img src="../../static/images/icon-gotop.png" /><br/>顶部</div>

		<section class="sectionBox readonly-box">
			<section class="pbfooter"></section>
			<div class="exchang-fixed displaybox">
				<div class="shopping-cart bggradient">
					<a href="../cart/qryBuyCar.do">
						<div id="cartNum" class="item-num bgred">${productCount.productCount }</div>
						<img src="../../static/images/shoppingcart-black.png" />
					</a>
				</div>
				<div class="btn-fixed boxflex01">
					<div id="btnCart" class="btn-cart wp50 left">
						<a class="bgred" href="javascript:void(0)">加入购物车</a>
					</div>
					<div id="fromStoreBtn" class="btn-cart wp50 left">
						<a id="buyNowBtn" class="bgorange" href="../cart/buyRightNow.do?ptId=${product.id }&jfqsource=buyRightNow">立即购买</a>
					</div>
				</div>
			</div>
		</section>
		<section class="pop-tips dsn">
			<div class="pop-tips-text">请选择</div>
		</section>
	</div>
</template>

<script>
	import Vue from 'vue'
	import '../../static/css/common.css'
</script>

<style>

</style>