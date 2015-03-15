'use strict';

var bindings = require('bindings')('icuWrapper.node');

module.exports = function(buf) {
	if(!Buffer.isBuffer(buf)) {
		throw new TypeError('Argument to detect-character-encoding must be a buffer.');
	}

	return bindings.detectCharacterEncoding(buf);
}
