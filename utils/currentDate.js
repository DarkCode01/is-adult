'use strict';

/**
 * getCurrentDate: get the current formatter a array of numbers
 *
 * @return {number[]} [day, month, year]
 *
 * @example
 *
 *     getCurrentDate()  //=> [7, 10, 2020]
 */
module.exports = function getCurrentDate() {
  const date = new Date();

  return [ date.getDate(), date.getMonth(), date.getFullYear() ];
}
