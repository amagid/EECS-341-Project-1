//Mount API routes onto main server. In the interest of simplicity, I
//stripped out query validators and sanitizers. Trusting you to not
//inject any bad SQL haha...

module.exports = function mountAPI(router) {

    router.get('/sayhi', (req, res) => res.promise('Hi!'));

};