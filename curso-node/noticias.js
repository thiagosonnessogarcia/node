var http = require('http');

http.createServer(function (req, res) {

    var categoria = req.url;

    if(categoria == '/tecnologia'){
        res.end("<html><body>Portal de Tecnologia</body></html>");
    } else if (categoria == '/moda') {
        res.end('<html><body>Portal de Moda</body></html>')
    } else if (categoria == '/beleza') {
        res.end('<html><body>Portal de Beleza</body></html>');
    } else {
        res.end('<html><body>Portal de Noticias</body></html>');
    }

}).listen(3000);