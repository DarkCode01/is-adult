![MIT](https://img.shields.io/npm/l/@darkcode01/is-adult)
![downloads](https://img.shields.io/npm/dw/@darkcode01/is-adult)
![doanloads_year](https://img.shields.io/npm/dm/@darkcode01/is-adult)
![NPM](https://github.com/DarkCode01/is-adult/workflows/Node.js%20Package/badge.svg?branch=main)



> **is-adult** is a simple library to Knows if is older or not by the birthday date.


### Install
Install with [npm](https://www.npmjs.com/):
or
Install with [yarn](https://yarnpkg.com/)

```sh
$ npm install --save @darkcode01/is-adult
```

```sh
$ yarn add @darkcode01/is-adult
```


### Usage

```javascript
const isAdult = require('@darkcode01/is-adult');

console.log(isAdult(2, 2, 1999)); //=> true
console.log(isAdult('2', '2', '1999')); //=> true

console.log(isAdult(2, 8, 2010)); //=> false
console.log(isAdult('3', '3', '2010')); //=> false

// updating older number
console.log(isAdult(2, 2, 1999, { olderNumber: 21 })); // => true
console.log(isAdult(2, 2, 1999, { olderNumber: 22 })); // => false

// updating date to compare
console.log(isAdult(2, 2, 1999, { dateToCompare: [1, 1, 2019] })); // => true
console.log(isAdult(2, 2, 1999, { dateToCompare: [1, 1, 2017] })); // => false

// Errors
console.log(isAdult(NaN, '9', '2000')); //=> Uncaught Error: expected an integer
console.log(isAdult(NaN, '9', '10000000000000000000000')); //=> Uncaught Error: value exceeds maximum safe integer
```

### Docs

Param | type |Description | Default
----- |--- |----------- | -------
`day`   | `string`, `number` | Number of day of month. | `required`
`month` | `string`, `number` | Number month. | `require`
`year`  | `string`, `number` | Number of full year. | `required`
`options`| `object` | Options object | `{ olderNumber: 18, dateToCompare: getCurrentDate() }`

### Utilities functions 
Function | Description | Example
----- | ----------- | -----
`getCurrentDate` | return a parsed current date | `[7, 10, 2020]`


**Made by [@darkcoder01](https://github.com/darkcode01) with ❤️**
