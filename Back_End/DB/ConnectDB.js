 // connect to postgres DB


const {Pool} = require('pg');
const CreateDB=require('./CreateDB');

CreateDB();

const connectionString = 'postgresql://postgres:972500@pg:5432/restuarant';


const pool = new Pool({
    connectionString: connectionString
});
pool.on('connect', () => {
    console.log('connected to the db');
});


module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    }
};
