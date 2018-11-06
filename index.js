'use strict';

const bindings = require('bindings')('icuWrapper.node');

module.exports = buf => {
	if (!Buffer.isBuffer(buf)) {
		throw new TypeError('Argument to detect-character-encoding must be a buffer.');
	}

	return bindings.detectCharacterEncoding(buf);
};
