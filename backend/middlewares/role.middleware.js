
import { errorHandler } from "../utils/error.js";

export const authenticateEmployer = async (req, _, next) => {
  try {
    const role = req.user?.role;
    if(!role) {
        return next(errorHandler(401, "Please assign a role"))
    }
    if (role !== "employer") {
      return next(errorHandler(401, "you are not a employer"));
    }
    next();
  } catch (err) {
    next(err);
  }
};
