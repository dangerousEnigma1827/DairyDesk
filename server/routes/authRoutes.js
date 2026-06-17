import { Router } from "express";
import { signup, login, logout, getMe } from "../controllers/auth.controller.js";
import { authenticate } from "../middleware/auth.middleware.js";
import { signUpSchema, loginSchema } from "../schemas/authSchemas.js";


const router = Router();

router.post("/signup",  signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/me", authenticate, getMe); // protected

export default router;