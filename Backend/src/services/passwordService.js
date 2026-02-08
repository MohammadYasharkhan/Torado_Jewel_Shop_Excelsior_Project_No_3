import bcrypt from "bcryptjs";
class PasswordService{
    static async generateHasedPassword(userPass)
    {
        const saltRounds=10;
        var hashed = await bcrypt.hash(userPass,saltRounds);
        return hashed;
    }
    static async compareHasedPassword(password,hashedPass)
    {
        var compare = await bcrypt.compare(password,hashedPass);
        return compare;
    }
}

export {PasswordService};