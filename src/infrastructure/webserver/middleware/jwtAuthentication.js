const jwt = require('jsonwebtoken');
const config = require("../../../config");

function jwtAuthentication() {
    return (req, res, next) => {
        const token = req.header('Authorization');
        if (!token) return res.status(401).json({ error: 'Authentication failed' });

        jwt.verify(token, config.jwtSecret, (err, user) => {
            if (err) return res.status(403).json({ error: 'Token is not valid' });
            req.user = user;
            next();
        });
    }
}

module.exports = jwtAuthentication;
