/*(function() {
  var proxiedSync = Backbone.sync;
  Backbone.sync = function(method, model, options) {
    options || (options = {});
    if (!options.crossDomain) {
      options.crossDomain = true;
    }

    if(!options.beforeSend){
      options.beforeSend = function(xhr){
        xhr.withCredentials = true;
      }
    }
    return proxiedSync(method, model, options);
  };
})();
*/
window.config = function(){
  return {
    unsecureApi: 'https://jsonp.nodejitsu.com/?url=http://jsonview.com/example.json',
    /*secureApi: 'http://localhost:1337/api/info',*/
    secureApi: 'http://frozen-coast-1269.herokuapp.com/',
    login: ' http://localhost:1337/oauth/token'
  }
}();
