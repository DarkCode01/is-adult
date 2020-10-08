'use strict';

/**
 * parserDate: parser a Date passed as argument
 * if not pass a Date return a currentDate.
 *
 * @param {Date} [date=Date]
 * @return {number[]} [day, month, year]
 *
 * @example
 *
 *     getCurrentDate(new Date('1995-12-17T03:24:00'))  //=> [17, 12, 1995]
 *     getCurrentDate()  //=> [7, 10, 2020]
 */
module.exports = function parserDate(date=new Date()) {
  return [ date.getDate(), date.getMonth(), date.getFullYear() ];
}
