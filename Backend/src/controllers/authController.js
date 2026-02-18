import { AuthService } from "../services/authService.js";
import { addUser, loginSuccess, ResponseHandler, getAlldataS, tokenGenrated, resetPasswordEmailSentSuccess, tokenVerifiedSucces, passwordChangeSuccess } from "../responceHandler/userResponseHandler.js";
import { PasswordService } from "../services/passwordService.js";
// import { ResponseHandler } from "../responceHandler/userResponseHandler.js";

const signupController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const hashedPassword = await PasswordService.generateHasedPassword(password);
        const newuser = await AuthService.signUp(name, email, hashedPassword);
        const responseObj = new addUser(newuser);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
};


const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const {token,user} = await AuthService.login(email, password);

        res.cookie("access_token", token, {
            httpOnly: true,
            secure: false,   // local
            sameSite: "lax",
            maxAge: 60 * 60 * 1000
        });

        const responseObj = new tokenGenrated(user);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
};


const meController = async (req, res, next) => {
    try {
        const autoLogin=await AuthService.autoLogin(req.userId);
        const responseObj = new tokenGenrated(autoLogin);
        ResponseHandler(responseObj, req, res);
    } catch (err) {
        next(err);
    }
};


const forgetPasswordController= async(req,res,next)=>{
    try
    {
        const { email } = req.body;
        const entry = await AuthService.forgetPassword(email);
        const responseObj = new resetPasswordEmailSentSuccess();
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
};


const verifyResetTokenController = async(req,res,next)=>{
    try
    {
        const {token} =req.body;
        const user = await AuthService.verifyResetPasswordToken(token);
        const responseObj = new tokenVerifiedSucces(user);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
};

const resetPasswordController = async(req,res,next)=>{
    try
    {
        const {token,password}=req.body;
        const hashedPassword = await PasswordService.generateHasedPassword(password);
        const resetPassword = await AuthService.resetPassword(token,hashedPassword);
        const responseObj = new passwordChangeSuccess(resetPassword);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
};


export {signupController, loginController,meController,forgetPasswordController,verifyResetTokenController,resetPasswordController};