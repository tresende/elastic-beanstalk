var mysql = require('mysql');

function ItemsDAO(connection) {
    this._connection = connection;
}

ItemsDAO.prototype.search = function (params, callback) {
    let query = 'SELECT ID, EVENT, TIMESTAMP FROM ITEM ';
    if (params.id) {
        query += 'WHERE ID = ?';
        query = mysql.format(query, params.id)
    }
    else if (params.term) {
        query += "WHERE EVENT LIKE " + this._connection.escape('%' + params.term + '%');
    }
    this._connection.query(query, callback);
}

ItemsDAO.prototype.save = function (item, callback) {
    var query = {};
    if (item.timestamp) {
        query = mysql.format('INSERT INTO ITEM (EVENT, TIMESTAMP) VALUES (?, ?)', item.event, item.timestamp);
    } else {
        query = mysql.format('INSERT INTO ITEM (EVENT, TIMESTAMP) VALUES (?, NOW())', item.event);
    }
    this._connection.query(query, callback);
}

module.exports = function () {
    return ItemsDAO;
};
