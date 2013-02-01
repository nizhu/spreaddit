
/*
 * GET home page.
 */
//var data = require('../public/frontpage.json');

var http = require('http');
var url = require('url');

exports.index = function(req, res){
  res.render('index', { url: req.originalUrl });
};