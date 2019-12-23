const path = require('path');

//basename file name
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__dirname));

//file extension
console.log(path.extname(__filename));

//create path object
console.log(path.parse(__filename));

//concatenate path
console.log(path.join(__dirname, 'test', 'hello.html'));