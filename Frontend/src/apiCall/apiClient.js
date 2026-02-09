import { data } from "react-router-dom";

const BASE_URL = "http://localhost:4000";

const apiClient = async (url, options = {}) => {
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        credentials: "include",
        ...options,
    });

    // 1️⃣ Parse response body ONCE
    const result = await response.json().catch(() => null);

    // 2️⃣ HTTP-level error
    if (!response.ok) {
        throw {
            message: result?.status?.description || "Network error",
            httpCode: response.status,
            raw: result,
        };
    }

    // 3️⃣ Application-level error
    if (result?.status?.status !== "Success") {
        throw {
            message: result?.status?.description || "API error",
            apiCode: result?.status?.code,
            raw: result,
        };
    }

    // 4️⃣ Success → return only `data`
    return result.data;
};



export const submitContactUsForm = (data) =>
    apiClient("/user/contactUsForm", {
            method: "POST",
            body: JSON.stringify(data),
    });

export const submitAskQuestionForm = (data) =>
    apiClient("/user/askQuestionForm", {
            method: "POST",
            body: JSON.stringify(data),
    });


export const getAllProducts = () =>
    apiClient("/user/getAllProducts", {
        method: "GET",
    });

export default apiClient;