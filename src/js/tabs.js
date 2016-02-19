( function() {
    'use strict';

    exports.init = function init( options ) {
        var tabs = options.tabs,
            content = options.content,
            defaultElement = options.default,
            contentHideClass = options.contentHideClass,
            activeTabClass = options.activeTabClass;

        if ( tabs === undefined ) {
            throw new Error( 'Expected options.tabs' );
        }
        if ( content === undefined ) {
            throw new Error( 'Expected options.content' );
        }
        if ( defaultElement === undefined ) {
            throw new Error( 'Expected options.default' );
        }
        if ( contentHideClass === undefined ) {
            throw new Error( 'Expected options.contentHideClass' );
        }
        if ( activeTabClass === undefined ) {
            throw new Error( 'Expected options.activeTabClass' );
        }

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

} )();
