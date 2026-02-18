import express from "express";
import { addToCartController, batchUpdateUserCartController, getUserCartController, removeFromCartController } from "../controllers/cartController.js";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router(); 

router.use(authMiddleware);

router.post("/add-to-cart",userValidationMid(DataValidator.validateProductId.bind(DataValidator)),addToCartController);
router.get("/get-users-cart",getUserCartController);
router.delete("/remove-from-cart/:productId",userValidationMid(DataValidator.validateProductId.bind(DataValidator),'params'),removeFromCartController);
router.patch("/batch-update-qty",userValidationMid(DataValidator.validateBatchUpdate.bind(DataValidator)),batchUpdateUserCartController);

export default router;