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

        var fetch = self.fetch({beforeSend: sendAuthentication});
        fetch.then(function(data){
          $('.action-secured').text(JSON.stringify(data));
        });

        var post = self.save({}, {beforeSend: sendAuthentication});
        post.then(function(data){
          $('.action-post-secured').text(JSON.stringify(data));
        });

      });
    }

  });
})();
