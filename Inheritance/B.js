/**
 * Created by shivam.si on 08/04/20 9:03 am
 */
const A = require('./A');
const util = require('util');

function B() {
    B.super_.apply(this, arguments);
};

util.inherits(B, A);

B.prototype.calling = function () {
    this.check();
    console.log("there");
};

module.exports = B;
