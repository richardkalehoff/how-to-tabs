( function() {
    'use strict';

    exports.init = function init( element, className ) {
        var classes = element.getAttribute( 'class' );

        if ( classes === null ) {
            classes = className;
        } else {
            classes = classes + ' ' + className;
        }

        element.setAttribute( 'class', classes );
    };

} )();
