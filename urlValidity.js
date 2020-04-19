let url = require('url');
let validUrl = require('valid-url');

function validate(url) {
    let pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
        console.log("Url is valid");
        return true;
    }
    console.log("Url is not valid!");

}

function is_url(str)
{
    regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str))
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(is_url("http://www.example.com"));
console.log(is_url("https://www.example.com"));
console.log(is_url("www.example.com"));
console.log(is_url("http"));
console.log(is_url("https"));
console.log(is_url("http://"));
console.log(is_url("https://"));


console.log(url.parse("http://www.example.com"));
console.log(url.parse("https://www.example.com"));
console.log(url.parse("http://example.com"));
console.log(url.parse("http"));
console.log(url.parse("https"));
console.log(url.parse("http://"));
console.log(url.parse("https://"));
console.log(url.parse("ghgggh"));

console.log(is_url("www.pubtargetingurl.com"));
console.log(is_url(url.parse("https://fox6now.com?s=Hamilton+High+school").href));
console.log(is_url("http://shivam.media.net:3000/v2/ads?partid=5EEDA783-D3E6-45AE-B944-77C16AF21490&purl=www.regexmediatest.net%3Fabc%3Dwe%26nm%3D2020&numofads=10&uip=172.0.0.1&uua=Mozilla%2F5.0%20(Windows%20NT%206.1)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F41.0.2228.0%20Safari%2F537.36&ch=regextestdemo&mkt=autotest&pid=1&sspid=2&spid=3&vardump=undefined&vardid=230571"))
validate("http://google.com");


console.log(url.parse("https://fox6now.com?s=Hamilton+High+school"));
console.log(url.parse("www.regexmediatest.net?abc=we&nm=2020"))

console.log(url.parse("http://shivam.media.net:3000/v2/ads?partid=5EEDA783-D3E6-45AE-B944-77C16AF21490&purl=www.regexmediatest.net%3Fabc%3Dwe%26nm%3D2020&numofads=10&uip=172.0.0.1&uua=Mozilla%2F5.0%20(Windows%20NT%206.1)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F41.0.2228.0%20Safari%2F537.36&ch=regextestdemo&mkt=autotest&pid=1&sspid=2&spid=3&vardump=undefined&vardid=230571"));
console.log(url.parse("http://www.regexmediatest.com?abc=we&nm=2020").hostname);
console.log(is_url(url.parse("www.regexmediatest.com?abc=we&nm=2020").hostname));
console.log(is_url("www.regexmediatest.com"));
console.log(url.parse("regexmediatest.com?abc=we&nm=2020"));
console.log(url.parse("papa"));
console.log(is_url(url.parse("http://prasun_jain.com").href));
console.log(is_url("regexmediatest.com/?abc=we&nm=2020"));

console.log(validUrl.isUri("regexmediatest.com/?abc=we&nm=2020"));

console.log(is_url("ABC.com"));
console.log(is_url("abc.com"));

console.log(is_url(url.parse("http://PRASUN-jain.com?abc=def&ghi=JKL").href));
console.log((url.parse("http://PRASUN-jain.com?abc=def&ghi=JKL").href));
console.log(is_url(url.parse("http://comGrindr.com").href));
console.log(url.parse("ff.com"));
console.log(is_url("ff.com"));


