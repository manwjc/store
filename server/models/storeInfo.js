var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// 声明一个数据集 对象
var storeInfoSchema = new Schema({
	id: Number,
	storeName: String,
	phone: String,
	address: String,
	ebuyProdTypeList: [{
		id: Number,
		name: String
	}],
	shopPicList: [String]
});
// 将数据模型暴露出去。collection默认为复数,带s。如果collection不带s，则需指定collection的名称为mongoose.model()的第三个参数
module.exports = mongoose.model('storeInfo', storeInfoSchema, 'storeInfo');

