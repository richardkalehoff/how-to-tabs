( function() {
    'use strict';

    exports.init = function init( options ) {
        checkOption( options.tabs, 'options.tabs' );
        checkOption( options.content, 'options.content' );
        checkOption( options.defaultTab, 'options.defaultTab' );
        checkOption( options.activeTabClass, 'options.activeTabClass' );
        checkOption( options.hiddenContentClass, 'options.hiddenContentClass' );

        showTab( options.defaultTab, options );
    };

    function showTab( tabToShow, options ) {
        var activeIndex = findIndex( options.tabs, tabToShow );
        var contentToShow = options.content[ activeIndex ];

        options.content.forEach( function( element ) {
            element.classList.add( options.hiddenContentClass );
        } );

        contentToShow.classList.remove( options.hiddenContentClass );
        tabToShow.classList.add( options.activeTabClass );
    }

    function findIndex( contentElements, defaultContentElement ) {
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
