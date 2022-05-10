import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import { ReservationInterface } from '../../../interfaces/reservation'
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteReservation } from '../../../features/reservations/reservationsAction'
interface ReservationProps {
    reservation: ReservationInterface
}

const ColorMap = {
    'Todo': 'red',
    'In progress': 'orange',
    'Ready': 'green'
}
export const Reservation: React.FC<ReservationProps> = (props: ReservationProps) => {
    const reservation = props.reservation
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const history = useHistory()
    const dispatch = useDispatch()
    const handleClickOpen = () => {
        setOpenDeleteDialog(true);
    };

    const handleClose = () => {
        setOpenDeleteDialog(false);
    };
    const handleConfirmDelete = () => {
        dispatch(deleteReservation(reservation._id, history))
        handleClose()
    }
    return (
        <div style={{
            marginBottom: '20px'
        }}>
            <Grid
                key={reservation._id}
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center">
                <Grid item xs={5} ><Typography> {reservation.name} </Typography></Grid>
                <Grid item xs={7}><div style={{ display: 'flex', justifyContent: 'flex-end' }}> <Typography color={ColorMap[reservation.status as keyof typeof ColorMap]}> {reservation.status} </Typography>
                    <Button onClick={handleClickOpen} variant="contained" color="error" size="small">Delete</Button></div></Grid>
            </Grid>
            <Divider />
            <Dialog
                open={openDeleteDialog}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Delete reservation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        You are about to delete the reservation '{reservation.name}'. if you process with this action the item will be permantenly deleted
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="error" onClick={handleConfirmDelete}>Delete</Button>
                    <Button onClick={handleClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    )

}