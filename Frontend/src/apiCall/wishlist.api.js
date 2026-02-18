import apiClient from "./apiClient";

export const addToWishlistAPI = (data) =>
    apiClient("/api/wishlist/add-to-wishlist", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const getUserWishlistAPI = () =>
    apiClient("/api/wishlist/get-users-wishlist", {
        method: "GET",
    });

export const removeFromWishlistAPI = (productId) =>
    apiClient(`/api/wishlist/remove-from-wishlist/${productId}`, {
        method: "DELETE",
    });