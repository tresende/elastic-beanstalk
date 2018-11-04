var mysql = require('mysql');

function ItemsDAO(connection) {
    this._connection = connection;
}

ItemsDAO.prototype.search = function (params, callback) {
    let query = 'select id, event, timestamp from item ';
    if (params.id) {
        query += 'where id = ?';
        query = mysql.format(query, params.id)
    }
    else if (params.term) {
        query += "where event like " + this._connection.escape('%' + params.term + '%');
    }
    this._connection.query(query, callback);
}

ItemsDAO.prototype.save = function (item, callback) {
    var query = {};
    if (item.timestamp) {
        query = mysql.format('insert into item (event, timestamp) values (?, ?)', item.event, item.timestamp);
    } else {
        query = mysql.format('insert into item (event, timestamp) values (?, now())', item.event);
    }
    this._connection.query(query, callback);
}

module.exports = function () {
    return ItemsDAO;
};
