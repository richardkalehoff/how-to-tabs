( function() {
    'use strict';

    exports.init = function init( options ) {
        var tabs = options.tabs,
            content = options.content,
            defaultTab = options.defaultTab,
            hiddenContentClass = options.hiddenContentClass,
            activeTabClass = options.activeTabClass;

        checkOption( tabs, 'options.tabs' );
        checkOption( content, 'options.content' );
        checkOption( defaultTab, 'options.defaultTab' );
        checkOption( hiddenContentClass, 'options.hiddenContentClass' );
        checkOption( activeTabClass, 'options.activeTabClass' );

        var activeIndex = findIndexOfDefaultElement( tabs, defaultTab );
        var defaultContent = content[ activeIndex ];

        content.forEach( function( element ) {
            element.classList.add( hiddenContentClass );
        } );
        defaultContent.classList.remove( hiddenContentClass );
        defaultTab.classList.add( activeTabClass );
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
