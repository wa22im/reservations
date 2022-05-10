import { NextFunction, Request, Response } from 'express';

import ReservationsService from '@/services/reservationsService';
import { Reservation } from '@/interfaces/reservationInterface';
import { CreateReservationValidator } from '@/objectValditors/reservationValidator';

class ReservationsController {
  public reservationService = new ReservationsService();

  public getReservations = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllReservationsData: Reservation[] = await this.reservationService.findAllReservation();

      res.status(200).json({ data: findAllReservationsData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };


  public createReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationData: CreateReservationValidator = req.body;
      const createReservationData: Reservation = await this.reservationService.createReservation(reservationData);

      res.status(201).json({ data: createReservationData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public deleteReservation = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const reservationId: string = req.params.id;
      const deleteReservationData: Reservation = await this.reservationService.deleteReservation(reservationId);

      res.status(200).json({ data: deleteReservationData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default ReservationsController;
