import { Button, FormControl, Grid, Paper, TextField, Typography, Select, MenuItem, RadioGroup, FormControlLabel, Radio, LinearProgress } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { createReservation } from '../../features/reservations/reservationsAction'
import { useHistory } from 'react-router-dom'

const styles = {
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        margin: '10px',

    } as React.CSSProperties,
    fileInput: {
        width: '97%',
        margin: '10px 0',
    } as React.CSSProperties,

}
const storeNames: string[] = ['FUTURE', 'Fashion 101', 'Galaxy']
const Form: React.FC = () => {
    const history = useHistory()
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false)
    const [reservationName, setReservationName] = useState('');
    const [store, setStore] = useState('FUTURE');
    const [status, setStatus] = useState<'Todo' | 'In progress' | 'Ready' | ''>('');
    const handleStatusChange = (event: any) => {
        setStatus(event.target.value);

    }
    const handleSubmit = (event: any) => {
        setIsLoading(true)
        event.preventDefault()
        if (status === '') {
            setIsLoading(false)
            return
        }
        if (reservationName === '') {
            setIsLoading(false)
            return
        }
        dispatch(createReservation({ name: reservationName, status, store }))
        setTimeout(() => { history.push("/") }, 1500)
    }
    const handleStoreNameChange = (event: any) => {
        setStore(event.target.value as string);
    };


    return (
        <  >
            <form autoComplete="off" noValidate style={styles.form} onSubmit={handleSubmit}>

                <FormControl fullWidth>
                    <Typography variant="subtitle1">Reservation name</Typography>
                    <TextField name="reservationName" variant="outlined" label="Reservation name" fullWidth value={reservationName} onChange={(e) => setReservationName(e.target.value)} />
                </FormControl>
                <FormControl fullWidth>
                    <Typography variant="subtitle1">Store</Typography>
                    <Select
                        id="demo-simple-select"
                        value={store}
                        label="Store"
                        onChange={handleStoreNameChange}
                    >{storeNames.map((storeName, index) => (
                        <MenuItem key={index} value={storeName}>{storeName}</MenuItem>

                    ))}

                    </Select>
                </FormControl>
                <FormControl>
                    <Typography variant="subtitle1">Status</Typography>
                    <RadioGroup
                        value={status}
                        onChange={handleStatusChange}
                    >
                        <FormControlLabel value="Todo" control={<Radio />} label="Todo" />
                        <FormControlLabel value="In progress" control={<Radio />} label="In progress" />
                        <FormControlLabel value="Ready" control={<Radio />} label="Ready" />

                    </RadioGroup>
                </FormControl>
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="flex-end"
                    spacing={5}
                    style={{ marginBottom: "10px" }}
                >
                    <Grid item >
                        <Button disabled={isLoading} variant="contained" color="inherit" size="large" onClick={() => { history.push("/") }} >Cancel</Button>
                    </Grid>
                    <Grid item>

                        <Button disabled={isLoading} variant="contained" color="success" size="large" type="submit"  >Submit</Button>
                    </Grid>

                </Grid>

            </form>
            {isLoading ? <LinearProgress color='primary' value={100} /> : <></>
            }
        </>
    )
}

export default Form