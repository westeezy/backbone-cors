/*global app, Backbone, $*/


window.app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
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
