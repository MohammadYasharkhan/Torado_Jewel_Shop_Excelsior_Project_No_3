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


        let newToken = token.token;
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

    static validateProductData(body) {

        console.log("RAW req.body.products:", body.products);
        console.log("TYPE:", typeof body.products);

        if (!body || !body.products) {
            throw new ValidationError("products field is required");
        }

        let products;
        try {
            products = JSON.parse(body.products);
        } catch {
            throw new ValidationError("Invalid products JSON");
        }

        if (!Array.isArray(products) || products.length === 0) {
            throw new ValidationError("Products must be a non-empty array");
        }

        products.forEach((p, i) => {

            /* ---------- NAME ---------- */
            if (p.name === undefined || p.name === null) {
                throw new ValidationError(`Name is required at index ${i}`);
            }

            if (typeof p.name !== "string" || !p.name.trim()) {
                throw new ValidationError(
                    `Name must be a non-empty string at index ${i}`
                );
            }


            /* ---------- PRICE ---------- */
            if (p.price === undefined || p.price === null) {
                throw new ValidationError(`Price is required at index ${i}`);
            }

            if (isNaN(p.price)) {
                throw new ValidationError(`Price must be a number at index ${i}`);
            }

            if (Number(p.price) <= 0) {
                throw new ValidationError(
                    `Price must be greater than 0 at index ${i}`
                );
            }

            
            /* ---------- SALE PRICE (OPTIONAL) ---------- */
            if (p.sale_price !== undefined && p.sale_price !== null && p.sale_price !== "") {
                
                if (isNaN(p.sale_price)) {
                    throw new ValidationError(
                        `Sale price must be a number at index ${i}`
                    );
                }
                
                if (Number(p.sale_price) <= 0) {
                    throw new ValidationError(
                        `Sale price must be greater than 0 at index ${i}`
                    );
                }
                
                if (Number(p.sale_price) >= Number(p.price)) {
                    throw new ValidationError(
                        `Sale price must be less than price at index ${i}`
                    );
                }
            }
            

            /* ---------- SALE AVAILABLE ---------- */
            if (p.is_sale_available !== undefined && p.is_sale_available !== null) {

                if (typeof p.is_sale_available !== "boolean") {
                    throw new ValidationError(
                        `is_sale_available must be boolean at index ${i}`
                    );
                }
            }
            
            /* ---------- STOCK ---------- */
            if (p.stock === undefined || p.stock === null) {
                throw new ValidationError(`Stock is required at index ${i}`);
            }

            if (isNaN(p.stock)) {
                throw new ValidationError(`Stock must be a number at index ${i}`);
            }

            if (!Number.isInteger(Number(p.stock))) {
                throw new ValidationError(
                    `Stock must be an integer at index ${i}`
                );
            }

            if (Number(p.stock) < 0) {
                throw new ValidationError(
                    `Stock must be greater than or equal to 0 at index ${i}`
                );
            }
        });
    }
}

export { DataValidator };