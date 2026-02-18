import apiClient from "./apiClient";

export const loginAPI = (data) =>
    apiClient("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(data),
    });


export const autoLoginAPI = (data) => 
    apiClient("/api/auth/me",{
        method:"GET",
        body:JSON.stringify(data),
    });

export const signupAPI = (data) => 
    apiClient("/api/auth/signup",{
        method:"POST",
        body:JSON.stringify(data),
    });

export const forgetPasswordAPI = (data) => 
    apiClient("/api/auth/forget-password",{
        method:"POST",
        body:JSON.stringify(data),
    });

export const verifyResetPasswordTokenAPI = (data) => 
    apiClient("/api/auth/verify-reset-token",{
        method:"POST",
        body:JSON.stringify(data),
    });

export const resetPasswordAPI = (data) => 
    apiClient("/api/auth/reset-password",{
        method:"POST",
        body:JSON.stringify(data),
    });