import bcrypt from "bcrypt";


import { User } from "../models/user.model.js";

export const signUp = async (req, res, next) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    const signing = await User.create({...req.body, password: hash});
    console.log(signing)
    return res.status(201).json(signing);
  } catch (err) {
    next(err);
  }
};
