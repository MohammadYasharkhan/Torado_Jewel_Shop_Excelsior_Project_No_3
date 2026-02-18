import jwt from "jsonwebtoken";
import { AuthorizationError } from "../errorHandler/errorHandler.js";

class TokenService {
    static async generateEmailVerificationToken(subscriberId) {
        return jwt.sign(
            {
                id: subscriberId
            }, process.env.JWT_SECRET_KEY, { expiresIn: "24h" }
        );
    }

    static async generateAuthToken(userId)
    {
        return jwt.sign(
            {id:userId},
            process.env.JWT_SECRET_KEY,{expiresIn:"1h"}
        );
    }

    static async verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            return decoded;
        }
        catch (error) {
            if (error.name === "TokenExpiredError") {
                throw new AuthorizationError();
            }
            if (error.name === "JsonWebTokenError") {
                throw new AuthorizationError();
            }
            throw error;
        }
    }


    static async generateForgetPasswordToken(subscriberId) {
        return jwt.sign(
            {
                id: subscriberId
            }, process.env.JWT_SECRET_KEY, { expiresIn: "15m" }
        );
    }
}

export { TokenService };