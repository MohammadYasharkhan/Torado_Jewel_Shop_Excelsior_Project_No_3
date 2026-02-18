const BASE_URL = "http://localhost:4000";

const apiClient = async (url, options = {}) => {
    const { headers: optionHeaders, ...restOptions } = options;

    const response = await fetch(`${BASE_URL}${url}`, {
        credentials: "include", // ✅ Never overwritten
        ...restOptions, // ✅ method, body etc
        headers: {
            "Content-Type": "application/json",
            ...optionHeaders, // ✅ Merge headers cleanly
        },
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
    return result.data ?? { message: result?.status?.description };
};

export const submitContactUsForm = (data) =>
    apiClient("/api/forms/contact-us", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const submitAskQuestionForm = (data) =>
    apiClient("/api/form/ask-question", {
        method: "POST",
        body: JSON.stringify(data),
    });

export const getAllProducts = () =>
    apiClient("/api/products/getAllProducts", {
        method: "GET",
    });

export default apiClient;
