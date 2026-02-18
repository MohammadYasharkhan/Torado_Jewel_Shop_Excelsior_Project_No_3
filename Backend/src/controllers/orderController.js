import OrderService from "../services/orderService.js";
import { ResponseHandler, cartIsEmpty, orderPlacedSuccess } from "../responceHandler/userResponseHandler.js";

const placeOrderController = async (req, res, next) => {
    try {
        const userId = req.userId;
        const { orderData } = req.body;
        const result = await OrderService.placeOrder(userId,orderData); 
        const responseObj = result.isEmpty ?  new cartIsEmpty() : new orderPlacedSuccess(result);
        ResponseHandler(responseObj, req, res);
    }
    catch (error) {
        next(error);
    }
};

export {placeOrderController};