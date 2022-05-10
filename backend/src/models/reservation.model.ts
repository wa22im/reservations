import { model, Schema, Document } from 'mongoose';
import { Reservation } from '@/interfaces/reservationInterface';

const reservationSchema: Schema = new Schema({
    name: {
    type: String,
    required: true,

  },
  store: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const reservationModel = model<Reservation & Document>('Reservations', reservationSchema);

export default reservationModel;
