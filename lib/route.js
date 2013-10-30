exports.table = {
  get: {},
  post: {}
};

exports.get = function(url, fun){
  this.table.get[url] = fun;
};

exports.post = function(url, fun){
  this.table.post[url] = fun;
};
