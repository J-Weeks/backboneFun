/*global BackboneFun, Backbone*/

BackboneFun.Collections = BackboneFun.Collections || {};

(function () {
    'use strict';

    BackboneFun.Collections.Page = Backbone.Collection.extend({

        model: BackboneFun.Models.Page

    });

})();
