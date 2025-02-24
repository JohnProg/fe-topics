import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";
import { loginValidator } from "../validators/login.validation.js";

class AuthController {
  static unprotected(req, res) {
    return res.status(StatusCodes.OK).json({ message: "Hello World" });
  }

  static login(req, res) {
    try {
      const {
        error,
        value: { username, password },
      } = loginValidator.validate(req.body);

      if (error) {
        return res
          .status(StatusCodes.BAD_REQUEST)
          .json({ error: error.details[0].message });
      }

      if (username === "admin" && password === "123") {
        const token = jwt.sign({ username }, process.env.SECRET_KEY, { expiresIn: "1h" });
        
        return res.status(StatusCodes.OK).json({ token });
      } else {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Authentication failed" });
      }
    } catch (error) {
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Internal server error" });
    }
  }

  static protected(req, res) {
    return res.status(StatusCodes.OK).json({ message: "You have access" });
  }
}

export default AuthController;
