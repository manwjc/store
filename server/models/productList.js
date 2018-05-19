var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var productListSchema = new Schema({
	productTypeId: Number,
	hasNext: Boolean,
	productList: [{
		supplyType: Number,
		inAnniversary: Boolean,
		leftCount: Number,
		canBuyNum: Number,
		priceOnShelf: Number,
		savePrice: Number,
		opType: Number,
		id: Number,
		price: Number,
		priceUnit: String,
		name: String,
		nameMini: String,
		filmTickets: Number
	}]
});
// 将数据模型暴露出去。collection默认为复数,带s。如果collection不带s，则需指定collection的名称为mongoose.model()的第三个参数
module.exports = mongoose.model('productList', productListSchema, 'productList');