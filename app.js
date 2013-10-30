var route = require('./lib/route');
require('./app/controller')(route);

exports.call = function (req, res) {
  if(route.table.get[req.url]){
    route.table.get[req.url](req, res);
  } else {
    res.writeHead(404);
    res.end("page not found \n");
  }
};
