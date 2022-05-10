import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Typography } from '@mui/material'

const classes = {
  appBar: {
    borderRadius: '15px',
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 50px',
  } as React.CSSProperties,
  heading: {
    color: 'rgba(0,183,255, 1)',
    textDecoration: 'none',
  } as React.CSSProperties,
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  } as React.CSSProperties,
}
export const Navbar: React.FC = () => {
  console.log(classes)
  return (
    <AppBar style={classes.appBar} position="static" color="inherit">
      <div style={classes.brandContainer}>
        <Typography
          style={classes.heading}

          component={Link}
          to="/"
          variant="h2"
          align="center"
        >
          Reservations
        </Typography>
      </div>

    </AppBar>
  )
}