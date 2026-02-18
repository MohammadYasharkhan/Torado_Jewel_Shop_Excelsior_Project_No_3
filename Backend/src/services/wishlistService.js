import { WishlistRepository } from "../repositories/wishlistRepository.js";

class WishlistService {
    static async addToWishlist(userId, productId) {
        const result = await WishlistRepository.addToWishlist(userId, productId);
        return result;
    }

    static async getUserWishlist(userId) {
        const wishlist = await WishlistRepository.getUserWishlist(userId);
        return wishlist;
    }

    static async removeFromWishlist(userId, productId) {
        const result = await WishlistRepository.removeFromWishlist(userId, productId);
        return result;
    }
}

export { WishlistService };