import { Router } from 'express';
import { Routes } from '@/interfaces/routesInterface';
import validationMiddleware from '@/middlewares/validationMiddleware';
import ReservationsController from '@/controllers/reservationController';
import { CreateReservationValidator } from '@/objectValditors/reservationValidator';

class ReservationRoute implements Routes {
  public path = '/reservations';
  public router = Router();
  public reservationController = new ReservationsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.reservationController.getReservations);
    this.router.post(`${this.path}`, validationMiddleware(CreateReservationValidator, 'body'), this.reservationController.createReservation);
    this.router.delete(`${this.path}/:id`, this.reservationController.deleteReservation);

  }
}

export default ReservationRoute;
