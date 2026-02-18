import express from "express";
import { userValidationMid } from "../middleware/validationMiddleware.js";
import { DataValidator } from "../helper/userValidator.js";
import { 
    contactUsInsertController, 
    commentInsertController, 
    askQuestionInsertController 
} from "../controllers/formController.js";

const router = express.Router();

router.post("/contact-us", 
    userValidationMid(DataValidator.validateContactUs.bind(DataValidator)),
    contactUsInsertController
);

router.post("/comment", 
    userValidationMid(DataValidator.validateComment.bind(DataValidator)),
    commentInsertController
);

router.post("/ask-question", 
    userValidationMid(DataValidator.validateAskQuestion.bind(DataValidator)),
    askQuestionInsertController
);

export default router;