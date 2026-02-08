import { TokenExpiredError } from "../errorHandler/errorHandler.js";
import { alreadySubscribed, alreadyVerifiedToken, emailVerifiedSucces, ResponseHandler, verificationEmailSend } from "../responceHandler/userResponseHandler.js";
import NewsLetterService from "../services/newsLetterService.js";
import { TokenService } from "../services/tokenService.js";

const subscribeNewsLetterController = async (req, res, next) => {
    try {
        const { email } = req.body;
        const result = await NewsLetterService.subscribe(email);
        let responseObj;
        if (result.alreadySubscribed == true) {
            responseObj = new alreadySubscribed(result);
        }
        else if (result.isMailSend == true) {
            responseObj = new verificationEmailSend(result);
        }

        console.log(responseObj);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

const verifyNewsLetterController = async (req, res, next) => {
    try {
        const { token } = req.body;
        const decoded = await TokenService.verifyToken(token);
        if (!decoded?.id) {
            throw new TokenExpiredError("Invalid Token, Provide Proper Token");
        }
        let subscriptionVerify = await NewsLetterService.verify(decoded.id);
        let responseObj;
        responseObj = subscriptionVerify.alreadyVerified===true ? new alreadyVerifiedToken(subscriptionVerify): new emailVerifiedSucces(subscriptionVerify);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
}

export { subscribeNewsLetterController, verifyNewsLetterController };