( function() {
    'use strict';

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

    desc( 'Run tests' );
    task( 'test', function() {
        jake.exec( 'node_modules/karma/bin/karma run',
            { interactive: true },
            complete
        );
    }, { async: true } );

    desc( 'Run a localhost server' );
    task( 'run', function() {
        jake.exec( 'node node_modules/http-server/bin/http-server src',
            { interactive: true },
            complete
        );
    } );

} )();
