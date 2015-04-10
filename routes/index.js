
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'URL Shortener' });
};

exports.submitlink = function(req, res){
  console.log('do stuff!')
  // console.log(req);
  // console.log(res);
  // res.render('index', { title: 'URL Shortener' });
};