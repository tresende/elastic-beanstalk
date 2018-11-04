module.exports = (app) => {

    let connection = {};
    let itemsDAO = {};

    const search = (params, res) => {
        setConnection();
        itemsDAO.search(params, (err, results) => {
            connection.end();
            res.json(results);
        });
    }

    app.get('/api/item/:id', (req, res) => {
        search(req.query, res);
    });

    app.get('/api/item', (req, res) => {
        search(req.query, res);
    });

    app.post('/api/item', (req, res) => {
        setConnection();
        itemsDAO.save(req.body, (err, results) => {
            connection.end();
            res.json(results);
        });
    });

    const setConnection = () => {
        connection = app.dataAccess.connectionFactory();
        itemsDAO = new app.dataAccess.itemsDAO(connection);
    }
};