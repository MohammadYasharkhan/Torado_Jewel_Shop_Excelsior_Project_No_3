import express from "express";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { placeOrderController } from "../controllers/orderController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/place-order",
            userValidationMid(DataValidator.validateOrderData.bind(DataValidator)),
            placeOrderController);

export default router;