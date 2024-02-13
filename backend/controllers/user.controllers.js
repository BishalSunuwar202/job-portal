import bcrypt from "bcrypt";

import { User } from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  try {
    const { password, ...userData } = req.body;
    const hash = bcrypt.hashSync(password, 10);

    const signing = await User.create({ ...userData, password: hash });
    const signinObject = signing.toObject()
    delete signinObject.password;

    return res.status(201).json(signinObject);
  } catch (err) {
    next(err);
  }
};
