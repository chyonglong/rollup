System.register('bundle', [], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			var buffer = new ArrayBuffer( 8 );

			var view8 = exports('view8', new Int8Array( buffer ));
			var view16 = new Int16Array( buffer );

			view16[ 0 ] = 3;

		}
	};
});
