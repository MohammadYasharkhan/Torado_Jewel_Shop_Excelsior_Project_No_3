import { AskQuestionFormService, CommentFormService, contactUsFormService } from "../services/formService.js";
import { addUser, loginSuccess, ResponseHandler, getAlldataS } from "../responceHandler/userResponseHandler.js";
const contactUsInsertController = async (req, res, next) => {
    try {
        const { name, email, phone, subject, message } = req.body;
        const insertEntry = await contactUsFormService.createEntry(name, email, phone, subject, message);
        const responseObj = new addUser(insertEntry);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}


const commentInsertController = async (req, res, next) => {
    try {
        const { name, phone, website, email, comment } = req.body;
        const insertEntry = await CommentFormService.createComment(name, phone, website, email, comment);
        const responseObj = new addUser(insertEntry);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}


const askQuestionInsertController = async (req, res, next) => {
    try {
        const { name, email, phone, message } = req.body;
        const insertEntry = await AskQuestionFormService.createEntry(name, email, phone, message);
        const responseObj = new addUser(insertEntry);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

export {contactUsInsertController, commentInsertController, 
    askQuestionInsertController};
