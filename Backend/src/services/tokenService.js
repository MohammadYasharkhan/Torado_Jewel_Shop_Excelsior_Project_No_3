import jwt from "jsonwebtoken";

class TokenService {
    static async generateEmailVerificationToken(subscriberId) {
        return jwt.sign(
            {
                id: subscriberId
            }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" }
        );
    }

    static async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            return decoded;
        }
        catch (error) {
            if (error.name === "TokenExpiredError") {
                throw new Error("TOKEN_EXPIRED");
            }
            if (error.name === "JsonWebTokenError") {
                throw new Error("INVALID_TOKEN");
            }
            throw error;
        }
    }
}

export { TokenService };