const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'react-crud.comjoqo0smjn.us-east-1.rds.amazonaws.com',
    database: 'instagram',
    password: 'postgress',
    port: '5432'
});

const getAllInstagram = (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getAllInstagram
}