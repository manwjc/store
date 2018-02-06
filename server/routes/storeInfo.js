var express = require('express');
var router = express.Router();
var storeInfo = require('../models/storeInfo');

//app.js里连接了数据库
/* GET storeInfo json. */
router.get('/', function(req, res, next) {
	
	//res.send('storeInfo runs');
	const storeId = req.query.storeId
	console.log('show storeId:', storeId);

	storeInfo.find({
		id: storeId
	}, (err, doc) => {
		console.log('err:', err, 'doc:', doc[0].id);
		if(err) {
			res.json({
				status: '0001',
				msg: err.message,
				result: ''
			});
		} else {
			res.json({
				status: '0000',
				msg: '店铺信息返回成功',
				result: doc[0]
			})
		}
		
//		res.send(doc);
	});
});

module.exports = router;