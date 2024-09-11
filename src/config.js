module.exports = {
    port: process.env.PORT || 8000,
    host: process.env.HOST || '0.0.0.0',
    mongo: {
        uri: process.env.MONGO_URL || 'mongodb://localhost:27017/post-clean-code'
    },
    redis: {
        uri: process.env.REDIS_URL || 'redis://localhost:6379'
    },
    jwtSecret: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237',
    pinMaxTries: process.env.PIN_MAX_TRIES || 3,
    passwordHashSalt: process.env.PASSWORD_HASH_SALT || 10,
};