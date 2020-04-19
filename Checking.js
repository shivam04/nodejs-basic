/**
 * Created by shivam.si on 08/04/20 6:16 pm
 */


const DClass = require('./DClass');

function yo(a , b) {
    Object.assign(a,b);
}

let dcl = new DClass();

let p = {
    a : "1234",
    b : "5678"
};

console.log(dcl);
console.log(p);

yo(p, dcl);
console.log(p);

