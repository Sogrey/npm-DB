const api = require('../dist/index')

console.log(api)

var sqlite3 = new api.DBSqlite3();

var db = sqlite3.openDB("./tests/dbs/616068.db", (error) => {
    console.log('error', error);
});

if (db) {
    console.log(db);
    db.all('select * from model_type where level=0', function (err, row) {
        console.log('err', err);
        console.log(row);
    })
}