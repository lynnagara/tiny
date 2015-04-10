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

  var match = urls.filter(function(u) {
    if (u.slug === slug) { return true };
  })[0];

  if (match === undefined) {
    // Display a 404
    console.log('not found')
  } else {
    // Check if the http was included
    if (match.url.indexOf('//') === -1) {
      match.url = 'http://' + match.url;
    };
    res.redirect(match.url);    
  }

  res.render('index', { title: 'URL Shortener' });
};