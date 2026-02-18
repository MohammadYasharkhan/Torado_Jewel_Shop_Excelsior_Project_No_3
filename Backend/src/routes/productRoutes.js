import express from "express";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { 
    getAllProductsController, 
    insertMultipleProductsController 
} from "../controllers/productController.js";
import upload from "../middleware/uploadImageMid.js";
// import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Public routes
router.get("/getAllProducts", getAllProductsController);

// Admin routes (add role check middleware if needed)
router.post("/insertMultipleProducts", 
    upload.array('images', 50),
    userValidationMid(DataValidator.validateProductData.bind(DataValidator)),
    insertMultipleProductsController
);

export default router;