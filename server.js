var http = require('http'),
    httpProxy = require('http-proxy');

var options = {
    router: {
        'exarbor.com/game': '127.0.0.1:8001',
        'exarbor.com/': '127.0.0.1:8003'
    }
};

var proxyServer = httpProxy.createServer(options);

console.log('Listening on 127.0.0.1:80');
proxyServer.listen(80);

