// Middleware for logging requests
module.exports = function (req, res, next) {
    console.log(`Request URL: ${req.url}, Request Method: ${req.method}`);
    next();
};