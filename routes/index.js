
/*
 * GET home page.
 */
//var data = require('../public/frontpage.json');

var http = require('http');

var options = {
  host: 'api.reddit.com',
  port: 80,
  path: '/?limit=100',
  method: 'GET',
  headers: {
    'User-Agent': 'spreaddit v0.00001 by /u/nubix'
  }
};

exports.index = function(req, res){

  // var content = "";
  // var get = http.request(options, function(getRes) {
  //   getRes.setEncoding('utf8');
  //   getRes.on('data', function (chunk) {
  //     content += chunk;
  //   });
  //   getRes.on('end', function(){
      
  //   });
  // }).on('error', function(e) {
  //   console.log('ERROR: ' + e.message);
  // });
  // get.end();
  res.render('index', { });

};