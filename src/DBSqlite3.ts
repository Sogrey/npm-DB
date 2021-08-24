import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

class DBSqlite3 {

  constructor() { }

  test(){
    console.log('Hello world!');
  }

  openDB(dbPath: string, callback: ((err: Error | null) => void) | undefined) {
    // open({
    //   filename: dbPath,
    //   driver: sqlite3.Database,
    // }).then((db) => {
    //   // do your thing
    //   console.log(db);
    // })

    return new sqlite3.Database(
      dbPath, // DB path
      sqlite3.OPEN_READWRITE, //sqlite3.OPEN_READONLY、sqlite3.OPEN_READWRITE和sqlite3.OPEN_CREATE中的一个或多个。默认值为OPEN_READWRITE | OPEN_CREATE
      callback);
  }
}

export default DBSqlite3