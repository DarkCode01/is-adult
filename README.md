> is-older is a simple library to Knows if is older or not by the birthday date.


### Install
Install with [npm](https://www.npmjs.com/):
or
Install with [yarn](https://yarnpkg.com/)

```sh
$ npm install --save is-older
```

```sh
$ yarn add is-older
```


### Usage

```javascript
const isOlder = require('is-older');

console.log(isOlder(2, 2, 1999)); //=> true
console.log(isOlder('2', '2', '1999')); //=> true

console.log(isOlder(2, 8, 2010)); //=> false
console.log(isOlder('3', '3', '2010')); //=> false

console.log(isOlder(NaN, '9', '2000')); //=> Uncaught Error: expected an integer
console.log(isOlder(NaN, '9', '10000000000000000000000')); //=> Uncaught Error: value exceeds maximum safe integer
```

<center>Enjo it <3</cnter>
