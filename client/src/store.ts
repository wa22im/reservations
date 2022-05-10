import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import ReservationReducer from './features/reservations/reservationReducer'

import thunk from 'redux-thunk'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({

  reservations: ReservationReducer,
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk))
  /* preloadedState, */
)
export type RootState = ReturnType<typeof rootReducer>

export default store
