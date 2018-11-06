'use strict';

const assert = require('assert');
const fs = require('fs');
const path = require('path');

const detectCharacterEncoding = require('..');

function getFixture(fixture) {
	return fs.readFileSync(path.join(__dirname, 'fixtures', fixture));
}

it('should return the encoding', () => {
	assert.strictEqual(detectCharacterEncoding(getFixture('utf-8.txt')).encoding, 'UTF-8');
});

it('should return a confidence value', () => {
	assert(typeof detectCharacterEncoding(getFixture('utf-8.txt')).confidence === 'number');
});

it('should return null if no charset matches', () => {
	assert.strictEqual(detectCharacterEncoding(Buffer.from([0xAB])), null);
});

it('should throw a TypeError if argument is not a buffer', () => {
	assert.throws(() => {
		detectCharacterEncoding('string');
	}, TypeError);
});
