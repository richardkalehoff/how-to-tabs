( function() {
    'use strict';

    desc( 'Default build' );
    task( 'default', function() {
        console.log( 'Hello, I am the default task.' );

        console.log( '\n\nBUILD OK' );
    } );

    desc( 'Run a localhost server' );
    task( 'run', function() {
        jake.exec( 'node node_modules/http-server/bin/http-server src',
            { interactive: true },
            complete
        );
    } );

} )();
