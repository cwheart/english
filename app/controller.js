var model = require('./model');

module.exports = function(route){
  route.get('/', function(req, res){
    res.writeHead(200);
    res.end("hello world\n");
  });

  route.get('/favicon.ico', function(req, res){
  });

  route.get('/articles', function(req, res){
    res.writeHead(200);
    res.end("hello world\n");
  });

  route.get('/words', function(req, res){
    model.Word.find({}, function (err, docs) {
      res.writeHead(200);
      res.end("hello world\n");
    });
  });
}
