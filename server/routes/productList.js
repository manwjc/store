var express = require('express');
var router = express.Router();
var productList = require('../models/productList');

//app.js里连接了数据库
router.get('/', function(req, res, next) {
	
	const productTypeId = req.query.productTypeId;
	const page = +req.query.page;
	const pageNum = +req.query.pageNum;
	
	console.log('page:', page, 'pageNum:', pageNum);

	productList.find({
		productTypeId: productTypeId,
	},{
		productList: {$slice: [(1+(page-1)*pageNum), pageNum]},	//内嵌数组分页-  $slice: [a,b] a为偏移量，b为返回的数量
	},(err, doc) => {
		console.log('err:', err, 'doc:', doc);
		if(err) {
			res.json({
				status: '0001',
				msg: err.message,
				result: ''
			});
		} else {
			const isHasNext = doc[0].productList.length === pageNum ? true : false;	
			res.json({
				status: '0000',
				msg: '店铺信息返回成功',
				result: {
					count: doc[0].productList.length,
					productList: doc[0].productList,
					hasNext: isHasNext
				}
			})
		}
		
	})/*.limit(pageNum).skip(page*pageNum)*/;	
	//返回数据为数组，分页方法.limit().skip()。
	//分页两种方法：https://www.cnblogs.com/linhan/p/4248679.html
	//方法一比较简单，但skip方法效率较低，在数据量较多的情况下更推荐推荐使用：获取前一页的最后一条记录，查询之后的指定条记录，但可能会占用较多的内存空间。
});

module.exports = router;