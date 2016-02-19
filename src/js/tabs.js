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

        showTab( defaultTab, tabs, content, activeTabClass, hiddenContentClass );
    };

    function showTab( tabToShow, tabs, content, activeTabClass, hiddenContentClass ) {
        var activeIndex = findIndexOfDefaultElement( tabs, tabToShow );
        var defaultContent = content[ activeIndex ];

        content.forEach( function( element ) {
            element.classList.add( hiddenContentClass );
        } );
        defaultContent.classList.remove( hiddenContentClass );
        tabToShow.classList.add( activeTabClass );
    }

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
