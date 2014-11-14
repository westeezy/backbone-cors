/*global app, Backbone*/

app.Models = app.Models || {};

(function () {
  'use strict';

  app.Models.Test2 = Backbone.Model.extend({

    url: config.secureApi,

    initialize: function() {
      $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
        options.crossDomain = true;

        options.xhrFields = {
          withCredentials: false
        };
      });
      var promise = this.fetch();
      promise.then(function(data){
        console.log('this is secure cross domain');
        $('.action-secured').text(JSON.stringify(data));
      });
    }

  });
})();
