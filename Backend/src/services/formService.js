import { ContactUsFormRepository,CommentFormRepository, AskQuestionFormRepository } from "../repositories/formRepository.js";


class contactUsFormService{
    static async createEntry(name,email,phone,subject,message)
    {
        phone = phone ?? null;
        phone = typeof phone === "string" && phone === ""? null:phone;
        const entry = await ContactUsFormRepository.create(name,email,phone,subject,message);
        return entry;
    }
}


class CommentFormService{
    static async createComment(name,phone,website,email,comment)
    {
        phone=phone??null;
        phone = typeof phone === "string" && phone === ""? null:phone;
        website=website??null;
        website= typeof website === "string" && website===""? null:website;
        const entry = await CommentFormRepository.create(name,phone,website,email,comment);
        return entry;
    }
}

class AskQuestionFormService{
    static async createEntry(name,email,phone,message)
    {
        phone=phone??null;
        phone = typeof phone === "string" && phone === ""? null:phone;
        const entry = await AskQuestionFormRepository.create(name,email,phone,message);
        return entry;
    }
}


export {contactUsFormService,CommentFormService,AskQuestionFormService};