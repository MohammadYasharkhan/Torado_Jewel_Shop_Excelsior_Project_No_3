import { db_object } from "../configs/dbConfig.js";

class CartRepository {
    static async addToCart(userId, productId, quantity) {
        const [rows] = await db_object.query(
            'CALL add_to_cart(?, ?, ?)',
            [userId, productId, quantity]
        );
        return rows[0][0].status;
    }

    
    static async getUserCart(userId) {
        const [rows] = await db_object.query(
            'CALL get_user_cart(?)',
            [userId]
        );
        return {
            items: rows[0],
            meta: rows[1][0]  // { total_items, subtotal }
        };
    }


    static async updateQuantity(userId, productId, quantity) {
        const [rows] = await db_object.query(
            'CALL update_cart_quantity(?, ?, ?)',
            [userId, productId, quantity]
        );
        return rows[0][0];
    }


    static async toggleSavedForLater(userId, productId) {
        const [rows] = await db_object.query(
            'CALL toggle_saved_for_later(?, ?)',
            [userId, productId]
        );
        return rows[0][0];
    }


    static async removeFromCart(userId, productId) {
        const [rows] = await db_object.query(
            'CALL remove_from_cart(?, ?)',
            [userId, productId]
        );
        return rows[0][0].status;
    }


    static async clearCart(userId) {
        const [rows] = await db_object.query(
            'CALL clear_cart(?)',
            [userId]
        );
        return rows[0][0];
    }


    static async batchUpdateQuantities(userId, updates) {
        const [rows] = await db_object.query(
            'CALL batch_update_cart_quantities(?, ?)',
            [userId, JSON.stringify(updates)]
        );
        return rows[0][0];
    }
}

export { CartRepository };