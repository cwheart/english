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
}
