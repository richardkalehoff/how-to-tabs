( function() {
    'use strict';

    var assert = require( './assert' );
    var tabs = require( './tabs.js' );

    describe( 'Tabs', function() {

        it( 'sets a class on an element when that element has no existing classes', function() {
            var element = addElement( 'div' );

            tabs.init( element, 'someClass' );

            assert.equal( getClass( element ), 'someClass' );

            removeElement( element );
        } );

        it( 'sets a class on an element without erasing existing classes', function() {
            var element = addElement( 'div' );
            element.setAttribute( 'class', 'existingClass' );

            tabs.init( element, 'newClass' );

            assert.equal( getClass( element ), 'existingClass newClass' );

            removeElement( element );
        } );

        function getClass( element ) {
            return element.getAttribute( 'class' );
        }

        function addElement( tagName ) {
            var element = document.createElement( tagName );
            document.body.appendChild( element );
            return element;
        }

        function removeElement( element ) {
            element.parentNode.removeChild( element );
        }

    } );

} )();
