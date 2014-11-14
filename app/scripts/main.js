/*global app, Backbone, $*/


window.app = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  auth: function(){
    var promise = $.ajax({
      type: "POST",
      url: config.login,
      crossDomain: true,
      data: {
        "client_id": "mobileV1",
        "client_secret": "abc123456",
        "grant_type": "password",
        "password": "password",
        "username": "user"
      }
    });

    return promise;
  },
  init: function () {
    'use strict';
    var unsecureModel = new app.Models.Test();
    var secureModel = new app.Models.Test2();
  }
};

$(document).ready(function () {
  'use strict';
  app.init();
});
