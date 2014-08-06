
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Test utilities:
	utils = require( './utils' ),

	// Module to be tested:
	floorStream = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'flow-floor', function tests() {
	'use strict';

	it( 'should export a factory function', function test() {
		expect( floorStream ).to.be.a( 'function' );
	});

	it( 'should floor streamed numeric data', function test( done ) {
		var data, expected, fStream;

		// Simulate some data...
		data = [ 10.23434, 1.234, -1.586033, 2.5, 3.0, 4, 4.49999, 5.99999 ];

		// Expected values:
		expected = [ 10, 1, -2, 2, 3, 4, 4, 5 ];

		// Create a new stream:
		fStream = floorStream().stream();

		// Mock reading from the stream:
		utils.readStream( fStream, onRead );

		// Mock piping a data to the stream:
		utils.writeStream( data, fStream );
		return;

		/**
		* FUNCTION: onRead( error, actual )
		*	Read event handler. Checks for errors and compares streamed data to expected data.
		*/
		function onRead( error, actual ) {
			expect( error ).to.not.exist;

			for ( var i = 0; i < expected.length; i++ ) {
				assert.strictEqual(
					actual[ i ],
					expected[ i ]
				);
			}
			done();
		} // end FUNCTION onRead()
	});

});