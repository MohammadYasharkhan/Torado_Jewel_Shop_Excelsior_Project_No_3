import mysql2 from "mysql2";

const pool = mysql2.createPool({
    uri: process.env.DATABASE_URL,   // <- use uri key
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    multipleStatements: true
});

const db_object = pool.promise();

export { db_object };
