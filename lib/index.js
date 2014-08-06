/**
*
*	STREAM: floor
*
*
*	DESCRIPTION:
*		- Transform stream factory to floor streamed numeric data values.
*
*
*	NOTES:
*		[1] 
*
*
*	TODO:
*		[1] 
*
*
*	HISTORY:
*		- 2014/08/06: Created. [AReines].
*
*
*	DEPENDENCIES:
*		[1] through2
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. athan@nodeprime.com. 2014.
*
*/

(function() {
	'use strict';

	// MODULES //

	var // Through2 module:
		through2 = require( 'through2' );


	// FUNCTIONS //

	/**
	* FUNCTION: onData( newVal, encoding, clbk )
	*	Data event handler. Floors streamed data.
	*
	* @private
	* @param {Number} newVal - streamed data value
	* @param {String} encoding
	* @param {Function} clbk - callback to invoke after flooring the data. Function accepts two arguments: [ error, chunk ].
	*/
	function onData( newVal, encoding, clbk ) {
		clbk( null, Math.floor( newVal ) );
	} // end FUNCTION onData()


	// STREAM //

	/**
	* FUNCTION: Stream()
	*	Stream constructor.
	*
	* @constructor
	* @returns {Stream} Stream instance
	*/
	function Stream() {
		return this;
	} // end FUNCTION Stream()

	/**
	* METHOD: stream()
	*	Returns a through stream for flooring streamed numeric data.
	*
	* @returns {object} through stream
	*/
	Stream.prototype.stream = function() {
		return through2({'objectMode': true}, onData );
	}; // end METHOD stream()


	// EXPORTS //

	module.exports = function createStream() {
		return new Stream();
	};

})();