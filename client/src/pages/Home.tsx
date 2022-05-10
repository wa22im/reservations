import { Button, Divider, Paper } from '@mui/material';
import { margin } from '@mui/system';
import React, { Fragment, useEffect } from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import { Reservations } from '../components/reservations/Reservations';
import { fetchAllReservations } from '../features/reservations/reservationsAction';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  useEffect(() => {
    dispatch(fetchAllReservations())
  }, [dispatch])
  return (
    <Fragment>
      <Reservations />
      <Divider />
      <Button style={{ float: 'right' }} variant="contained" color="success" size="small" onClick={() => { history.push("/createreservation") }} >  Create Reservation</Button>

    </Fragment>
  )
}
