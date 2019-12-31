let HTTPRequest = require('./HTTPRequest');
let url = "http://localhost:8080/urlPattern/getMatchedAds?url=vinod%20black%20shivam%20blue%20swaps%20shirt%20trouser%20rishabh%20shoe&json=1&ropt=1";
let options = {
    url: url,
    json: true,
    method: 'POST',
    body: {'url': url},
    timeout: 6000000,
    time: 'true',
    headers: {'connection': 'keep-alive'}
};
let httpRequest = new HTTPRequest(url, options);
async function result() {
    let { body : responses} = await httpRequest.req(url);
    console.log(responses.r);
    //console.log(await httpRequest.req(url));
}
result();
