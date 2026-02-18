import express from "express";
import { subscribeNewsLetterController, verifyNewsLetterController } from "../controllers/newsLetterController.js";
import { DataValidator } from "../helper/userValidator.js";
import { userValidationMid } from "../middleware/validationMiddleware.js";

const router = express.Router();

router.post("/subscribe",
    userValidationMid(DataValidator.validateNewsLetter.bind(DataValidator)),
    subscribeNewsLetterController
);

router.post("/verify",
    userValidationMid(DataValidator.validateToken.bind(DataValidator)),
    verifyNewsLetterController
);

export default router;