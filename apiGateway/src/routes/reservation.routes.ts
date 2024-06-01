import { Router } from "express";
import validateJWT from "../utils/validate.jwt";
import ReservationController from "../controllers/reservation.controller";
import ReservationValidator from "../validators/reservation.validator";
import validateResource from "../validators/validateResource";

const router = Router();
router.use(validateJWT);

router.get('/', validateResource(ReservationValidator.getReservations), ReservationController.GetReservations);
router.get('/:id', validateResource(ReservationValidator.getReservation), ReservationController.GetReservation);
router.post('/', validateResource(ReservationValidator.createReservation), ReservationController.CreateReservation);
router.put('/:id', validateResource(ReservationValidator.updateReservation), ReservationController.UpdateReservation);
router.delete('/:id', validateResource(ReservationValidator.deleteReservation), ReservationController.DeleteReservation);

export default router;