import express from "express";
import { 
    addToWishlistController,
    getWishlistController,
    removeFromWishlistController
} from "../controllers/wishlistController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";

const router = express.Router();

// All routes require authentication
router.use(authMiddleware);

// router.post("/", addToWishlistController);
// router.get("/", getWishlistController);
// router.delete("/:productId", removeFromWishlistController);

router.post("/add-to-wishlist",userValidationMid(DataValidator.validateProductId.bind(DataValidator)), addToWishlistController);
router.get("/get-users-wishlist",getWishlistController);
router.delete("/remove-from-wishlist/:productId",userValidationMid(DataValidator.validateProductId.bind(DataValidator), 'params'), removeFromWishlistController);

export default router;