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
			<section class="sectionBox">
				<swiper class="m010 mtop10 slideBox store-banner box-shadow" :options="bannerOptions">
					<swiper-slide v-for="(item, index) in adList" :key="index">
						<img :src="item.pic">
					</swiper-slide>
					<div class="swiper-pagination" slot="pagination"></div>
				</swiper>
			</section>
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
				<div class="height36">
					<swiper class="m010 borderbottomgrey" :options="itemTypeOptions">
						<swiper-slide v-for="(item, index) in itemTypes" :key="index" class="ptb10 t-center" :class="index === curItemTypeIndex ? 'red':''" @click.native.stop="getItemList(item.id, index, changeItemType)">{{item.typeName}}</swiper-slide>
					</swiper>
				</div>

				<div id="tabBox-bd">
					<div class="con p010 bgwhite">
						<div id="storeListBox" class="p010 storelist-minheight">
							<ul class="displaybox boxalignend pos-relative mtop5 pt10 store-item t-left" v-for="(item, index) in itemList">
								<li class="store-item-img radius4 overhidden" prdtId="1">
									<router-link to="/ItemDetails">
										<img class="bgloading bgsize110" data-original="../../static/images/prev_img.jpg" src="../../static/images/pixel.gif">
									</router-link>
								</li>
								<li class="boxflex01 f16 m010 mb5 lineheight110">
									<router-link to="/ItemDetails">
										<div class="store-item-title">
											<div class="store-item-name word-break1">{{item.name}}</div>
											<div class="store-item-desc mtop2 f12 grey word-break1">{{item.nameMini}}</div>
										</div>
										<div class="red"><span class="f12">精选价 </span>￥<span class="store-item-price">{{item.priceOnShelf}}</span></div>
										<div class=""><span class="line-through f12 grey">原价 ￥<span class="market-price">{{item.price}}</span></span>
										</div>
									</router-link>
									<div class="store-supplier grey f12 dsn">来自
										<a class="supplier-name mleft10 grey" href="javascript:void(0)">解放区平台</a>
									</div>
								</li>
								<li class="join-btn store-shoppingcart" @click="addCartEvent(item.id)" leftCount="10"><img src="../../static/images/icon_redcart.png"></li>
							</ul>
							<!--<div class="sectionBox loading grey mtop10 newloading"><img src="../../static/images/loading01.gif" /> 加载中…</div>-->
							<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
								<loading :loadingShow="loadingShow" :showIcon="showIcon" :loadingText="loadingText"></loading>
							</div>
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
	import infiniteScroll from 'vue-infinite-scroll'

	Vue.use(VueSwiper)

	Vue.use(VueMessage, {
		duration: 2000
	})

	Vue.use(loading)

	Vue.use(infiniteScroll)

	export default {
		name: 'Store',
		data() {
			return {
				commonUrl: '../common/toUrl.do',
				itemTypes: [],
				itemList: [],
				page: 1,
				pageNum: 5,
				hasNext: true,
				adList: [{
						url: '/supplierInfo/supplier03.htm',
						pic: '@/../static/images/supplier_a_01.jpg'	//此处路径为@/../static/images/，build后才可以显示；使用../../static/images/，build后不显示
					},
					{
						url: '/supplierInfo/supplier03.htm',
						pic: '@/../static/images/supplier_b_01.jpg'
					},
					{
						url: '/supplierInfo/supplier03.htm',
						pic: '@/../static/images/supplier_c_01.jpg'
					}
				],
				curItemTypeIndex: 0,
				curItemTypeId: '',
				changeItemType: true,

				//vue-loading-tips props
				loadingShow: true,
				showIcon: true,
				loadingText: '正在加载了',
				
				//vue-infinite-scroll，默认为true，等待itemTypes请求完成后，再开始执行this.loadMore()请求商品
				busy: true,

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
//			this.getItemTypes();

			//获取设置购物车数量
//			this.setCartEvent(8);

			const hasGotItemTypes = new Promise(this.getItemTypes);
			
			hasGotItemTypes.then((data) => {
				this.setCartEvent(data.shopPicList.length);
			}).then((data) => {
				this.busy = false;
				this.loadMore();
			}).catch((err) => {
				console.log(err);
			})
			
			//遇到/API则直接通过http://api.linlile.com.cn进行访问
			this.$axios.get('/API/ebuyV2/qryStoreInfo.json', {
				params: {supplyMerchantId:10012278}
			})
		},
		computed: {
			cartCount() {
				return this.$store.state.cartCount;
			}
		},
		methods: {
			//get传参方式 获取商品类型
			getItemTypes(resolve) {
				let dataParams = {
					'detailUrl': '/ebuyV2/qryStoreInfo.json',
					'supplyMerchantId': this.$route.query.storeId
				}

				this.$axios.get(this.commonUrl, {
					params: dataParams
				}).then((res) => {
					if(res.data.status === '0000') {
						this.itemTypes = res.data.dataValue.ebuyProdTypeList;

						this.curItemTypeId = this.itemTypes[0].id;
						console.log('请求商品类型完成');
						//通知promise执行状态
						resolve(res.data.dataValue);
					}
				})
			},
			//获取商品列表
			getItemList(productTypeId = this.itemTypes[0].id, index = 0, changeItemType) {
				
				//在当前标签下：继续点击当前标签，返回；或继续滚动触发loadMore事件，返回。
				if((this.curItemTypeIndex === index && changeItemType) || (this.curItemTypeIndex === index && this.busy)){
					return;
				}
				
				//如果curItemTypeIndex不是当前类型，则设置为当前类型索引
				if(this.curItemTypeIndex !== index) {
					//点击新标签，如果当前标签正在加载商品，返回。
					if(this.busy){
						return;
					}
					this.curItemTypeIndex = index;
					//切换商品类型，初始化列表、页数
					this.itemList = [];
					this.page = 1;
					this.hasNext = true;
					
					this.loadingText = '加载中';
					this.showIcon = true;
				}
				
				//当前标签hasNext为false，返回。
				if(!this.hasNext) {
					this.busy = false;
					this.loadingText = '已加载到最后一页';
					this.showIcon = false;
					return;
				}

				//开始请求商品，设置busy为true
				this.busy = true;
				let dataParams = {
					'detailUrl': '/ebuyV2/qryProdList4ExperienceStore.json',
					'storeId': this.$route.query.storeId,
					'supplyType': 2,
					'productTypeId': productTypeId,
					'page': this.page,
					'pageNum': this.pageNum
				}

				this.curItemTypeId = productTypeId;
				this.$axios.get(this.commonUrl, {
					params: dataParams
				}).then((res) => {
					if(res.data.status === '0000') {
						//如果curItemTypeIndex不是当前类型，则将itemList全部替换为新返回的商品列表
						if(this.curItemTypeIndex !== index) {
							this.itemList = res.data.dataValue.productList;
						//如果curItemTypeIndex是当前类型，则将新返回的商品列表累加到itemList里
						} else {
							this.itemList = this.itemList.concat(res.data.dataValue.productList)
						}

						this.page++;
						this.hasNext = res.data.dataValue.hasNext;
						this.busy = false;
						console.log('请求商品列表完成');
					}
				})
			},
			//初始化购物车
			setCartEvent(num) {
				this.$store.commit('setCart', num);
				console.log('设置购物车数量完成');
				return '设置购物车数量完成';
			},
			//增加购物车数量
			addCartEvent(productId) {
				this.$store.commit('addCart', 1);
				this.$showMsg('已加入购物车');
			},

			loadMore() {
				//获取第一个类型商品
				const itemTypeId = this.curItemTypeId;
				const itemTypeIndex = this.curItemTypeIndex;

				this.getItemList(itemTypeId, itemTypeIndex);
			},
		}
	}
</script>

<style scoped="scoped">
	.height36 {
		height: 36px;
	}
</style>