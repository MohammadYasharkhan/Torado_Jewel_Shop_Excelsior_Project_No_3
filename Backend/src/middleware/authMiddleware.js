import { AuthenticationError } from "../errorHandler/errorHandler.js";
import { TokenService } from "../services/tokenService.js";

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.cookies.access_token;
        if (!token) {
            throw new AuthenticationError("Not authenticated");
        }

        const payload = await TokenService.verifyToken(token);
        req.userId = payload.id;

        next();
    } catch (err) {
        next(err);
    }
};

export {authMiddleware};