module.exports = {
    getHomes(db) {
        return db.query('SELECT * FROM homes');
    },
    postCity(db) {
        return db.query('select * from images inner join home on images.home_id = home.homeid where home.city = $1')
    }
}

