/*global BackboneFun, Backbone*/

BackboneFun.Models = BackboneFun.Models || {};

(function () {
    'use strict';

    BackboneFun.Models.Page = Backbone.Model.extend({

        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
