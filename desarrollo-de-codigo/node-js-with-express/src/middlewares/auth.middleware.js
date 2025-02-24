import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  const header = req.header("Authorization") || "";
  const token = header.split(" ")[1];

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: "Token not provied" });
  }
  try {
    const payload = jwt.verify(token, process.env.SECRET_KEY);
    req.username = payload.username;
    next();
  } catch (error) {
    return res.status(StatusCodes.FORBIDDEN).json({ message: "Token not valid" });
  }
}
export default verifyToken;
