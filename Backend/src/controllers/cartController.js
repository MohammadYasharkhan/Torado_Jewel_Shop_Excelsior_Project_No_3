import { InternalServerError, NotFoundError } from "../errorHandler/errorHandler.js";
import { addUser, alreadyExist, getAlldataS, notFound, removeEntry, ResponseHandler, updateCategory } from "../responceHandler/userResponseHandler.js";
import { CartService } from "../services/cartService.js";


const addToCartController =  async (req,res,next) =>{
    try
    {
        const userId = req.userId;
        const { productId } = req.body;
        const result = await CartService.addToCart(userId,productId);
        const responseObj = result === 1 ? new addUser() : new alreadyExist();
        ResponseHandler(responseObj,req,res);
    }
    catch(err)
    {
        next(err);
    }
}


const removeFromCartController = async(req,res,next) =>{
    try
    {
        const userId = req.userId;
        const { productId } = req.params;
        const result = await CartService.removeFromCart(userId,productId);
        const responseObj = result === 1 ? new removeEntry() : new notFound();
        ResponseHandler(responseObj,req,res);
    }
    catch(err)
    {
        next(err);
    }
}


const getUserCartController = async(req,res,next) =>{
    try
    {
        const userId = req.userId;
        const result = await CartService.getUserCart(userId);
        const responseObj = result.items.length > 0 
            ? new getAlldataS({ items: result.items, meta: result.meta }) 
            : new notFound(result);
        ResponseHandler(responseObj,req,res);
    }
    catch(err)
    {
        next(err);
    }
}


const batchUpdateUserCartController = async(req,res,next) =>{
    try
    {   
        const userId = req.userId;
        const { items } = req.body;  // ← JSON array from request body
        const result = await CartService.batchUpdateQuantities(userId, items);
        if (result.status === 0) {
            throw new InternalServerError();
        }
        const responseObj = new updateCategory(result);
        ResponseHandler(responseObj, req, res);
    }
    catch(err)
    {
        next(err);
    }
}


export {addToCartController,removeFromCartController,getUserCartController,batchUpdateUserCartController};