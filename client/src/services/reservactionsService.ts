import axios from 'axios'
import { CreateReservationInterface, ReservationInterface } from '../interfaces/reservation'


const RESERVATIONS_CLIENT = axios.create({ baseURL: 'http://localhost:8080/reservations' })

export const createReservation = async (reservation: CreateReservationInterface): Promise<void> => {
    await RESERVATIONS_CLIENT.post('/', reservation)
}

export const getAllReservations = async (): Promise<ReservationInterface[]> => {
    return await RESERVATIONS_CLIENT.get('/').then(res => res.data.data).catch((err: any) => { console.log("error") })
}

export const deleteReservationById = async (reservationId: string): Promise<void> => {
    await RESERVATIONS_CLIENT.delete(`/${reservationId} `).catch(error => { console.log("error while deleting reservation") })

}