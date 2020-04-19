const Decimal = require('decimal.js');

let x = new Decimal(1.053);
let y = new Decimal(10);
console.log(x,y);
console.log(x/y);
console.log(x.dividedBy(y));
console.log(0.011/10);

console.log(x.greaterThan(y));
