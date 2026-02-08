import express from "express";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { commentInsertController, contactUsInsertController, loginController, signupController,askQuestionInsertController,getAllProductsController} from "../controllers/userController.js";
import upload from "../middleware/uploadImageMid.js";
const userRoutes=express.Router();

userRoutes.route("/signup").post(userValidationMid(DataValidator.validateSignUp),signupController);
userRoutes.route("/login").post(loginController);

userRoutes.route("/contactUsForm").post(userValidationMid(DataValidator.validateContactUs.bind(DataValidator)),contactUsInsertController);

userRoutes.route("/commentForm").post(userValidationMid(DataValidator.validateComment.bind(DataValidator)),commentInsertController);
userRoutes.route("/askQuestionForm").post(userValidationMid(DataValidator.validateAskQuestion.bind(DataValidator)),askQuestionInsertController);

userRoutes.route("/getAllProducts").get(getAllProductsController);

userRoutes.route("/insertMultipleProducts").post(upload.single('image'),)

export {userRoutes};