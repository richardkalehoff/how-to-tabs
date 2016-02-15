( function() {
    'use strict';

    var math = require( './math.js' );
    var assert = require( './assert' );

    describe( 'Addition', function() {

        it( 'adds positive numbers', function() {
            assert.equal( math.add( 3, 4 ), 7 );
        } );

        it( 'uses IEEE 754 floating point', function() {
            assert.equal( math.add( 0.1, 0.2 ), 0.30000000000000004 );
        } );

    } );

    describe( 'Subtraction', function() {

        it( 'subtracts positive numbers', function() {
            assert.equal( math.subtract( 10, 3 ), 7 );
        } );

    } );

} )();
