'use strict';

require('mocha');
const assert = require('assert');
const isAdult = require('./index.js');
const parserDate = require('./utils/parserDate.js');
const isDate = require('./utils/isDate.js');

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

describe('parserDate tests cases', function() {
  it('get parsed current date', function() {
    const currentDate = new Date();
    const result = parserDate();

    assert(typeof result === 'object');
    assert(result.length === 3);
    assert(result[0] === currentDate.getDate());
    assert(result[1] === currentDate.getMonth() + 1);
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

describe('isDate tests cases', function() {
  it('get true value date', function() {
    const currentDate = new Date();
    
    assert(isDate(currentDate));
  });

  it('get false value date', function() {
    assert(!isDate('adasdasd'))
  });
});
