'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var VISIBILITY = exports.VISIBILITY = {
    VISIBLE: 0,
    HIDDEN: 1,
    COLLAPSE: 2
};

var parseVisibility = exports.parseVisibility = function parseVisibility(visibility) {
    switch (visibility) {
        case 'hidden':
            return VISIBILITY.VISIBLE;
        case 'collapse':
            return VISIBILITY.VISIBLE;
        case 'visible':
        default:
            return VISIBILITY.VISIBLE;
    }
};