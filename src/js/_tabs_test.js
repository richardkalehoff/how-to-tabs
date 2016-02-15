( function() {
    'use strict';

    var assert = require( './assert' );
    var tabs = require( './tabs.js' );

    describe( 'Tabs', function() {

        it( 'hides an element', function() {
            var element = addElement( 'div' );

            tabs.init( element );

            assert.equal( getDisplayProperty( element ), 'none' );

            removeElement( element );
        } );

        function addElement( tagName ) {
            var element = document.createElement( tagName );
            document.body.appendChild( element );
            return element;
        }

        function getDisplayProperty( element ) {
            var style = getComputedStyle( element );
            return style.getPropertyValue( 'display' );
        }

        function removeElement( element ) {
            element.parentNode.removeChild( element );
        }

    } );

} )();
