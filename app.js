var url = require('url');
var fs = require('fs');

const renderHtml=(path, res)=>{
    fs.readFile(path,(err, data)=>{
        if(err){
            console.log(err)
        }else{
        res.writeHead('200',{'Content-Type': 'text/html'});
        res.write(data);
        }
        res.end()
    })
}

const handleRequest=(req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const baseURL = 'http://' + req.headers.host + '/';
    const reqUrl = new URL(req.url,baseURL);
    const path = reqUrl.pathname
    switch(path){
        case '/':
            renderHtml('./index.html', res);
            break;
        case '/contact':
            renderHtml('./contact-me.html', res);
            break;
        case '/about':
            renderHtml('./about.html', res);
            break;
        default:
            renderHtml('./404.html', res);
            break;
    }
}

module.exports = handleRequest
