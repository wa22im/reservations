import { CREATE_RESERVATION, DELETE_RESERVATION, GET_RESERVATIONS, START_LOADING } from "./actionTypes"
import { ReservationInterface } from '../../interfaces/reservation'
const reservationsArray: ReservationInterface[] = []
const initialState = {
    reservationsArray,
    isLoading: true,

}
export default (state = initialState, action: any) => {
    console.log(action.payload)
    switch (action.type) {
        case START_LOADING:
            return { ...state, isLoading: true }
        case CREATE_RESERVATION:
            return { ...state, isLoading: false, reservations: [...state.reservationsArray, action.payload] }
        case GET_RESERVATIONS:
            return { ...state, isLoading: false, reservationsArray: action.payload }

        case DELETE_RESERVATION:
            return { ...state, isLoading: false, reservationsArray: state.reservationsArray.filter((reservation) => reservation._id !== action.payload.reservationId) }
        default:
            return state
    }
}
