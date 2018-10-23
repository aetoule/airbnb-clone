const massive = require('massive');
require('dotenv').config()

let db;

module.exports = {
    initDb(){
        db = db || massive(process.env.TEST_CONNECTION_STRING);
        return db;
    }
}