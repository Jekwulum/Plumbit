import { Router, Response } from "express";
import authRoutes from './auth.routes';
import inventoryRoutes from './inventory.routes';
import notificationRoutes from './notification.routes';
import reservationRoutes from './reservation.routes';
import userRoutes from './user.routes';

const router = Router();

router.get('/healthcheck', (_, res: Response) => res.sendStatus(200));
router.use('/auth', authRoutes);
router.use('/inventory', inventoryRoutes);
router.use('/notifications', notificationRoutes);
router.use('/reservations', reservationRoutes);
router.use('/users', userRoutes);

export default router;