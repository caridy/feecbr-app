/*jslint nomen:true, node:true*/
/*jshint esnext:true*/

import {DefaultView} from 'default-view';
import {Template} from 'feecbr-app-template-home';
import {Base} from 'base-build';

var HomeView = Base.create('home-view', DefaultView, [], {

    template: Template.get('feecbr-app/home'),

    events: {},

    initializer: function (config) {
        this.config = config;
    },

    render: function () {
        var container = this.get('container'),
            html;

        html = this.template({ src: 'home', foo: 1 });
        container.setHTML(html);

        return this;
    }

});

export default HomeView;
