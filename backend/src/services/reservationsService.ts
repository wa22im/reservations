import { CreateReservationValidator } from '@/objectValditors/reservationValidator';
import { HttpException } from '@exceptions/HttpException';
import { Reservation } from '@/interfaces/reservationInterface';
import reservationModel from '@models/reservation.model';
import { isEmpty } from '@utils/util';



class ReservationsService {
    public reservation = reservationModel;
  
    public async findAllReservation(): Promise<Reservation[]> {
        try{
      const reservations: Reservation[] = await this.reservation.find();
      return reservations;  
    } 
    catch(error){
        throw new HttpException(500,'error while getting all reservations')
    }  
    
}

public async createReservation(reservationData: CreateReservationValidator): Promise<Reservation> {
    if (isEmpty(reservationData)) throw new HttpException(400, "Please provide the reservation data");
try
  {  const createReservationData: Reservation = await this.reservation.create({ ...reservationData});

    return createReservationData;
  }
  catch(error){
    throw new HttpException(500,'error while creating a reservation')
} }

public async deleteReservation(reservationId: string): Promise<Reservation> {
  const deleteReservationById: Reservation = await this.reservation.findByIdAndDelete(reservationId);
  if (!deleteReservationById) throw new HttpException(400, "Error when deleting the reservation, make sure you send the right id");

  return deleteReservationById;
}

}   


export default ReservationsService;
