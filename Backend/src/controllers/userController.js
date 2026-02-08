import { addUser, loginSuccess, ResponseHandler,getAlldataS } from "../responceHandler/userResponseHandler.js";
import { AuthService } from "../services/authService.js";
import { AskQuestionFormService, CommentFormService, contactUsFormService } from "../services/formService.js";
import { PasswordService } from "../services/passwordService.js";
import { ProductService } from "../services/productService.js";


const signupController=async (req,res,next)=>{
    try
    {               
        const {name,email,password}=req.body;
        const hashedPassword = await PasswordService.generateHasedPassword(password);
        const newuser=await AuthService.signUp(name,email,hashedPassword);
        const responseObj=new addUser(newuser);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
};


const loginController=async(req,res,next)=>{
    try{
        const {email,password}=req.body;
        const userLoginStatus=await AuthService.login(email,password);
        const responseObj=new loginSuccess(userLoginStatus);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
};


const contactUsInsertController= async(req,res,next)=>{
    try 
    {
        const {name,email,phone,subject,message}=req.body;
        const insertEntry= await contactUsFormService.createEntry(name,email,phone,subject,message);
        const responseObj=new addUser(insertEntry);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
}


const commentInsertController = async(req,res,next)=>{
    try
    {
        const {name,phone,website,email,comment}=req.body;
        const insertEntry=await CommentFormService.createComment(name,phone,website,email,comment);
        const responseObj=new addUser(insertEntry);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
}


const askQuestionInsertController = async(req,res,next)=>{
    try
    {
        const {name,email,phone,message}=req.body;
        const insertEntry=await AskQuestionFormService.createEntry(name,email,phone,message);
        const responseObj=new addUser(insertEntry);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
}


const getAllProductsController = async(req,res,next)=>{
    try
    {
        const getProducts=await ProductService.getAllProducts();
        const responseObj=new getAlldataS(getProducts);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
}


const insertMultipleProductsController = async(req,res,next)=>{
    try
    {
        const products=req.body;
        const insertProducts=await ProductService.insertMutipleProducts(products));
        const responseObj=new addUser(insertProducts);
        ResponseHandler(responseObj,req,res);
    }
    catch(error)
    {
        next(error);
    }
}

export {signupController,loginController,contactUsInsertController,commentInsertController,askQuestionInsertController,getAllProductsController,insertMultipleProductsController};