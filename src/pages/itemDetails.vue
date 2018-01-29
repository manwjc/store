<template>
	<div>
		<!-- swiper banner -->
		<section class="sectionBox">
			<swiper class="m010 mtop10 slideBox store-banner box-shadow" :options="bannerOptions">
				<swiper-slide v-for="(item, index) in adList" :key="index">
					<img :src="item.pic">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</section>
		<section class="sectionBox">
			<div class="info pb0">
				<div class="f16 bold mtop10 p010" style="line-height:20px; margin-top:10px">{{productList.productName }}</div>
				<!--<div class="message p010">
					<span>${product.desc}</span>
				</div>-->
				<div class="special bordertopgrey mtop10">
					<div class="market-price p010 f12">原价：￥{{productList.price}}</div>
					<div class="hot-price f16 p010 mtop5">精选价：<span class="red bold">￥{{productList.priceDiscount }}</span></div>
					<div class="p010 grey mtop5">供应商：{{productList.defaultDeliveryName }}</div>
				</div>
				<div class="item-standard readonly-box">
					<div>
						<div class="number disbox p010">
							<div class="name grey">数量</div>
							<div class="btn-num btnReduce border-left-radius" @click="editProductNum('minus')">-</div>
							<input class="input-normal w80 itemNum border-black" maxlength="3" type="text" v-model.number="productNum" />
							<div class="btn-num btnAdd border-right-radius" @click="editProductNum('add')">+</div>
						</div>
					</div>
				</div>
				<template v-if="productList.cinemaItem">
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
				</template>
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
			<!-- swiper -->
			<div class="swiper-container pos-relative">
				<div class="hd tab-head borderbottomgrey">
					<ul>
						<li class="wp50 slide-tab1 on">
							<a href="javascript:void(0)">介绍</a>
						</li>
						<li class="wp50 slide-tab2">
							<a href="javascript:void(0)">参数</a>
						</li>
					</ul>
				</div>
				<div class="swiper-pagination-tab displaybox"></div>
				<swiper class="m010 borderbottomgrey" :options="itemInfoOptions" ref="mySwiper">
					<swiper-slide class="ptb10">介绍内容</swiper-slide>
					<swiper-slide class="ptb10">参数内容</swiper-slide>
				</swiper>
			</div>

			<!--<div class="hd tab-head borderbottomgrey">
				<ul>
					<li class="wp50 on">
						<a href="javascript:void(0)">介绍</a>
					</li>
					<li class="wp50">
						<a href="javascript:void(0)">参数</a>
					</li>
				</ul>
			</div>-->
			<div class="bd" id="tabBox-bd">
				<div class="con bgwhite">
					<div id="tabOne" class="p010">
						<div class="info pt10 lineheight0">
							<img class="item-pic-big" src="?x-oss-process=image/resize,w_560/format,jpg/quality,q_95/interlace,1" />
							<div class="img-desc-text-box t-center">该商品暂无图文介绍</div>
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
						<div id="cartNum" class="item-num bgred">{{cartCount}}</div>
						<img src="../../static/images/shoppingcart-black.png" />
					</a>
				</div>
				<div class="btn-fixed boxflex01">
					<div id="btnCart" class="btn-cart wp50 left" @click="addCartEvent">
						<a class="bgred" href="javascript:void(0)">
							<!--仅在chrome下点击有效果。。。-->
							<touch-ripple class="wp100" :speed="1" :opacity="0.3" color="#fff" transition="ease">
								加入购物车
							</touch-ripple>
						</a>
					</div>
					<div id="fromStoreBtn" class="btn-cart wp50 left">
						<a id="buyNowBtn" class="bgorange" href="javascript:">
							<touch-ripple class="wp100" :speed="1" :opacity="0.3" color="#fff" transition="ease">
								立即购买
							</touch-ripple>
						</a>
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
	import '../../static/css/common.css'
	import Vue from 'vue'
	import { mapState } from 'vuex'
	import VueMessage from 'vue-show-message'
	import Mock from 'mockjs'
	import 'swiper/dist/css/swiper.css'
	import VueSwiper from 'vue-awesome-swiper'
	//	import Tabs from 'vue-swipe-tab'

	import { touchRipple } from 'vue-touch-ripple'
	// import styles
	import 'vue-touch-ripple/dist/vue-touch-ripple.css'

	Vue.use(VueMessage, {
		duration: 2000
	})
	Vue.use(VueSwiper)
	//	Vue.use(Tabs)

	export default {
		name: 'itemDetails',
		data() {
			return {
				mockData: Mock.mock(/(\.json)|(\.do)/, {
					// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
					'list|1': [{
						// 属性 id 是一个自增数，起始值为 1，每次增 1
						'dateTime|+1': Mock.Random.now('yyyy-MM-dd HH:mm:ss'),
						'productName': Mock.Random.cparagraph(1),
						'price|20-200.2': 20,
						'priceDiscount|10-100.2': 10,
						'defaultDeliveryName': '海吉星',
						'userId|+1': 73568,
						'id|+1': 1253001,
						'convertMoney|+1': 7.00,
						'cinemaItem': Mock.Random.boolean(1, 4, true)
					}],
					'status': '0000',
					'hasNext|1': Mock.Random.boolean(),
				}),
				productList: {},
				productNum: 1,

				adList: [{
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
				bannerOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					autoPlay: true
				},
				itemInfoOptions: {
					pagination: {
						el: '.swiper-pagination-tab',
						clickable: true,
						/*renderBullet: function(index, className) {
							return '<span class="boxflex01"></span>';
						},*/
					},
					on: {
						slideChange: function() {
							console.log(this.activeIndex);
						},
					}
				}
			}
		},
		computed: {
			...mapState({
				cartCount: 'cartCount',
				haveBeenSet: 'haveBeenSet'
			}),
			swiper() {
				//SPA worked by the component, find swiper instance by ref attribute.
				return this.$refs.mySwiper.swiper
			},
			curtab() {
				return this.$refs.mySwiper.swiper.activeIndex
			}
		},
		mounted() {
			let self = this;
			this.getProductInfo();

			document.querySelector('.slide-tab1').addEventListener('click',function(e) {
				console.log(this.curtab);
				e.preventDefault();
				self.swiper.slideTo(0, 0);
			});
			document.querySelector('.slide-tab2').addEventListener('click', function(e) {
				e.preventDefault();
				self.swiper.slideTo(1, 0);
			});
		},
		components: {
			touchRipple
		},
		methods: { //增加购物车数量
			addCartEvent(productId) {
				this.$store.commit('addCart', this.productNum);
				this.$showMsg('已加入购物车');
			},
			editProductNum(flag) {
				if(flag === 'add') {
					this.productNum++;
				} else {
					if(this.productNum <= 1) {
						return;
					}
					this.productNum--;
				}
			},
			//get传参方式
			getProductInfo() {
				const self = this;
				const url = '../hostname/common/toUrl.do'; //开发环境，接口代理到本地，前面加上/api
				//const url = '../common/toUrl.do';		//build 正式环境
				let dataParams = {
					'detailUrl': '/livingPay/qryLivingPayItemList.json'
				}

				self.$axios.get(url, {
					params: dataParams
				}).then((response) => {
					console.log(response);
					if(response.data.status === '0000') {
						this.productList = response.data.list;
					}
				})
			},
		}
	}
</script>

<style>
.height52{ height: 52px;}
.swiper-pagination-tab{ position: absolute; width: 100%; height: 52px; top: 0; opacity: 0;}
.swiper-pagination-tab span{ flex: 1; display: block;  height: 100%;}
</style>