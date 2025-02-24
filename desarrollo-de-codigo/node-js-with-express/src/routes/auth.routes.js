import { Router } from "express";
import AuthController from "../controllers/auth.controller.js";
import verifyToken from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/", AuthController.unprotected);
router.post("/login", AuthController.login);
router.get("/protected", verifyToken, AuthController.protected);

export default router;