/*global app, Backbone, $*/


window.app = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  auth: function(){
    var isIE = function() {
      var myNav = navigator.userAgent.toLowerCase();
      return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
    };
    var opts = {
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
    };

    if(isIE() === 9){
      opts.contentType = 'text/plain';
      opts.dataType = 'json';
    }

    return $.ajax(opts);
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
