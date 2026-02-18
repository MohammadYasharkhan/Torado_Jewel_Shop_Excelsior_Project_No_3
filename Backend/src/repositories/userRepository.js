import { db_object } from "../configs/dbConfig.js";
import { ConflictError } from "../errorHandler/errorHandler.js";

class UserRepository {
    static async create(name, email, password) {
        try {
            const [rows] = await db_object.query(
                "CALL user_create(?,?,?)",
                [name, email, password]
            );
            return rows[0]?.[0];
        } catch (err) {
            if (err.code === "ER_DUP_ENTRY") {
                // rethrow a domain-friendly error
                throw new ConflictError("Email Already Exist");
            }
            throw err; // unknown DB error
        }
    }

    static async readByEmail(email) {
        const [rows] = await db_object.query("CALL user_find_by_email(?)", [email]);
        return rows[0]?.[0];
    }


    static async readById(userId)
    {
        const [rows] = await db_object.query("CALL user_find_by_id(?)", [userId]);
        return rows[0]?.[0];
    }


    static async updatePassword(userId,password)
    {
        const [rows] = await db_object.query("CALL update_password_by_id(?,?)",[userId,password]);
        return Boolean(rows[0][0].is_updated);
    }
}

export { UserRepository };