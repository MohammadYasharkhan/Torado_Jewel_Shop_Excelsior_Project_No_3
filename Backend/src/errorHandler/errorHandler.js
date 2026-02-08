// const DescriptionConst  = require("../constants/DescriptionConst");
// const HttpCodeConst  = require("../constants/HttpCodeConst");

import { DescriptionConst } from "../constants/DescriptionConst.js";
import { HttpCodeConst } from "../constants/HttpCodeConst.js";
class HTTPError extends Error {
  constructor(code, status,message) {
    super(message);
    this.code = code;
    this.status = status;
    this.description = message;
  }
}

class InternalServerError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.INTERNAL_SERVER_ERROR;
    super(HttpCodeConst.FAILED, DescriptionConst.FAILED, message);
  }
}

class ValidationError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.EMAIL_INVALID;
    super(HttpCodeConst.VALIDATION, DescriptionConst.FAILED, message);
  }
}

class ConflictError extends HTTPError {
  constructor(msg) {
      const message = msg || DescriptionConst.ALREADY_EXIST;
      super(HttpCodeConst.DUPLICATION, DescriptionConst.FAILED, message);
    }
}

class NotFoundError extends HTTPError {
  constructor(msg) {
    const message= msg || DescriptionConst.NOT_F;
    super(HttpCodeConst.NOTFOUND, DescriptionConst.FAILED, message);
  }
}

class BadRequestError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.BAD_REQUEST;
    super(HttpCodeConst.BAD_REQ, DescriptionConst.FAILED, message);
  }
}

class AuthenticationError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.AUTHENTICATION_FAILED_MSG;
    super(HttpCodeConst.AUTHENTICATION_FAILED, DescriptionConst.FAILED, message);
    }
}

class AuthorizationError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.AUTHORIZATION_FAILED_MSG;
    super(HttpCodeConst.AUTHENTICATION_FAILED, DescriptionConst.FAILED, message);
    }
}

class TokenExpiredError extends HTTPError {
  constructor(msg) {
    const message = msg || DescriptionConst.TOKEN_IS_EXPIRED;
    super(HttpCodeConst.AUTHENTICATION_FAILED, DescriptionConst.FAILED, message);
  }
}


class OtpNotProvided extends HTTPError{
  constructor(msg) {
    const message = msg || DescriptionConst.OTP_NOT_PROVIDED;
    super(HttpCodeConst.BAD_REQ, DescriptionConst.FAILED, message);
  }
}

class InvalidArrayFormate extends HTTPError{
  constructor(msg)
  {
    const message=msg || DescriptionConst.INVALID_ARRAY_FORMATE;
    super(HttpCodeConst.BAD_REQ,DescriptionConst.FAILED,message);
  }
}

class UserAlreadyLogedOut extends HTTPError {
  constructor(msg){
    const message= msg || DescriptionConst.ALREADY_LOGOUT;
    super(HttpCodeConst.BAD_REQ,DescriptionConst.FAILED, message);
  }
}

class ImageNotProvided extends HTTPError
{
  constructor(msg)
  {
    const message=msg|| DescriptionConst.IMAGE_NOT_PROVIDED;
    super(HttpCodeConst.BAD_REQ,DescriptionConst.FAILED,message);
  }
}


class RecordNotFoundError extends HTTPError
{
  constructor(msg)
  {
    const message=msg || DescriptionConst.RECORD_NOT_FOUND;
    super(HttpCodeConst.NOTFOUND,DescriptionConst.FAILED,message);
  }
}

export {
  HTTPError,
  ValidationError,
  ConflictError,
  InternalServerError,
  NotFoundError,
  BadRequestError,
  AuthenticationError,
  AuthorizationError,
  TokenExpiredError,
  OtpNotProvided,
  InvalidArrayFormate,
  UserAlreadyLogedOut,
  ImageNotProvided,
  RecordNotFoundError
};