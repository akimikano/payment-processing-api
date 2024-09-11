const bcrypt = require('bcrypt');
const config = require("../../config");
const jwt = require('jsonwebtoken');


async function hashPassword(raw_password) {
    return await bcrypt.hash(raw_password, config.passwordHashSalt);
}


async function matchPassword(raw_password, password_hash) {
    return await bcrypt.compare(raw_password, password_hash);
}

function generateJwtTokens(terminal_id) {
    return jwt.sign({ terminal_id: terminal_id }, config.jwtSecret, {
        expiresIn: '1h',
    });
}

module.exports = {hashPassword, matchPassword, generateJwtTokens};
