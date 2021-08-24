"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sqlite3_1 = __importDefault(require("sqlite3"));
var DBSqlite3 = /** @class */ (function () {
    function DBSqlite3() {
    }
    DBSqlite3.prototype.openDB = function (dbPath, callback) {
        // open({
        //   filename: dbPath,
        //   driver: sqlite3.Database,
        // }).then((db) => {
        //   // do your thing
        //   console.log(db);
        // })
        return new sqlite3_1.default.Database(dbPath, // DB path
        sqlite3_1.default.OPEN_READWRITE, //sqlite3.OPEN_READONLY、sqlite3.OPEN_READWRITE和sqlite3.OPEN_CREATE中的一个或多个。默认值为OPEN_READWRITE | OPEN_CREATE
        callback);
    };
    return DBSqlite3;
}());
exports.default = DBSqlite3;
//# sourceMappingURL=DBSqlite3.js.map