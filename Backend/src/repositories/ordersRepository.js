import { db_object } from "../configs/dbConfig.js";

class OrderRepository {
    static async placeOrder(userId, orderData) {

        try {
            const { firstName, lastName, country, city, division, street, phone, orderNote } = orderData;

            const [rows] = await db_object.query(
                'CALL place_order(?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [userId, firstName, lastName, country, city, division, street, phone, orderNote ?? null]
            );

            return rows[0][0]; // { order_id: 5 }
        }
        catch (err) {
            if (err.code === 'ER_SIGNAL_EXCEPTION') {  // this is the code for SQLSTATE 45000
                return { isEmpty: true, message: err.sqlMessage };        // 'Cart is empty'
            }
            throw new Error("Failed to place order");
        }
    }
}

export default OrderRepository;