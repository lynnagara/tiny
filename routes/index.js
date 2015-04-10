exports.index = function(req, res){
  res.render('index', { title: 'URL Shortener' });
};

var urls = [];

exports.submitlink = function(req, res){
  var url = req.body.url;
  if (!url) { 
    res.send(404);
  };


  var rand = Math.random().toString(36).substring(2,7);
  urls.push({
    'url': url,
    'slug': rand
  });
  res.json({'slug': rand, 'url': url});
};

exports.redirectlink = function(req, res) {
  var slug = req.route.params.slug;
  var url = urls.filter(function(u) {
    if (u.slug === 'slug') { return true };
  })[0];

  if (url === undefined) {
    console.log('undefined')
  } else {
    console.log(url);
  }

  res.render('index', { title: 'URL Shortener' });
};