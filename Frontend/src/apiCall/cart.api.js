import apiClient from "./apiClient";

export const addToCartAPI = (data) =>
    apiClient("/api/cart/add-to-cart", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const getUserCartAPI = () =>
    apiClient("/api/cart/get-users-cart", {
        method: "GET",
    });

export const removeFromCartAPI = (productId) =>
    apiClient(`/api/cart/remove-from-cart/${productId}`, {
        method: "DELETE",
    });

export const batchUpdateCartQtyAPI = (data) =>
    apiClient("/api/cart/batch-update-qty", {
        method: "PATCH",
        body: JSON.stringify(data),
    });