import React from 'react'
import { 
  IndexRoute, 
  Route
} from 'react-router'

import Layout from '../scenes/Layout/layout'
import Index from '../scenes/Index/index'
import BookingsContainer from '../scenes/BookingsContainer/bookingsContainer'
import Bookings from '../scenes/BookingsContainer/components/Bookings/bookings'
import InvalidRoute from '../scenes/InvalidRoute/invalidRoute'

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Index}/>
    <Route path='/bookings' component = {BookingsContainer}>
      <Route path='/bookings/:bookingID' component={Bookings}/>
    </Route>
    <Route path='*' component={InvalidRoute}/>
  </Route>
)

export default routes