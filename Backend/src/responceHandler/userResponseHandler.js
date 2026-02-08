import { DescriptionConst } from "../constants/DescriptionConst.js";
import { HttpCodeConst } from "../constants/HttpCodeConst.js";
import { MessageConst } from "../constants/MessageConst.js";

const ResponseHandler = (responseObj, req, res) => {
        // if (responseObj instanceof baseResponseS) {
        return  res.status(responseObj.code || 500).json({
            // count_of_Records : responseObj.count,
            data : responseObj.Data,
            status : {
                code: responseObj.code,
                status: responseObj.status,
                description: responseObj.description,
            }
        });
    // }
};

class baseResponseS{
    constructor(code, status, description, Data) {
        this.code = code;
        this.status = status;
        this.description = description;
        this.Data = Data;
        // this.count = count
    }
}

class getAlldataS extends baseResponseS {
    constructor(data) {
        super(HttpCodeConst.SUCCESS, MessageConst.SUCCESS, DescriptionConst.GET_RECORD, data);
    }
}

class addUser extends baseResponseS {
    constructor(data) {
        super(HttpCodeConst.SUCCESS, MessageConst.SUCCESS, DescriptionConst.RECORD_ADDED,data);
    }
}


class updateCategory extends baseResponseS {
    constructor(data) {
        super(HttpCodeConst.SUCCESS, MessageConst.SUCCESS, DescriptionConst.UPDATE_RECORD,data);
    }
}

class deleteEmpS extends baseResponseS {
    constructor(data) {
        super(HttpCodeConst.SUCCESS, MessageConst.SUCCESS, DescriptionConst.DELETE_RECORD,data);
    }
}

class userUnblocked extends baseResponseS{
    constructor(){
        super(HttpCodeConst.SUCCESS, MessageConst.SUCCESS, DescriptionConst.USER_IS_UNBLOCKED);
    }
}

class tokenGenrated extends baseResponseS{
    constructor(data) {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.TOKEN_SUCCESS,data);
    }
}

class otpGenerated extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.OTP_GENERATED,data);
    }
}

class loginSuccess extends baseResponseS
{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.USER_LOGIN,data);
    }
}

class logout extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.LOGOUT,data);
    }
}

class settingLoaded extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.SETTING_LOADED,data);
    }
}


class categorieInserted extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.CATEGORIE_ADDED_SUCCESS,data);
    }
}

class addonInserted extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.ADDON_ADDED_SUCCESS,data);
    }
}


class foodItemInserted extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.FOODITEM_ADDED_SUCCESS,data);
    }
}

class alreadySubscribed extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.ALREADY_SUBSCRIBED,data);
    }
}


class alreadyVerifiedToken extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.ALREADY_VERIFIED_TOKEN,data);
    }
}

class verificationEmailSend extends baseResponseS{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.VERIFICATION_EMAIL_SEND,data);
    }
}


class emailVerifiedSucces extends baseResponseS
{
    constructor(data)
    {
        super(HttpCodeConst.SUCCESS,MessageConst.SUCCESS,DescriptionConst.EMAIL_VERIFIED_SUCCESS,data);
    }
}

export {ResponseHandler,baseResponseS,getAlldataS,addUser,updateCategory, deleteEmpS,
        tokenGenrated,userUnblocked,otpGenerated,logout,settingLoaded,categorieInserted,
        foodItemInserted,addonInserted,loginSuccess,alreadySubscribed,verificationEmailSend,emailVerifiedSucces,alreadyVerifiedToken};