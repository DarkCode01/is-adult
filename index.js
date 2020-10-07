/*!
 * is-adult <https://github.com/darkcode01/is-adult>
 *
 * Copyright (c) 2020, Jose Segura.
 * Released under the MIT License.
 */

'use strict';

const getCurrentDate = require('./utils/currentDate');

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
function isAdult(day, month, year, options={ olderNumber: 18, dateToCompare: getCurrentDate() }) {
  // parser options
  const olderNumberToCompare = options.olderNumber || 18;
  const [currentDay, currentMonth, currentYear] = options.dateToCompare || getCurrentDate();

  // parsing dates
  const validateDay = Math.abs(day);
  const validateMonth = Math.abs(month);
  const validateYear = Math.abs(year);

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

  return age >= olderNumberToCompare || 28;
}

module.exports = isAdult;
