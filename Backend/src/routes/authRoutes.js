import express from "express";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { 
    loginController, 
    signupController, 
    meController, 
    forgetPasswordController, 
    verifyResetTokenController, 
    resetPasswordController 
} from "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/signup", 
    userValidationMid(DataValidator.validateSignUp.bind(DataValidator)),
    signupController
);

router.post("/login", 
    userValidationMid(DataValidator.validateLogin.bind(DataValidator)),
    loginController
);

router.post("/forget-password", forgetPasswordController);

router.post("/verify-reset-token", 
    userValidationMid(DataValidator.validateToken.bind(DataValidator)),
    verifyResetTokenController
);

router.post("/reset-password", 
    userValidationMid(DataValidator.validateResetPassword.bind(DataValidator)),
    resetPasswordController
);


router.get("/me", authMiddleware, meController);

export default router;