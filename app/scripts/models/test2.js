/*global app, Backbone*/

app.Models = app.Models || {};

(function () {
  'use strict';

  app.Models.Test2 = Backbone.Model.extend({

    url: config.secureApi,

    initialize: function() {
      var self = this;
      app.auth().then(function(tokens){

        var sendAuthentication = function (xhr) {
          xhr.setRequestHeader('Authorization', "Bearer " + tokens.access_token);
        }

        var promise = self.fetch({beforeSend: sendAuthentication});
        promise.then(function(data){
          console.log('this is secure cross domain');
          $('.action-secured').text(JSON.stringify(data));
        });

      });
    }

  });
})();
