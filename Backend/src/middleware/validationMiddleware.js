const userValidationMid = (validator, source = 'body') => {
    return async (req, res, next) => {
        try {
            const dataToValidate = source === 'params' ? req.params : req.body;
            validator(dataToValidate);
            next();
        }
        catch (error) {
            next(error);
        }
    }
}

export { userValidationMid };