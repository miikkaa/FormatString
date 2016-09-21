// Simple Message Builder.
// Pass a string and an array of arguments. Markers like {0}, etc. will be replaced with real values from the arguments.
(function (window) {
    'use strict';

    // Initialize or take the existing namespace.
    var PF = window.PF = window.PF || {};

    PF.MessageBuilder = function (string, args) {
        // Run a global match.
        if (!args) { args = []; }
        return string.replace(/{(\d+)}/g, function(match, index) {
            return typeof args[index] !== 'undefined' ? args[index] : match;
        });
    };

})(window);