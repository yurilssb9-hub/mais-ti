const Database = require('better-sqlite3');

const db = new Database('sistema_passagens.db');

db.exec(`
CREATE TABLE ()
`);

module.exports = db;