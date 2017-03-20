//General service for connecting to DB and retrieving connection.

const Sequelize = require('sequelize');
const config = require('../../config');

module.exports = {
    connect
};

var _connection;

function connect() {
    return Promise.resolve(true);//TEMPORARY SO THAT I CAN START THE SERVER UP BEFORE I INSTALL MYSQL MODULE
    if (!_connection) {
        const db = config.get().db;
        return _connection = new Sequelize(db.name, db.username, db.password, {
                host: 'localhost',
                dialect: 'mysql',
                pool: {
                    max: 1,
                    min: 0,
                    idle: 10000
                }
            }).authenticate()
            .then(function (err) {
                console.log('Connection has been established successfully.');
                return _connection;
            })
            .catch(function (err) {
                console.log('Unable to connect to the database:', err);
                throw err;
            });
    } else {
        return _connection;
    }
}