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
    .then(_stripdata);
}

//Q2: Titles and Years of longest movies for each Studio
function q2() {
    return connection.query(`select movies.movieTitle, movies.movieYear, movies.studioName from movies inner join (select movies.studioName, max(movies.length) "maxlength" from movies group by movies.studioName) m2 on movies.studioName = m2.studioName and movies.length = m2.maxlength;`)
    .then(_stripdata);
}

//Q3: Name of richest movie producer for a given Studio
function q3(studioName) {
    return connection.query(`select movieExec.name from movieExec inner join movies on movies.producerC = movieExec.cert where movies.studioName = "${studioName}" and movieExec.networth = (select max(networth) from movies inner join movieExec on movies.producerC = movieExec.cert where movies.studioName = "${studioName}" group by movies.studioName) group by movieExec.name;`)
    .then(_stripdata);
}

//Q4: Names of movie stars who star only in movies made by studios with same address
function q4() {
    return connection.query(`select starName from movieStar where starName not in (select movieStar.starName from movieStar natural join stars natural join movies inner join stud on movies.studioName = stud.name where movieStar.address <> stud.address);`)
    .then(_stripdata);
}

//Q5: Names of movie stars who starred in all movies produced by MGM studios... not a dynamic query?
function q5() {
    return connection.query(`select s.starName from stars s where not exists (select * from movies where movies.studioName = "MGM" and not exists (select * from stars where stars.movieTitle = movies.movieTitle and stars.movieYear = movies.movieYear and stars.starName = s.starName)) group by s.starname;`)
    .then(_stripdata);
}

//Strips out all unnecessary information attached to data.
function _stripdata(duplicateResultArray) {
    return duplicateResultArray[0];
}