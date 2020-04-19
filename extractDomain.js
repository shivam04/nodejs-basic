/**
 * Created by shivam.si on 24/04/20 11:33 am
 */

const url = require('url');

function extractDomanin(urlToParse) {
    let urlDetails = url.parse(urlToParse);

    if(!urlDetails.protocol){
        urlToParse = "http://" + urlToParse;
        urlDetails = url.parse(urlToParse);
    }

    let domain = urlDetails.host;
    return domain;
}


console.log(extractDomanin("www.example.com"));
console.log(extractDomanin("http://www.example.com"));
console.log(extractDomanin("example.com"));
console.log(extractDomanin("http://example.com"));
console.log(extractDomanin("abc.example.com"));
console.log(extractDomanin("http://abc.example.com"));
console.log(url.parse("http://abc.example.com"));
console.log(url.parse("http://www.abc.example.com"));
