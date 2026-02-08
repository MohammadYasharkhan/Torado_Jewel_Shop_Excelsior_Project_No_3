const userValidationMid=(validator)=>{
    return async(req, res,next)=>{
        try
        {
            validator(req.body);
            next();
        }
        catch(error)
        {
            next(error);
        }
    }
}

export {userValidationMid};