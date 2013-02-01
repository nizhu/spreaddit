
/*
 * GET home page.
 */
//var data = require('../public/frontpage.json');

var http = require('http');
var url = require('url');

exports.listing = function(req, res){
  res.render('listing', { url: req.originalUrl });
};

exports.comments = function(req, res){
  res.render('comments', { url: req.originalUrl });
};