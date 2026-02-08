import { db_object } from "../configs/dbConfig.js";

class ContactUsFormRepository{
    static async create(name,email,phone,subject,message)
    {
        const [rows] = await db_object.query("CALL contactus_create(?,?,?,?,?)",[name,email,phone,subject,message]);
        return rows[0][0];
    }
}


class CommentFormRepository{
    static async create(name,phone,website,email,comment)
    {
        const [row]=await db_object.query("CALL comments_create(?,?,?,?,?)",[name,phone,website,email,comment]);
        return row[0][0];
    }
}


class AskQuestionFormRepository{
    static async create(name,email,phone,message)
    {
        const [row]=await db_object.query("CALL askquestion_create(?,?,?,?)",[name,email,phone,message]);
        return row[0][0];
    }
}

export {ContactUsFormRepository,CommentFormRepository,AskQuestionFormRepository};