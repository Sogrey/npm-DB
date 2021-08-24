/// <reference types="./vendor-typings/sqlite3" />
import sqlite3 from 'sqlite3';
declare class DBSqlite3 {
    constructor();
    test(): void;
    openDB(dbPath: string, callback: ((err: Error | null) => void) | undefined): sqlite3.Database;
}
export default DBSqlite3;
