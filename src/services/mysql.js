//General service for connecting to DB and retrieving connection.

const Sequelize = require('sequelize');
const config = require('../../config');

module.exports = {
    connect
};

var _connection;

function connect() {
    if (!_connection) {
        const db = config.get().db;
        _connection = new Sequelize(db.name, db.username, db.password, {
                host: 'localhost',
                dialect: 'mysql',
                pool: {
                    max: 1,
                    min: 0,
                    idle: 10000
                }
            });
        return _connection.authenticate()
            .then(function (err) {
                console.log('Connection has been established successfully.');
                return _connection;
            })
            .catch(function (err) {
                console.log('Unable to connect to the database:', err);
                throw err;
            });
    } else {
        return Promise.resolve(_connection);
    }
}