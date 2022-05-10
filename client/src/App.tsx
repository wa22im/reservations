import { Container } from '@mui/material'
import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Form from './components/form/Form'

import { Navbar } from './components/Navbar/Navbar'
import { CreateReservation } from './pages/CreateReservation'
import { Home } from './pages/Home'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/createreservation" component={CreateReservation} />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
