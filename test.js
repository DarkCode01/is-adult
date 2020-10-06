'use strict';

require('mocha');
const assert = require('assert');
const isOlder = require('./index.js');

describe('is-older test cases', function() {
  it('get correct result', function() {
    assert(isOlder(2, 9, 1999));
  });

  it('get incorrect result', function() {
    assert(!isOlder(10, 10, 2016));
  });
});
