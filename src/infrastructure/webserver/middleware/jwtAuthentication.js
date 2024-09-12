const jwt = require('jsonwebtoken');
const config = require("../../../config");
const {UserException} = require("../exceptions");
const {StatusCodes} = require("http-status-codes");

function jwtAuthentication() {
    return (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) {
            next(new UserException("Authentication failed.", StatusCodes.UNAUTHORIZED))
        };

        jwt.verify(token, config.jwtSecret, (err, user) => {
            if (err) {
                next(new UserException("Token not valid.", StatusCodes.FORBIDDEN))
            }
            req.user = user;
            next();
        });
    }
}

module.exports = jwtAuthentication;
