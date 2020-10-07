'use strict';

require('mocha');
const assert = require('assert');
const isAdult = require('./index.js');

describe('is-adult test cases', function() {
  it('get correct result', function() {
    assert(isAdult(2, 9, 1999));
    assert(isAdult(2, 9, 2000));
    assert(isAdult(2, 9, 2001));
    assert(isAdult(2, 9, 2002));
    assert(isAdult(2, 9, 2003, { olderNumber: 17 }));
    assert(isAdult(2, 9, 1999, { olderNumber: 21 }));
    assert(isAdult(2, 9, 1999, { olderNumber: 18, dateToCompare: [1, 1, 2019] }));
  });

  it('get incorrect result', function() {
    assert(!isAdult(10, 10, 2003));
    assert(!isAdult(10, 10, 2004));
    assert(!isAdult(10, 10, 2005));
    assert(!isAdult(10, 10, 2006));
    assert(!isAdult(10, 10, 2007));
    assert(!isAdult(10, 10, 2008));
    assert(!isAdult(10, 10, 2016, { olderNumber: 21 }));
    assert(!isAdult(10, 10, 2016, { olderNumber: 18, dateToCompare: [1, 1, 2019] }));
  });
});
