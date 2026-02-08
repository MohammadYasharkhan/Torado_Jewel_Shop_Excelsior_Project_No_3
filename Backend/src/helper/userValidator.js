import { ValidationError } from "../errorHandler/errorHandler.js";

const REGEX = {
    NAME: /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/,
    EMAIL: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
    PHONE: /^\+?[0-9]{7,15}$/,
    PASSWORD: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};

class DataValidator {
    static validateSignUp({ name, email, password }) {
        name = name?.trim();
        email = email?.trim();

        if (!name) throw new ValidationError("Name is required");
        if (!email) throw new ValidationError("Email is required");
        if (!password) throw new ValidationError("Password is required");

        if (!REGEX.NAME.test(name)) {
            throw new ValidationError("Full name is invalid");
        }

        this.validateEmail(email);

        if (!REGEX.PASSWORD.test(password)) {
            throw new ValidationError("Password is weak");
        }

        return true;
    }

    static validateContactUs({ name, email, phone, subject, message }) {
        name = name?.trim();
        email = email?.trim();
        phone = phone?.trim();
        subject = subject?.trim();
        message = message?.trim();

        if (!name) throw new ValidationError("Name is required");
        if (!email) throw new ValidationError("Email is required");
        if (!subject) throw new ValidationError("Subject is required");
        if (!message) throw new ValidationError("Message is required");

        this.validateEmail(email);
        this.validatePhone(phone);

        return true;
    }

    static validateEmail(email) {
        if (!REGEX.EMAIL.test(email)) {
            throw new ValidationError("Email is invalid");
        }
    }

    static validatePhone(phone) {
        if (phone && !REGEX.PHONE.test(phone)) {
            throw new ValidationError("Phone number is invalid");
        }
    }


    static validateToken(token) {


        let newToken=token.token;
        if (!newToken || typeof newToken !== "string") {
            throw new ValidationError("Verification token is required");
        }

        newToken = newToken.trim();

        if (newToken === "") {
            throw new ValidationError("Verification token is required");
        }

        // Handle "Bearer <token>"
        if (newToken.toLowerCase().startsWith("bearer ")) {
            newToken = newToken.slice(7).trim();
        }

        if (!newToken) {
            throw new ValidationError("Verification token is required");
        }

        return true;
    }


    static validateComment({ name, phone, website, email, comment }) {
        name = name?.trim();
        email = email?.trim();
        phone = phone?.trim();
        website = website?.trim();
        comment = comment?.trim();

        if (!name) throw new ValidationError("Name is required");
        if (!email) throw new ValidationError("Email is required");
        if (!comment) throw new ValidationError("Comment is required");

        // name validation
        if (!REGEX.NAME.test(name)) {
            throw new ValidationError("Name is invalid");
        }

        // email validation
        this.validateEmail(email);

        // phone validation (optional)
        this.validatePhone(phone);

        // website validation (VERY light)
        if (website && website.length > 255) {
            throw new ValidationError("Website is too long");
        }

        // comment length (recommended)
        if (comment.length < 3) {
            throw new ValidationError("Comment is too short");
        }

        if (comment.length > 2000) {
            throw new ValidationError("Comment is too long");
        }

        return true;
    }

    static validateNewsLetter({ email }) {
        email = email?.trim();
        if (!email) throw new ValidationError("Email is required");
        this.validateEmail(email);

        return true;
    }

    static validateAskQuestion({ name, email, phone, message }) {
        name = name?.trim();
        email = email?.trim();
        phone = phone?.trim();
        message = message?.trim();

        if (!name) throw new ValidationError("Name is required");
        if (!email) throw new ValidationError("Email is required");
        if (!message) throw new ValidationError("Message is required");

        // name validation
        if (!REGEX.NAME.test(name)) {
            throw new ValidationError("Name is invalid");
        }

        // email validation
        this.validateEmail(email);

        // phone validation (optional)
        this.validatePhone(phone);

        // message length checks (recommended)
        if (message.length < 3) {
            throw new ValidationError("Message is too short");
        }

        if (message.length > 2000) {
            throw new ValidationError("Message is too long");
        }

        return true;
    }

}

export { DataValidator };