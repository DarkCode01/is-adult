/*!
 * is-adult <https://github.com/darkcode01/is-adult>
 *
 * Copyright (c) 2020, Jose Segura.
 * Released under the MIT License.
 */

'use strict';

const isDate = require('./utils/isDate.js');
const parserDate = require('./utils/parserDate.js');

/**
 * Function to validate is a Date is adult.
 *
 * @param {string|number} day - day of month.
 * @param {string|number} month - month.
 * @param {string|number} year - full year [ex: 2020]
 * @param {object} [options={ olderNumber: 18 }] - full year [ex: 2020]
 * @return {boolean}
 *
 * @example
 *
 *     isAdult(1, 1, 1998)  //=> true
 */
function isAdult(day, month, year, options={ olderNumber: 18, dateToCompare: parserDate() }) {
  if (isDate(options.dateToCompare)) options.dateToCompare = parserDate(options.dateToCompare);

  // parsing dates && options
  const validateDay = Math.abs(day);
  const validateMonth = Math.abs(month) - 1;
  const validateYear = Math.abs(year);
  const olderNumberToCompare = options.olderNumber || 18;
  const [currentDay, currentMonth, currentYear] = options.dateToCompare || parserDate();

  // validating date
  if (!Number.isInteger(validateDay) || !Number.isInteger(validateMonth) || !Number.isInteger(validateYear)) {
    throw new Error('expected an integer');
  }
  if (!Number.isSafeInteger(validateDay) || !Number.isSafeInteger(validateMonth) || !Number.isSafeInteger(validateYear)) {
    throw new Error('value exceeds maximum safe integer');
  }
  
  let age = currentYear - (validateYear || currentYear);

  // validate if passed his birthday
  if (validateMonth >= currentMonth && validateDay >= currentDay) age -= 1;

  return age >= olderNumberToCompare;
}

module.exports = isAdult;
