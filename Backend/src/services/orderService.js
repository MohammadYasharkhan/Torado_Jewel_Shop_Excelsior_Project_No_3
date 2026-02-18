import OrderRepository from "../repositories/ordersRepository.js";

class OrderService {
    static async placeOrder(userId, orderData) {
        const result = await OrderRepository.placeOrder(userId,orderData);
        return result;
    }
}

export default OrderService;