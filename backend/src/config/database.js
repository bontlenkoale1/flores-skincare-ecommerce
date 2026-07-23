const { pool } = require ("pg");

const pool = new pool ({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USSER,
    password: process.env.DB_PASSWORD,
});

module.exports = pool;