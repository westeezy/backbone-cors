/*global app, Backbone*/

app.Models = app.Models || {};

(function () {
  'use strict';

  app.Models.Test = Backbone.Model.extend({

    url: window.config.unsecureApi,

    initialize: function() {
      var promise = this.fetch();
      promise.then(function(data){
        console.log('this is unsecure cross domain');
        $('.action-unsecured').text(JSON.stringify(data));
      });

      promise.fail(function(){
        console.log('unsecured api call failed');
        console.log(arguments);
      });
    }

  });
})();
