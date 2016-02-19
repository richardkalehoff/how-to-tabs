( function() {
    'use strict';

    var assert = require( './assert' );
    var tabs = require( './tabs.js' );

    describe( 'Tabs', function() {
        var container;

        beforeEach( function() {
            container = document.createElement( 'div' );
            document.body.appendChild( container );
        } );

        afterEach( function() {
            removeElement( container );
        } );

        it( 'hides all content elements except the default upon initilization', function() {
            var tab1 = addElement( 'div' );
            var defaultTab = addElement( 'div' );
            var tab3 = addElement( 'div' );

            var element1 = addElement( 'div' );
            var defaultElement = addElement( 'div' );
            var element3 = addElement( 'div' );

            tabs.init( {
                tabs: [ tab1, defaultTab, tab3 ],
                content: [ element1, defaultElement, element3 ],
                default: defaultElement,
                contentHideClass: 'hideClass',
                activeTabClass: 'activeTab'
            } );

            assert.equal( getClasses( element1 ), 'hideClass', 'element 1 should be hidden' );
            assert.equal( getClasses( defaultElement ), '', 'default element and should not be hidden' );
            assert.equal( getClasses( element3 ), 'hideClass', 'element 3 should be hidden' );
        } );

        it( 'preserves existing classes when hiding a content element', function() {
            var defaultTab = addElement( 'div' );
            var hiddenTab = addElement( 'div' );

            var defaultElement = addElement( 'div' );
            var hiddenElement = addElement( 'div' );
            hiddenElement.setAttribute( 'class', 'existingClass' );

            tabs.init( {
                tabs: [ defaultTab, hiddenTab ],
                content: [ defaultElement, hiddenElement ],
                default: defaultElement,
                contentHideClass: 'newClass',
                activeTabClass: 'activeTab'
            } );

            assert.equal( getClasses( hiddenElement ), 'existingClass newClass' );
        } );

        it( 'it styles the active tab with a class', function() {
            var defaultElement = addElement( 'div' );
            var defaultTab = addElement( 'div' );

            tabs.init( {
                tabs: [ defaultTab ],
                content: [ defaultElement ],
                default: defaultElement,
                contentHideClass: 'ignored',
                activeTabClass: 'activeTab'
            } );

            assert.equal( getClasses( defaultTab ), 'activeTab' );
        } );

        it( 'preserves existing classes on the active tab', function() {

            // TODO
        } );

        function getClasses( element ) {
            return element.getAttribute( 'class' );
        }

        function addElement( tagName ) {
            var element = document.createElement( tagName );
            container.appendChild( element );
            return element;
        }

        function removeElement( element ) {
            element.parentNode.removeChild( element );
        }

    } );

} )();
