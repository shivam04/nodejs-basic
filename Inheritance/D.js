/**
 * Created by shivam.si on 08/04/20 9:06 am
 */

const A = require('./A');
const C = require('./C');
const util = require('util');

function D() {
    D.super_.apply(this, arguments);
};

util.inherits(D, C);

D.prototype.checkDemo = function () {
    D.prototype.__proto__.checkV2.call(this, "hh");
    console.log("there");
};

module.exports = D;
