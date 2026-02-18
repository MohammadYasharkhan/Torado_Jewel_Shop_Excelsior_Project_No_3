import { WishlistService } from "../services/wishlistService.js";
import { addUser, alreadyExist, getAlldataS,notFound,removeEntry,ResponseHandler } from "../responceHandler/userResponseHandler.js";

// Add to wishlist
const addToWishlistController = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { productId } = req.body;
        const result = await WishlistService.addToWishlist(userId, productId);
        const responseObj = result === 1 ? new addUser(result) : new alreadyExist(result);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

// Get user's wishlist
const getWishlistController = async (req, res, next) => {
    try {
        const userId = req.userId; // From auth middleware
        const wishlistItems = await WishlistService.getUserWishlist(userId);
        const responseObj = new getAlldataS(wishlistItems);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

// Remove from wishlist
const removeFromWishlistController = async (req, res, next) => {
    try {
        const userId = req.userId; // From auth middleware
        const { productId } = req.params; // From URL parameter
        const result = await WishlistService.removeFromWishlist(userId, productId);
        const responseObj = result === 1 ? new getAlldataS(result) : new notFound(result);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

export {
    addToWishlistController,
    getWishlistController,
    removeFromWishlistController
};