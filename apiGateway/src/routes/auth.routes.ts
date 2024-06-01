import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import validateResource from "../validators/validateResource";
import AuthValidator from "../validators/auth.validator";
import validateJWT from "../utils/validate.jwt";

const router = Router();
router.post('/signup', validateResource(AuthValidator.registerUser), AuthController.RegisterUser);
router.post('/login', validateResource(AuthValidator.loginUser), AuthController.LoginUser);
router.post('/update-password', validateJWT, validateResource(AuthValidator.updatePassword), AuthController.UpdatePassword);





export default router;