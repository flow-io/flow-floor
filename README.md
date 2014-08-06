flow-floor
==========

Transform stream factory to [floor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor) streamed numeric data values.


## Installation

``` bash
$ npm install flow-floor
```

## API

To create a stream factory,

``` javascript
var floorStream = require( 'flow-floor' );

// Create a new factory:
var fStream = floorStream();
```

### fStream.stream()

To create a new stream to floor streamed numeric values,

``` javascript
var stream = fStream.stream();
```


## Usage

Methods are chainable.

``` javascript
floorStream()
	.stream()
	.pipe( /* writable stream */ );
```


## Examples

``` javascript
var eventStream = require( 'event-stream' ),
	fStream = require( 'flow-floor' );

// Create some data...
var data = new Array( 1000 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()-0.5;
}

// Create a readable stream:
var readStream = eventStream.readArray( data );

// Create a new stream:
var stream = fStream().stream();

// Pipe the data:
readStream.pipe( stream )
	.pipe( eventStream.map( function( d, clbk ) {
		clbk( null, d.toString()+'\n' );
	}))
	.pipe( process.stdout );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions.

Assuming you have installed Mocha, execute the following command in the top-level application directory to run the tests:

``` bash
$ mocha
```

All new feature development should have corresponding unit tests to validate correct functionality.


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.

