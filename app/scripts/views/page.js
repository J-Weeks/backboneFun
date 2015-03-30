/*global BackboneFun, Backbone, JST*/

BackboneFun.Views = BackboneFun.Views || {};

(function () {
    'use strict';

    BackboneFun.Views.Page = Backbone.View.extend({

        template: JST['app/scripts/templates/page.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
