'use strict';

var App = (function(app) {
  app.initialize = function() {
    var router = new Router();
    Backbone.history.start();
  };


  var Router = Backbone.Router.extend({
    routes: {
      '': 'home', // http://localhost:9000/
      'about': 'about', // http://localhost:9000/#/about
    },
    home: home,
    about: about
  });

  return app;
})(App || {});

$(document).ready(function(){
  App.initialize();
});
