import { db_object } from "../configs/dbConfig.js";
import { RecordNotFoundError } from "../errorHandler/errorHandler.js";

class NewsLetterRepository {
    static async subscriptionExistByEmail(email) {
        const [rows] = await db_object.query("CALL newsletter_subscriptions_exists_by_email(?)", [email]);
        return rows[0][0].is_subscribed;
    }

    static async subscriptionExistById(subscriberId)
    {
        const [rows] = await db_object.query("CALL newsletter_subscriptions_exists_by_id(?)", [subscriberId]);
        return rows[0][0].is_exists;
    }

    static async create(email) {
        const [rows] = await db_object.query("CALL newsletter_subscriptions_create(?)", [email]);
        return rows[0][0].id;
    }

    static async subscriptionVerify(subscriptionId) {

        if(!this.subscriptionExistById(subscriptionId))
        {
            throw new RecordNotFoundError();
        }

        const [rows] = await db_object.query("CALL newsletter_subscriptions_verify(?)", [subscriptionId]);
        return rows[0][0].affected_rows === 1 ? true : false;
    }


    static async tokenVerifiedCheck(subscriberId) {
        const [rows] = await db_object.query("CALL newsletter_subscriptions_verify_check(?)", [subscriberId]);

        if (!rows[0]?.length) {
            throw new RecordNotFoundError();
        }

        return rows[0][0].is_verified === 1 ? true : false;
    }
}

export default NewsLetterRepository;