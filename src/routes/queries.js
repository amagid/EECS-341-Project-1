//This file simply contains a bunch of querying functions, both static and dynamic. Exists only for organization.

//Connect to db, or retrieve existing connection if already connected.
let connection;
require('../services/mysql').connect().then(_connection => {
    connection = _connection;
});

module.exports = {
    q1,
    q2,
    q3,
    q4,
    q5
};

//Q1: Titles and Years of movies with a particular Star
function q1(starName) {
    return connection.query(`select movieTitle, movieYear from movies natural join stars where starName="${starName}";`)
    .then(result => {
        return result[0];
    });
}

//Q2: Titles and Years of longest movies for each Studio
function q2() {

}

//Q3: Name of richest movie producer for a given Studio
function q3(studioName) {

}

//Q4: Names of movie stars who star only in movies made by studios with same address
function q4() {

}

//Q5: Names of movie stars who starred in all movies produced by MGM studios... not a dynamic query?
function q5() {

}