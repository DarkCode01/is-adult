/*!
 * is-adult <https://github.com/darkcode01/is-adult>
 *
 * Copyright (c) 2020, Jose Segura.
 * Released under the MIT License.
 */

'use strict';

module.exports = function isAdult(day, month, year, options={ olderNumber: 18 }) {
  day = Math.abs(day);
  month = Math.abs(month);
  year = Math.abs(year);

  if (!Number.isInteger(day) || !Number.isInteger(month) || !Number.isInteger(year)) {
    throw new Error('expected an integer');
  }

  if (!Number.isSafeInteger(day) || !Number.isSafeInteger(month) || !Number.isSafeInteger(year)) {
    throw new Error('value exceeds maximum safe integer');
  }

  const date = new Date();
  const currentDay = date.getDate();
  const currentMonth = date.getMonth();
  const currentYear = date.getFullYear();
  let age = currentYear - (year || currentYear);

  if (month >= currentMonth && day >= currentDay) age -= 1;

  return age >= options.olderNumber;
}
