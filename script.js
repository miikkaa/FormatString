// Simple Message Builder.
// Pass a string and an array of arguments. Markers like {0}, etc. will be replaced with real values from the arguments.
(function (window) {
    'use strict';

    // Initialize or take the existing namespace.
    var PF = window.PF = window.PF || {};

    PF.MessageBuilder = function (string, args) {
        for (var i = 0; i < args.length; i++) {
            string = string.replace(new RegExp('\\{' + i + '\\}', 'g'), args[i]);
        }
        return string;
    };

})(window);