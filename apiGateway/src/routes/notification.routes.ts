import { Router } from "express";
import validateJWT from "../utils/validate.jwt";
import NotificationController from "../controllers/notification.controller";
import NotificationValidator from "../validators/notification.validator";
import validateResource from "../validators/validateResource";

const router = Router();
router.use(validateJWT);

router.post('/', validateResource(NotificationValidator.CreateNotification), NotificationController.CreateNotification);
router.get('/', NotificationController.GetNotifications);
router.get('/:id', validateResource(NotificationValidator.GetNotification), NotificationController.GetNotification);
router.get('/receiver/:id', validateResource(NotificationValidator.GetNotification), NotificationController.GetNotifications);
router.patch('/:id', validateResource(NotificationValidator.GetNotification), NotificationController.UpdateNotification);
router.delete('/:id', validateResource(NotificationValidator.GetNotification), NotificationController.DeleteNotification);

export default router;