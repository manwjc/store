var express = require('express');
var router = express.Router();
var storeAds = require('../models/storeAds');

/* GET storeAds json. */
router.get('/', function(req, res, next) {

	//res.send('storeInfo runs');
	const storeId = req.query.storeId
	console.log('show storeId:', storeId);

	storeAds.find({}, (err, doc) => {
		console.log('storeAds:', doc)
		if(err) {
			res.json({
				status: '0001',
				msg: err.message,
				result: ''
			});
		} else {
			res.json({
				status: '0000',
				msg: '店铺广告信息返回成功',
				result: doc
			})
		}
	});
});

module.exports = router;