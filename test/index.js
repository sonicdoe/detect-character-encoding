'use strict';

var assert = require('assert');
var fs = require('fs');
var path = require('path');

var detectCharacterEncoding = require('..');

function getFixture(fixture) {
	return fs.readFileSync(path.join(__dirname, 'fixtures', fixture));
}

it('should return the encoding', function() {
	assert.equal(detectCharacterEncoding(getFixture('utf-8.txt')).encoding, 'UTF-8');
});

it('should return a confidence value', function() {
	assert(typeof detectCharacterEncoding(getFixture('utf-8.txt')).confidence === 'number');
});

it('should throw a TypeError if argument is not a buffer', function() {
	assert.throws(function() {
		detectCharacterEncoding('string');
	}, TypeError);
});
