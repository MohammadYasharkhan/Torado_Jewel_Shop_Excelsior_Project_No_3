import { db_object } from "../configs/dbConfig.js";

class WishlistRepository {
    // Add product to wishlist
    static async addToWishlist(userId, productId) {
        const [row] = await db_object.query(
            'CALL create_wishlist(?, ?)',
            [userId, productId]
        );
        return row[0][0].status; // { status: 1 or 0 }
    }

    // Get user's wishlist with product details
    static async getUserWishlist(userId) {
        const [row] = await db_object.query(
            'CALL get_user_wishlist(?)',
            [userId]
        );
        return row[0]; // Array of wishlist items with product details
    }

    // Remove product from wishlist
    static async removeFromWishlist(userId, productId) {
        const [row] = await db_object.query(
            'CALL remove_from_wishlist(?, ?)',
            [userId, productId]
        );
        return row[0][0].status; // { status: 1 or 0 }
    }
}

export { WishlistRepository };