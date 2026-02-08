import { db_object } from "../configs/dbConfig.js";

class UserRepository {
    static async create(name,email,password) {
        const [rows] = await db_object.query(
            "CALL insert_user(?,?,?)",
            [name, email,password]
        );
        return rows[0]?.[0];
    }

    static async readByEmail(email)
    {
        const [rows] = await db_object.query("CALL findByEmail(?)",[email]);
        return rows[0]?.[0];
    }
}

export {UserRepository};