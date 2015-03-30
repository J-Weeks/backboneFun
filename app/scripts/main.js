/*global BackboneFun, $*/
'use strict'

var App = (function(app) {
  app.init = function() {
    var router = new Router();
    Backbone.history.start();
  };

  var Router = Back.Router.extend({
    routes:{
        '':'home',
        'about': 'about'
    },
    home: home,
    about: about
  });

  return app;
})(App || {});



$(document).ready(function () {
    App.init();
});
