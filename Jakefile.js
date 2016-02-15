( function() {
    'use strict';

    var DIST_DIR = 'generated/dist';

    desc( 'Start the Karma server' );
    task( 'karma', function() {
        jake.exec( 'node_modules/karma/bin/karma start',
            { interactive: true },
            complete
        );
    }, { async: true } );

    desc( 'Default build' );
    task( 'default', [ 'test' ], function() {
        console.log( 'Hello, I am the default task.' );

        console.log( '\n\nBUILD OK' );
    } );

    desc( 'Erase all generated files' );
    task( 'clean', function() {
        console.log( 'cleaning...' );
    } );

    desc( 'Run tests' );
    task( 'test', function() {
        jake.exec( 'node_modules/karma/bin/karma run',
            { interactive: true },
            complete
        );
    }, { async: true } );

    desc( 'Build distribution directory' );
    task( 'build', [ DIST_DIR ], function() {
        console.log( 'Build distribution directory' );
    } );

    directory( DIST_DIR );

    desc( 'Run a localhost server' );
    task( 'run', [ 'build' ], function() {
        jake.exec( 'node node_modules/http-server/bin/http-server ' + DIST_DIR,
            { interactive: true },
            complete
        );
    } );

} )();
