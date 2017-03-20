//Mount API routes onto main server. In the interest of simplicity, I
//stripped out query validators and sanitizers. Trusting you to not
//inject any bad SQL haha...

const queries = require("./queries.js");

module.exports = (router) => {

    //Test route
    router.get('/sayhi', (req, res) => res.promise('Hi!'));

    //Q1: Titles and Years of movies with a particular Star
    router.get('/q1', (req, res) => res.promise(queries.q1(req.query.starName)));

    //Q2: Titles and Years of longest movies for each Studio
    router.get('/q2', (req, res) => res.promise(queries.q2()));

    //Q3: Name of richest movie producer for a given Studio
    router.get('/q3', (req, res) => res.promise(queries.q3(req.query.studioName)));

    //Q4: Names of movie stars who star only in movies made by studios with same address
    router.get('/q4', (req, res) => res.promise(queries.q4()));

    //Q5: Names of movie stars who starred in all movies produced by MGM studios... not a dynamic query?
    router.get('/q5', (req, res) => res.promise(queries.q5()));

    router.post('/custom', (req, res) => res.promise(queries.custom(req.body.query)));

};