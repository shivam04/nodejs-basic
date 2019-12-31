'use strict'
const request = require('request');
const Promise = require('bluebird');
class HTTPRequest{
    constructor(hostURL, options){
        this.hostURL = hostURL;
        this.options = options;
    }
    get(queryParams){
        let host = this.hostURL;
        let hasProperties = false;
        for(let queryParam in queryParams){
            if(hasProperties == false){
                host = host + '?';
                hasProperties = true;
            }
            else {
                host = host + '&';
            }
            host = host + queryParam + '=' + queryParams[queryParam];
        }
        return this.req(host);
    }
    req(host){
        const that = this;
        return new Promise(function (resolve, reject) {
            // todo timeout should me 20 ms
            request(host, that.options, function (error, response, body) {
                if(response) {
                    /*that.debugService.varDump({
                        "headers": response.headers,
                        "timings": response.timings
                    }, "HTTP debug " + host);*/
                }
                if(error != null){
                    reject(error);
                }
                else if(response && response.statusCode != 200){
                    resolve(null);
                }
                else {
                    resolve({body , time :response.timings.response});
                }
            });
        })
    }

}

module.exports = HTTPRequest;
