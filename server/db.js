const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: 'seba',
    port: 5432,
    database: 'postapp'
})

module.exports = pool;