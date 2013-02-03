var mongo = require('mongoskin')
	.db('localhost:27017/ban2db');

/*
 * GET home page.
 */

exports.getBans = function (req, res) {
	mongo
		.collection('bans')
		.find()
		.toArray(function (err, items) {
			res.json(items);
		});
}

exports.addBan = function (req, res) {
	mongo
		.collection('bans')
		.insert({
			ip: req.param('ip'),
			name: req.param('name'),
			time: req.param('time'),
			port: req.param('port'),
			protocol: req.param('protocol')
		}, function () {
			res.send(201);
		}, function () {
			res.send(500);
		});
}