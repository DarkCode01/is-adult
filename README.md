![NPM](https://github.com/DarkCode01/is-adult/workflows/Node.js%20Package/badge.svg?branch=main)

> is-adult is a simple library to Knows if is older or not by the birthday date.


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

console.log(isAdult(NaN, '9', '2000')); //=> Uncaught Error: expected an integer
console.log(isAdult(NaN, '9', '10000000000000000000000')); //=> Uncaught Error: value exceeds maximum safe integer
```

<center>Enjo it <3</cnter>
