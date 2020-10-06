'use strict';

require('mocha');
const assert = require('assert');
const isAdult = require('./index.js');

describe('is-adult test cases', function() {
  it('get correct result', function() {
    assert(isAdult(2, 9, 1999));
  });

  it('get incorrect result', function() {
    assert(!isAdult(10, 10, 2016));
  });
});
