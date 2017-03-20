/* To simplify server responses and their interaction with unresolved promises,
 * I added this file. It just attaches a .promise() method to the response
 * object so that when the promise resolves, its final state will be passed
 * in the response.
 * 
 * This is just an implementation choice to make things easier for me.
 */

const Promise = require('bluebird');

module.exports = attachResponsePromise;

function attachResponsePromise(req, res, next) {
    res.promise = response => {
        return Promise.resolve(response)
            .then(result => {
                res.status(200).json(result);
            })
            .catch(error => {
                res.status(error.status || error.statusCode || 500).json(error.message || 'Unknown Error');
            })
            .catch(error => {
                res.status(500, 'Unknown Error');
            });
    };
    next();
}