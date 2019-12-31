const moment = require('moment');

var formatDate = function(date, format){
    let momentDate= moment(date);
    return momentDate.utc().format(format);
};

let newTimeFormat = "YY-MM-DD:HH";
let date = new Date(2021,3,4,8);
console.log(date);
let dateTimeStr = formatDate(date, newTimeFormat);

console.log(dateTimeStr);

