var mysql = require('mysql');

var connMySQL = function(){
    console.log('Conexão com BD foi Estabelecida')
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'portal_noticias'
    });
}

module.exports = function () {
    console.log('O Autoload carregou com sucesso!!! BD')
    return connMySQL;
}