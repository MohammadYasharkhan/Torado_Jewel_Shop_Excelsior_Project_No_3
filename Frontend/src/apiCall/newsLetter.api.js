import apiClient from "./apiClient";

export const newsletterSubscribe = (data) =>
    apiClient("/api/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
    });


export const newsletterTokenVerify = (data) => 
    apiClient("/api/newsletter/verify",{
        method:"POST",
        body:JSON.stringify(data),
    });