> is-adult is a simple library to Knows if is older or not by the birthday date.


### Install
Install with [npm](https://www.npmjs.com/):
or
Install with [yarn](https://yarnpkg.com/)

```sh
$ npm install --save is-adult
```

```sh
$ yarn add is-adult
```


### Usage

```javascript
const isAdult = require('is-adult');

console.log(isAdult(2, 2, 1999)); //=> true
console.log(isAdult('2', '2', '1999')); //=> true

console.log(isAdult(2, 8, 2010)); //=> false
console.log(isAdult('3', '3', '2010')); //=> false

console.log(isAdult(NaN, '9', '2000')); //=> Uncaught Error: expected an integer
console.log(isAdult(NaN, '9', '10000000000000000000000')); //=> Uncaught Error: value exceeds maximum safe integer
```

<center>Enjo it <3</cnter>
