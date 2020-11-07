const { match } = require("assert");
let http = require("http");
let https = require("https");
// let fs = require("fs");
let unzipper = require("unzipper");
let queryString = require("querystring");

function auth(req, res){
    let query = queryString.parse(req.url.match(/^\/auth\?([\s\S]+)$/)[1]);
    console.log(query);
    getToken(query.code, function(info){
        console.log(info);
        // res.write(JSON.stringify(info));
        res.write(`<a href='http://localhost:8083/?token=${info.access_token}'>publish</a>`)
        res.end();
    });
}

function getToken(code, callback){
    let request = https.request({
        hostname: "github.com",
        path: `/login/oauth/access_token?code=${code}&client_id=Iv1.8d09153eb3b22b44&client_secret=a4191a40f105fa63df647f5e28a62091584d9a97`,
        prot: 443,
        method: "POST"
    }, function(res){
        let body = "";
        res.on("data", chunk => {
            body += (chunk.toString());
        })
        res.on("end", chunk => {
            callback(queryString.parse(body));
        })
        // console.log(res);
    });
    request.end();
}

function publish(req, res){
    let query = queryString.parse(req.url.match(/^\/publish\?([\s\S]+)$/)[1]);
    getUser(query.token, info => {
        if(info.login === "rubinbaby"){
            req.pipe(unzipper.Extract({path: "../server/public/"}));
            req.on("end", function(){
                res.end("success!");
            })
        }
    });
}

function getUser(token, callback){
    let request = https.request({
        hostname: "api.github.com",
        path: `/user`,
        prot: 443,
        method: "GET",
        headers: {
            Authorization: `token ${token}`,
            "User-Agent": "toy-publish-yinxzhu"
        }
    }, function(res){
        let body = "";
        res.on("data", chunk => {
            body += (chunk.toString());
        })
        res.on("end", chunk => {
            callback(JSON.parse(body));
        })
        // console.log(res);
    });
    request.end();
}

http.createServer(function(req, res){
    if(req.url.match(/^\/auth\?/))
        return auth(req, res);
    if(req.url.match(/^\/publish\?/))
        return publish(req, res);
    // console.log(req.headers);
    // console.log("request");
    // let outFile = fs.createWriteStream("../server/public/tmp.zip");
    // req.pipe(outFile);
    // req.pipe(unzipper.Extract({path: "../server/public/"}))
}).listen(8082);