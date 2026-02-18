import { AuthenticationError, RecordNotFoundError, TokenExpiredError } from "../errorHandler/errorHandler.js";
import { UserRepository } from "../repositories/userRepository.js";
import MailService from "./mailService.js";
import { PasswordService } from "./passwordService.js";
import { TokenService } from "./tokenService.js";

class AuthService {
    static async signUp(name, email, password) {
        const createUser = await UserRepository.create(name, email, password);
        return createUser;
    }

    static async login(email, password) {
        const userLogin = await UserRepository.readByEmail(email);

        if (!userLogin) {
            throw new AuthenticationError("Invalid Credentials Either Password or Email is wrong");
        }

        console.log(userLogin);
        const comparePassword = await PasswordService.compareHasedPassword(password, userLogin.password);

        if (!comparePassword) {
            throw new AuthenticationError("Invalid Credentials Either Password or Email is wrong");
        }

        const token = await TokenService.generateAuthToken(userLogin.id);

        return {
            token,
            user: {
                id: userLogin.id,
                name: userLogin.name,
                email: userLogin.email
            }
        };
    }

    static async autoLogin(userId)
    {
        const user = await UserRepository.readById(userId);

        if(!user)
        {
            throw new RecordNotFoundError("User Not Found");
        }

        return {
            id: user.id,
            name: user.name,
            email: user.email
        };
    }

    static async forgetPassword(email)
    {
        const user = await UserRepository.readByEmail(email);

        if(!user)
        {
            return;
        }

        const token = await TokenService.generateForgetPasswordToken(user.id);

        const mailSend = await MailService.sendResetPasswordEmail(email,token);

        return mailSend.emailSentStatus;
    }

    static async verifyResetPasswordToken(token)
    {
        const decoded = await TokenService.verifyToken(token);
        if (!decoded?.id) {
            throw new TokenExpiredError("Invalid or expired token");
        }
        const user = await UserRepository.readById(decoded.id);

        if(!user)
        {
            throw new TokenExpiredError("Invalid or expired token");
        }

        return {
            id:user.id,
            email:user.email,
        };
    }

    static async resetPassword(token,password)
    {
        const decoded = await TokenService.verifyToken(token);
        if (!decoded?.id) {
            throw new TokenExpiredError("Invalid or expired token");
        }

        const updatePassword = UserRepository.updatePassword(decoded.id,password);
        if(!updatePassword)
        {
            throw new TokenExpiredError("Invalid or expired token");
        }
        return updatePassword;
    }
}

export { AuthService };