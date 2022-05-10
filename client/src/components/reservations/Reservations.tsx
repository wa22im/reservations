import React from 'react'
import { Button, CircularProgress, Container, Grid, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import { ReservationInterface } from '../../interfaces/reservation';
import { Reservation } from './reservation/Reservation';

export const Reservations: React.FC = () => {
    const reservations = useSelector((state: RootState) => state.reservations);
    const CircularProgressLoader = () => (
        <div style={{
            width: '1%',
            margin: '0 auto'
        }}><CircularProgress /></div>
    )
    return (
        <div >
            {reservations.isLoading ? <CircularProgressLoader />
                :
                <>
                    <Container  >
                        {reservations.reservationsArray.length === 0 ?
                            <Typography variant='h6'  > there is no reservations</Typography>
                            : reservations.reservationsArray.map((reservation: ReservationInterface, index: number) => (
                                <Reservation reservation={reservation} />
                            ))}
                    </Container>
                </>}
        </div>
    )
}