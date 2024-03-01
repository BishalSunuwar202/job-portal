import { User } from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const getUserList = async (req, res, next) => {
  try {
    
    if (!req.user) {
      return next(errorHandler(404, "User not found"));
    }

    //const { password: pass, ...rest } = user._doc;

    //user._doc => This is a Mongoose convention. When you retrieve a document from MongoDB using Mongoose, it wraps the MongoDB document in a Mongoose document object. The _doc property contains the raw JavaScript object representing the document's data as stored in the database. It's essentially the plain JavaScript object version of the Mongoose document.

    //{ password: pass, ...rest }: This is object destructuring syntax in JavaScript. It allows you to extract properties from an object and assign them to variables. In this case, it extracts the password property from the user._doc object and assigns it to a variable named pass. The ...rest part is the rest/spread operator, which collects all the remaining properties from the object into a new object called rest. This new object contains all properties of user._doc except for the password.


    return res.status(200).json(req.user);
  } catch (err) {
    next(err);
  }
};

export const getUserLists = async (req, res, next) => {
  try {
    const users = await User.find({});
    if (!users) return next(errorHandler(404, "empty users"));
    return res.status(200).json(users);
  } catch (err) {
    next();
  }
};
