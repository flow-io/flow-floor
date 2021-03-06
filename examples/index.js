var eventStream = require( 'event-stream' ),
	fStream = require( './../lib' );

// Create some data...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()-0.5;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Create a new stream to floor streamed numeric values:
var stream = fStream().stream();

// Pipe the data:
readStream.pipe( stream )
	.pipe( eventStream.map( function( d, clbk ) {
		clbk( null, d.toString()+'\n' );
	}))
	.pipe( process.stdout );