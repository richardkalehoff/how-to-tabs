( function() {
    'use strict';

    exports.init = function init( elementList, className ) {
        elementList.forEach( function( element ) {
            element.classList.add( className );
        } );
    };

} )();
