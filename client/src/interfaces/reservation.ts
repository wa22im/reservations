export interface CreateReservationInterface {
    name: string,
    status: string,
    store: string
}

export interface ReservationInterface extends CreateReservationInterface {
    _id: string
}

