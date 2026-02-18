import { CartRepository } from "../repositories/cartRepository.js";

class CartService {
    static async addToCart(userId, productId, quantity = 1) {
        const result = await CartRepository.addToCart(userId, productId, quantity);
        return result;
    }

    static async getUserCart(userId) {
        const cartItems = await CartRepository.getUserCart(userId);
        return cartItems;
    }

    static async removeFromCart(userId, productId) {
        const result = await CartRepository.removeFromCart(userId, productId);
        return result;
    }

    static async batchUpdateQuantities(userId, updates) {
        const result = await CartRepository.batchUpdateQuantities(userId, updates);
        console.log(result);
        return result;
    }
}

export { CartService };