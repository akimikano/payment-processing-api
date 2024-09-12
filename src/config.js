module.exports = {
    port: process.env.PORT || 8000,
    host: process.env.HOST || '0.0.0.0',
    postgres_db: process.env.POSTGRES_DB,
    postgres_user: process.env.POSTGRES_USER,
    postgres_password: process.env.POSTGRES_PASSWORD,
    db_host: process.env.DB_HOST,
    db_port: process.env.DB_PORT,
    jwtSecret: process.env.JWT_SECRET || 'jkl!±@£!@ghj1237',
    pinMaxTries: process.env.PIN_MAX_TRIES || 3,
    passwordHashSalt: process.env.PASSWORD_HASH_SALT || 10,
};