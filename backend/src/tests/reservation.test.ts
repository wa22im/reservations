import mongoose from 'mongoose';
import request from 'supertest';
import App from '../app';
import { CreateReservationValidator } from '../objectValditors/reservationValidator';
import ReservationRoute from '../routes/reservationsRoute'
describe('Testing reservations', () => {
    describe('[GET] /reservations', () => {
      it('response fineAll reservations', async () => {
        const reservationRoute = new ReservationRoute();
        const reservations = reservationRoute.reservationController.reservationService.reservation;
  
        reservations.find = jest.fn().mockReturnValue([
          {
            _id: 'qpwoeiruty',
            name: 'Reservation 1',
            store: 'Store 1',
            status:'To do'
          },
          {
            _id: 'qpwoeiruty',
            name: 'Reservation 2',
            store: 'Store 2',
            status:'To do'
          },
          {
            _id: 'qpwoeiruty',
            name: 'Reservation 3',
            store: 'Store 3',
            status:'To do'
          },
        ]);
  
        mongoose .connect = jest.fn();
        const app =   new App([reservationRoute]);
        return request(app.getServer()).get(`${reservationRoute.path}`).expect(200);
      });
    });
  

    describe('[POST] /reservations', () => {
      it('response Create reservation', async () => {
        const reservationData: CreateReservationValidator = {
            name: 'Reservation 3',
            store: 'Store 3',
            status:'Todo'
        };
  
        const reservationRoute = new ReservationRoute();
        const reservations = reservationRoute.reservationController.reservationService.reservation;
  
  
        reservations.findOne = jest.fn().mockReturnValue(null);
        reservations.create = jest.fn().mockReturnValue({
          _id: '60706478aad6c9ad19a31c84',
          ...reservationData
        });
  
        (mongoose as any).connect = jest.fn();
        const app = new App([reservationRoute]);
        return request(app.getServer()).post(`${reservationRoute.path}`,).send(reservationData).expect(201);
      });
    });
  
  
    describe('[DELETE] /reservations/:id', () => {
      it('response Delete reservation', async () => {
        const reservationId = '60706478aad6c9ad19a31c84';
  
        const reservationRoute = new ReservationRoute();
        const reservations = reservationRoute.reservationController.reservationService.reservation;
  
        reservations.findByIdAndDelete = jest.fn().mockReturnValue({
          _id: '60706478aad6c9ad19a31c84',
          name: 'Reservation 3',
            store: 'Store 3',
            status:'To do'
        });
  
        (mongoose as any).connect = jest.fn();
        const app = new App([reservationRoute]);
        return request(app.getServer()).delete(`${reservationRoute.path}/${reservationId}`).expect(200);
      });
    });
  });