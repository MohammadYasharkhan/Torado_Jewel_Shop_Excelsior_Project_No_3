import NewsLetterRepository from "../repositories/newsLetterRepository.js";
import MailService from "./mailService.js";
import { TokenService } from "./tokenService.js";

class NewsLetterService {
    static async isSubscribed(email) {
        return await NewsLetterRepository.subscriptionExistByEmail(email);
    }

    static async subscribe(email) {
        const exists = await this.isSubscribed(email);
        if (exists) {
            return {
                alreadySubscribed: true,
                isMailSend: null,
            };
        }
        const subscriberId = await NewsLetterRepository.create(email);
        const token = await TokenService.generateEmailVerificationToken(subscriberId);

        const mailSend = await MailService.sendVerificationEmail(email, token);

        return {
            alreadySubscribed: false,
            isMailSend: mailSend.emailSentStatus,
        }
    }

    static async verify(subscriptionId) {
        try {
            const isAlreadyVerified = await this.isTokenVerified(subscriptionId);
            if (isAlreadyVerified) {
                return {
                    alreadyVerified: true,
                }
            }
            const isUpdated = await NewsLetterRepository.subscriptionVerify(subscriptionId);

            if (!isUpdated) {
                throw new TokenExpiredError("Invalid or expired token");
            }
            return {
                alreadyVerified: false,
                currentlyVerified: true,
            };
        }
        catch (error) {
            if (err instanceof RecordNotFoundError) {
                throw new TokenExpiredError("Invalid or expired token");
            }
            throw err;
        }
    }

    static async isTokenVerified(subscriberId) {
            const isTokenVerified = await NewsLetterRepository.tokenVerifiedCheck(subscriberId);
            return isTokenVerified;
    }
}

export default NewsLetterService;