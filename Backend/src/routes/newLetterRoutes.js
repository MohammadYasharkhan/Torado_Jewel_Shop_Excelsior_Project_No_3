import express from "express";
import { subscribeNewsLetterController, verifyNewsLetterController } from "../controllers/newsLetterController.js";
import { DataValidator } from "../helper/userValidator.js";
import { userValidationMid } from "../middleware/validationMiddleware.js";

const newsletterRoutes = express.Router();

newsletterRoutes.route("/subscribe").post(userValidationMid(DataValidator.validateNewsLetter.bind(DataValidator)),subscribeNewsLetterController);
newsletterRoutes.route("/verify").post(userValidationMid(DataValidator.validateToken.bind(DataValidator)),verifyNewsLetterController);

export { newsletterRoutes };