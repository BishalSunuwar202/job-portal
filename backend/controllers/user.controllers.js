import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId)?.select("-password -refreshToken");

    const accessToken = jwt.sign(
      user.toObject(),
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIRY }
    );
    //toObject() convert the data to plain js

    const refreshToken = jwt.sign(
      { _id: user._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY }
    );

    user.refreshToken = refreshToken;
    //in object user we are adding another field called refresh token
    await user.save({ validateBeforeSave: false });
    //this process can take time so await

    return { accessToken, refreshToken };
  } catch (err) {}
};

export const signUp = async (req, res, next) => {
  try {
    const { password, ...userData } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    const signing = await User.create({ ...userData, password: hash });
    const signinObject = signing.toObject();
    delete signinObject.password;

    return res.status(201).json(signinObject);
  } catch (err) {
    next(err);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // const { email, username, password } = req.body;
    const user = await User.findOne({ email });
    //const user = await User.findOne({ email }) here {email:email} or {email: req.body.email which can be any email address};
    //const user = await User.findOne({ $or: [{ username }, { email }] });

    if (!user) {
      return next(errorHandler(404, "User do not exist"));
    }
    const isPassword = user.password;

    const status = bcrypt.compareSync(password, isPassword);
    if (!status) {
      return next(errorHandler(401, "Credentials do not match"));
    }
    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(
      user._id
    );

    const options = {
      httpOnly: true,
      secure: false,
    };

    if (status) {
      return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json({
          accessToken,
          refreshToken,
        });
    }
  } catch (err) {
    next(err);
  }
};

export const logoutUser = async (req, res) => {
  await User.findByIdAndUpdate(
    req.user._id,
    {
      $unset: {
        refreshToken: 1,
      },
    },
    {
      new: true,
    }
  );
  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessTOken", options)
    .clearCookie("refreshToken", options)
    .json("User logged Out successfully");
};

export const refreshAccessToken = async (req, res) => {
  const incomingRefreshToken =
    req.cookies.refreshToken || req.body.refreshToken;
  //req.body is done as sometimes in mobile development the token is in body
  if (!incomingRefreshToken) {
    return errorHandler(401, "unathorized request");
  }
  try {
    const decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );

    const user = await User.findById(decodedToken?._id);
    if (!user) {
      return errorHandler(401, "Invalid refresh token");
    }

    if (incomingRefreshToken !== user?.refreshToken) {
      throw new errorHandler(401, "Refresh token is expired or used");
    }
    const options = {
      httpOnly: true,
      secure: true,
    };

    const { accessToken, newRefreshToken } =
      await generateAccessAndRefreshTokens(user._id);

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", newRefreshToken, options)
      .json({
        accessToken,
        refreshToken: newRefreshToken,
      });
  } catch (err) {
    throw new errorHandler(401, err?.message || "Invalid refresh token");
  }
};
