( function() {
    'use strict';

    exports.init = function init( options ) {
        var tabs = options.tabs,
            content = options.content,
            defaultElement = options.default,
            contentHideClass = options.contentHideClass,
            activeTabClass = options.activeTabClass;

        checkOption( tabs, 'options.tabs' );
        checkOption( content, 'options.content' );
        checkOption( defaultElement, 'options.default' );
        checkOption( contentHideClass, 'options.contentHideClass' );
        checkOption( activeTabClass, 'options.activeTabClass' );

        content.forEach( function( element ) {
            element.classList.add( contentHideClass );
        } );
        defaultElement.classList.remove( contentHideClass );

        var activeIndex = findIndexOfDefaultElement( content, defaultElement );

        tabs[ activeIndex ].classList.add( activeTabClass );
    };

    function findIndexOfDefaultElement( contentElements, defaultContentElement ) {
        for ( var i = 0; i < contentElements.length; i++ ) {
            if ( contentElements[ i ] === defaultContentElement ) {
                return i;
            }
        }

        throw new Error( 'Could not find default in list' );
    }

    function checkOption( option, name ) {
        if ( option === undefined ) {
            throw new Error( 'Expected ' + name );
        }
    }

} )();
