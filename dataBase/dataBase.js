const {Pool} = require('pg');
const dotenv = require("dotenv").config();


const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,    
    password: process.env.PGPASSWORD

});
console.log(pool)

module.exports = pool;