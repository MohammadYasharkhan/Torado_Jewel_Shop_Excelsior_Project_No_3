import apiClient from "./apiClient";

export const placeOrderAPI = (data) =>
    apiClient("/api/order/place-order", {
        method: "POST",
        body: JSON.stringify(data),
    });