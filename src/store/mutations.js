const mutations = {
	setCart(state, num) {
		//初始化购物车数量，如果已经(模拟请求)设置过，则不再设置
		if(!state.haveBeenSet){
			state.cartCount = num;
			state.haveBeenSet = true;
		}
	},
	addCart(state, num) {
		state.cartCount += num;
	}
}

export default mutations