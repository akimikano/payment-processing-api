const bcrypt = require('bcrypt');
const config = require("../../config");


async function hashPIN(pin) {
    return await bcrypt.hash(pin, config.passwordHashSalt);
}

async function matchPIN(raw_pin, pin_hash) {
    return await bcrypt.compare(raw_pin, pin_hash);
}


module.exports = {hashPIN, matchPIN};
