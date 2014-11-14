/*global app, Backbone*/

app.Models = app.Models || {};

(function () {
  'use strict';

  app.Models.Test = Backbone.Model.extend({

    url: window.config.unsecureApi,

    initialize: function() {
      var fetch = this.fetch();
      fetch.then(function(data){
        $('.action-unsecured').text(JSON.stringify(data));
      });
    }

  });
})();
