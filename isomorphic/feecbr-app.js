/*
 * Copyright (c) 2013, Yahoo! Inc.  All rights reserved.
 * Copyrights licensed under the New BSD License.
 * See the accompanying LICENSE.txt file for terms.
 */

/*jslint nomen:true, browser:true*/
/*global DATA, YUI*/

// classes
import ModelPhotos from 'models/photos';
import ModelPhoto from 'models/photo';

import ViewHome from 'views/home';
import ViewPhotos from 'views/photos';

import {Models, Views} from 'pn';

Models.register('photos', ModelPhotos);
Models.register('photo',  ModelPhoto);

Views.register('home',   ViewHome);
Views.register('photos', ViewPhotos);

import {DefaultApp} from 'default-app';
import {Base} from 'base-build';
import {config} from 'yui';

var FeecBRAppClass = Base.create('feecbr-app', DefaultApp, [], {

    views: {
        home: {
            type: 'Views.HomeView',
            preserve: true
        },
        photos: {
            type: 'Views.PhotosView',
            preserve: true
        }
    },

    transitions: {
        navigate: 'fade',
        toChild: 'fade',
        toParent: 'fade'
    },

    initializer: function () {
    },

    render: function (options) {
        var viewContainer,
            container;

        FeecBRAppClass.superclass.render.apply(this, arguments);

        options = options || {};

        if (options.rendered) {
            return this;
        }

        // Setup initial view here if content is not prerendered on the
        // server

        return this;
    }

}, {

    ATTRS: {}

});

config.global.FeecBRAppClass = FeecBRAppClass;
export default FeecBRAppClass;
