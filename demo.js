const moment = require('moment');
const twix = require('twix');


function getStartTimeForRange(currTime, timezoneOffset) {
    let startTime = moment({ hour:0, minute:0 }).subtract(timezoneOffset, 'm');
    let hourDiff = moment.duration(startTime.diff(currTime)).asHours();
    if(hourDiff > 0){
        return startTime.subtract(1, 'd');
    }
    if(hourDiff <= -24){
        return startTime.add(1, 'd');
    }
    return startTime;
}

function formatDate(date, format) {
    let momentDate= moment(date);
    return momentDate.utc().format(format);
}

let endDate = new Date();

console.log(endDate);

let startDate = moment(endDate).subtract(1, "days").format();

console.log(startDate);

let range = moment(startDate).twix(endDate);


let itr = range.iterate('hours');
//console.log(itr);

let output =[];
while(itr.hasNext()){
    let formattedDate = formatDate(itr.next().toDate(), "YYYY-MM-DD-HH:00");
    output.push(formattedDate);
}

console.log(output);
console.log(output.length);

startDate = getStartTimeForRange(endDate, "360");

console.log(startDate);

range = moment(startDate).twix(endDate);
itr = range.iterate('hours');
output =[];
while(itr.hasNext()){
    let formattedDate = formatDate(itr.next().toDate(), "YYYY-MM-DD-HH:00");
    output.push(formattedDate);
}
console.log(output);
console.log(output.length);

