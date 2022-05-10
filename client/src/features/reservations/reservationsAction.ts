import { CreateReservationInterface, ReservationInterface } from "../../interfaces/reservation";
import { CREATE_RESERVATION, DELETE_RESERVATION, GET_RESERVATIONS, START_LOADING } from "./actionTypes";
import * as reservationApi from '../../services/reservactionsService'
export const createReservation = (reservation: CreateReservationInterface) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const data = await reservationApi.createReservation(reservation);
        dispatch({ type: CREATE_RESERVATION, payload: data });
    } catch (error) {

    }
};

export const fetchAllReservations = () => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        const data = await reservationApi.getAllReservations();
        dispatch({ type: GET_RESERVATIONS, payload: data as ReservationInterface[] });
    } catch (error) {
        dispatch({ type: GET_RESERVATIONS, payload: [] });
    }
};

export const deleteReservation = (reservationId: string) => async (dispatch: any) => {
    try {
        dispatch({ type: START_LOADING })
        await reservationApi.deleteReservationById(reservationId);

        dispatch({ type: DELETE_RESERVATION, payload: { reservationId } });
    } catch (error) {

    }
};