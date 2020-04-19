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

function getRangeBetweenDates (startDate, endDate, itrValue, rangeFormat){
    //console.log(moment(startDate).twix(endDate).length("hours"));
    let range = moment(startDate).twix(endDate);
    let itr = range.iterate(itrValue);
    let output =[];
    while(itr.hasNext()){
        let formattedDate = formatDate(itr.next().toDate(), rangeFormat);
        output.push(formattedDate);
    }
    return output
};

function formatDate(date, format) {
    let momentDate= moment(date);
    return momentDate.utc().format(format);
}

let endDate = new Date();

console.log(endDate);

let startDate = moment(endDate).subtract(NaN - 1, "days").format();

console.log("1" - 1);

let expirySeconds = moment().hour(0).minute(0).second(0).add(NaN + 1, 'days').diff(moment().hour(0).minute(0).second(0), 'seconds');
console.log(expirySeconds);

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

startDate = getStartTimeForRange(endDate, "-840");

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


let exclusionDate = moment(startDate).add("7"-1, 'days').format();
console.log(exclusionDate);
let expiryUnixTimeStamp = moment(exclusionDate).add(1, 'days').hour(23).minute(59).second(59).unix();
console.log(expiryUnixTimeStamp);


let date = new Date();
console.log(date);
let stDateTime = getStartTimeForRange(date, 1440);

console.log(stDateTime);

let rnge = getRangeBetweenDates(startDate, date, 'hours');
console.log(rnge);
