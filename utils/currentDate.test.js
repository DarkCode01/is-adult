'use strict';

require('mocha');
const assert = require('assert');
const parserDate = require('./parserDate.js');

describe('parserDate tests cases', function() {
  it('get parsed current date', function() {
    const currentDate = new Date();
    const result = parserDate();

    assert(typeof result === 'object');
    assert(result.length === 3);
    assert(result[0] === currentDate.getDate());
    assert(result[1] === currentDate.getMonth());
    assert(result[2] === currentDate.getFullYear());
  });

  it('get parsed date', function() {
    const date = new Date('1995-12-17T03:24:00');
    const result = parserDate(date);

    assert(typeof result === 'object');
    assert(result.length === 3);
    assert(result[0] === 17);
    assert(result[1] === 12);
    assert(result[2] === 1995);
  });
});
