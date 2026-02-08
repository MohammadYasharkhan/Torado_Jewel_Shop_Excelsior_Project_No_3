import apiClient from "./apiClient";

export const newsletterSubscribe = (data) =>
    apiClient("/newsletter/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
    });


export const newsletterTokenVerify = (data) => 
    apiClient("/newsletter/verify",{
        method:"POST",
        body:JSON.stringify(data),
    });