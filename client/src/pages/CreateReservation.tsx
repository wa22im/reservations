import { Paper, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import Form from '../components/form/Form'

export const CreateReservation: React.FC = () => {

  return (
    <Fragment>
      <Paper  >
        <Typography variant="h6">Create Reservation</Typography>
        <Form />
      </Paper>
    </Fragment>
  )
}
