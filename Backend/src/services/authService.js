import { UserRepository } from "../repositories/userRepository.js";
import { PasswordService } from "./passwordService.js";

class AuthService {
    static async signUp(name, email, password) {
        const createUser= await UserRepository.create(name,email,password);
        return createUser;
    }

    static async login(email,password)
    {
        const userLogin=await UserRepository.readByEmail(email);
        console.log(userLogin);
        const comparePassword=await PasswordService.compareHasedPassword(password,userLogin.password);
        return comparePassword;
    }
}

export {AuthService};