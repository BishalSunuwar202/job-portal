import { validationResult, body } from "express-validator";
// can be reused by many routes

// sequential processing, stops running validations chain if the previous one fails.
const validate = (validations) => {
  return async (req, res, next) => {
    for (let validation of validations) {
      const result = await validation.run(req);
      if (result.errors.length) break;
    }

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ errors: errors.array() });
  };
};

export const singup_validator = validate([
  body("username")
    .exists()
    .withMessage("Username is required")
    .isLength({ min: 3 })
    .withMessage("Username should be at least 3 character long"),
  body("mobileNumber")
    .exists()
    .isMobilePhone()
    .withMessage("Nepal Phone number is invalid"),

  body("email")
    .isEmail()
    .withMessage("Email is invalid")
    .exists()
    .withMessage("Email is required"),
  body("password").exists().isLength({ min: 2 }),
]);

export const login_validator = validate([
  body("email").exists().isEmail().withMessage("valid email address"),
  body("password").exists().isLength({ min: 1 }).withMessage("min 5"),
]);
