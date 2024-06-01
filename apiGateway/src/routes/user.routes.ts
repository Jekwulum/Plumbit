import { Router } from "express";
import UserController from "../controllers/user.controller";
import validateResource from "../validators/validateResource";
import UserValidator from "../validators/user.validator";
import validateJWT from "../utils/validate.jwt";

const router = Router();
router.use(validateJWT);
router.get('/', UserController.GetUsers);
router.get('/profile', UserController.GetUser);
router.get('/:id', validateResource(UserValidator.getUser), UserController.GetUser);
router.patch('/:id', validateResource(UserValidator.updateUser), UserController.UpdateUser);
router.delete('/:id', validateResource(UserValidator.deleteUser), UserController.DeleteUser);



export default router;