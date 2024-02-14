import jwt from "jsonwebtoken";

import { User } from "../models/user.model";
import { errorHandler } from "../utils/error";

export const authenticateToken = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken || req.headers?.authorization?.split("")[1];
    console.log(token);

    if (!token) {
      //see here if i should use next() or not
      return errorHandler(401, "Unauthorized request");
    }
    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const user = await User.findById(decodedToken?._id).select(
      "-password -refreshToken"
    );
    console.log(user);
    if (!user) {
      return errorHandler(401, "Invalid access token");
    }
    req.user = user;
  } catch (err) {
    next(err);
  }
};
