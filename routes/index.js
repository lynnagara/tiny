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
    'slug': rand,
    'count': 0
  });
  res.json({'slug': rand, 'url': url});
};

exports.redirectlink = function(req, res) {
  var slug = req.route.params.slug;

  var map = urls.map(function(u) {
    return u.slug;
  });
  var idx = map.indexOf(slug);
  var match = urls[idx];

  if (match === undefined) {
    // Display a 404
    console.log('not found')
  } else {
    // Increment count
    urls[idx].count++;

    // Check if the http was included
    if (match.url.indexOf('//') === -1) {
      match.url = 'http://' + match.url;
    };
    res.redirect(match.url);    
  }
};

exports.stats = function(req, res) {
  res.json(urls);
}