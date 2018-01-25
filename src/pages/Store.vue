<template>
	<section>
		<!-- 悬浮购物车 -->
		<div class="float-menu">
			<div class="coupon-list-icon borderrightwhite">
				<a href="../coupon/couponList.do">
					<img class="w22" src="../../static/images/icon_coupon_white.png" />
				</a>
			</div>
			<div class="shopping-cart-index">
				<a id="shoppingCartBtn" href="../cart/qryBuyCar.do">
					<!-- 轻应用进入 -->
					<div id="cartNum" class="item-num bgwhite">{{cartCount}}</div>
					<!-- app进入 -->
					<div id="cartNum" class="item-num bgwhite">{{cartCount}}</div>
					<img src="../../static/images/shoppingcart-white-new.png" />
				</a>
			</div>
		</div>

		<div class="main-part01 pos-relative">

			<section id="storeInfo" class="sectionBox pt10 displaybox opacity0 dsn">
				<div class="boxflex01 mleft10">
					<img class="w13 aligntop" src="../../static/images/icon-person.png">
					<span id="viewCount"></span>
				</div>
				<div class="t-right displaybox">
					<div class="borderright">
						<a id="storeSearch" class="p10" href="storeSearch.html?storeId=${param.storeId}&jfqsource=jfqstore">
							<img class="w13 aligntop" src="../../static/images/search-icon.png">
						</a>
					</div>
					<a id="storePhoneLink" class="p10" href="tel:">
						<img class="w13 aligntop" src="../../static/images/icon-phone.png">
					</a>
				</div>
			</section>

			<!--<section id="slideBox" class="slideBox store-banner box-shadow mtop10">
				<div class="bd noborder">
					<ul id="storeBanner">
						<li>
							<a href="/supplierInfo/supplier03.htm"><img class="radius4" src="../../static/images/supplier_c_01.jpg" /></a>
						</li>
						<li>
							<a href="/supplierInfo/supplier01.htm"><img class="radius4" src="../../static/images/supplier_a_01.jpg" /></a>
						</li>
						<li>
							<a href="/supplierInfo/supplier02.htm"><img class="radius4" src="../../static/images/supplier_b_01.jpg" /></a>
						</li>
					</ul>
					<li class="banner-li">
						<a href="javascript:void(0)"><img class="radius4" src="../../static/images/supplier_b_01.jpg" /></a>
					</li>
				</div>
				<div class="hd">
					<ul></ul>
				</div>
			</section>-->

			<!-- swiper banner -->
			<swiper class="m010 slideBox store-banner box-shadow" :options="bannerOptions">
				<swiper-slide v-for="(item, index) in adList" :key="index">
					<img :src="item.pic">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<!--<section class="sectionBox ptb15">
			<ul class="mleft10">
				<li>
					<img class="w10" style="vertical-align: text-bottom;" src="../../static/images/icon-location-new.png">
					<span class="mleft5">深圳市南山区蛇口工业七路爱榕路61号22</span>
				</li>
				<li class="mtop5">
					<img class="w10" src="../../static/images/icon-delivery.png">
					<span class="mleft5">3公里范围内，满79元包配送，不满加5元配送</span>
				</li>
			</ul>
		</section>-->

			<section id="tabBox" class="tabBox bgwhite pos-relative overvisible">
				<h3 class="common-title f18 pleft10" style="padding-bottom: 8px;">优选精品</h3>

				<!-- swiper -->
				<swiper class="m010 borderbottomgrey" :options="itemTypeOptions">
					<swiper-slide v-for="(item, index) in itemTypes" :key="index" class="ptb10" :class="index === curItemTypes ? 'red':''" @click.native.stop="getItemList(item.id, index)">{{item.typeName}}</swiper-slide>
				</swiper>

				<div id="tabBox-bd">
					<div class="con p010 bgwhite">
						<div id="storeListBox" class="p010 storelist-minheight">
							<ul class="displaybox boxalignend pos-relative mtop5 pt10 store-item t-left" v-for="(item, index) in itemList">
								<li class="store-item-img radius4 overhidden" prdtId="1">
									<a class="item-link" data-itemid="121895" href="#">
										<img class="bgloading bgsize110" data-original="../../static/images/prev_img.jpg" src="../../static/images/pixel.gif">
									</a>
								</li>
								<li class="boxflex01 f16 m010 mb5 lineheight110">
									<a class="item-link" data-itemid="121895" href="#" target="_blank">
										<div class="store-item-title">
											<div class="store-item-name word-break1">{{item.name}}</div>
											<div class="store-item-desc mtop2 f12 grey word-break1">{{item.nameMini}}</div>
										</div>
										<div class="red"><span class="f12">精选价 </span>￥<span class="store-item-price">{{item.priceOnShelf}}</span></div>
										<div class=""><span class="line-through f12 grey">原价 ￥<span class="market-price">{{item.price}}</span></span>
										</div>
									</a>
									<div class="store-supplier grey f12 dsn">来自
										<a class="supplier-name mleft10 grey" href="javascript:void(0)">解放区平台</a>
									</div>
								</li>
								<li class="join-btn store-shoppingcart" @click="addCartEvent(item.id)" leftCount="10"><img src="../../static/images/icon_redcart.png"></li>
							</ul>
							<!--<div class="sectionBox loading grey mtop10 newloading"><img src="../../static/images/loading01.gif" /> 加载中…</div>-->
							<loading :loadingShow="loadingShow" :showIcon="showIcon" :loadingText="loadingText"></loading>
						</div>
					</div>
				</div>
			</section>
		</div>
	</section>
</template>

<script>
	import Vue from 'vue'
	import '../../static/css/common.css'

	import 'swiper/dist/css/swiper.css'
	import VueSwiper from 'vue-awesome-swiper'
	import VueMessage from 'vue-show-message'
	import loading from 'vue-loading-tips'

	Vue.use(VueSwiper)

	Vue.use(VueMessage, {
		duration: 2000
	})

	Vue.use(loading)

	export default {
		name: 'Store',
		data() {
			return {
				commonUrl: '../hostname/common/toUrl.do', //开发环境，接口代理到本地，前面加上/hostname
				//commonUrl: '../common/toUrl.do', //build 正式环境
				itemTypes: [],
				itemList: [],
				page: 1,
				pageNum: 5,
				hasNext: true,
				adList: [
					{
						url: '/supplierInfo/supplier03.htm',
						pic: '../../static/images/supplier_a_01.jpg'
					},
					{
						url: '/supplierInfo/supplier03.htm',
						pic: '../../static/images/supplier_b_01.jpg'
					},
					{
						url: '/supplierInfo/supplier03.htm',
						pic: '../../static/images/supplier_c_01.jpg'
					}
				],
				curItemTypes: 0,

				//vue-loading-tips props
				loadingShow: true,
				showIcon: true,
				loadingText: '正在加载了',

				//swiper options
				itemTypeOptions: {
					slidesPerView: 4.5,
					spaceBetween: 30,
					freeMode: true
				},
				bannerOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoPlay: true
				}

			}
		},
		mounted() {
			//获取商品类型
			this.getItemTypes();

			//获取设置购物车数量
			this.setCartEvent(8);
		},
		computed: {
			cartCount() {
				return this.$store.state.cartCount;
			}
		},
		methods: {
			//get传参方式 获取商品类型
			getItemTypes() {
				let dataParams = {
					'detailUrl': '/ebuyV2/qryStoreInfo.json',
					'supplyMerchantId': this.$route.query.storeId
				}

				this.$axios.get(this.commonUrl, {
					params: dataParams
				}).then((res) => {
					if(res.data.status === '0000') {
						this.itemTypes = res.data.dataValue.ebuyProdTypeList;

						//获取第一个类型商品
						const firstTypeId = this.itemTypes[0].id;
						this.getItemList(firstTypeId, 0);
					}
				})
			},
			//获取商品列表
			getItemList(productTypeId, index) {
				let dataParams = {
					'detailUrl': '/ebuyV2/qryProdList4ExperienceStore.json',
					'storeId': this.$route.query.storeId,
					'productTypeId': productTypeId,
					'supplyType': 2,
					'page': this.page,
					'pageNum': this.pageNum
				}

				this.curItemTypes = index;
				this.$axios.get(this.commonUrl, {
					params: dataParams
				}).then((res) => {
					if(res.data.status === '0000') {
						this.itemList = res.data.dataValue.productList;
						this.hasNext = res.data.dataValue.hasNext;
					}
				})
			},
			//初始化购物车
			setCartEvent(num) {
				this.$store.commit('setCart', num);
			},
			//增加购物车数量
			addCartEvent(productId) {
				this.$store.commit('addCart', 1);
				this.$showMsg('已加入购物车');
			}
		}
	}
</script>

<style>

</style>