import React from 'react'
import BookingData from './components/BookingData/bookingData'
import ContainerData from './components/ContainerData/containerData'
import Loading from '../../../../components/Loading/loading'

import './bookings.css'
export default class Bookings extends React.Component {
  constructor(props) {
    super(props)
    this.state = {loading:true, error: false}
  }
  componentWillMount () {
    // Extract bookingNumber from path
    this.state.bookingNumber = this.props.location.pathname.replace('/bookings/', '').replace('PABV', '')

    // For now, we will assume out shipping comany is PIL. 
    this.state.steamshipLine = 'PIL'

    // Query Backend
    const ocean49URL = 'https://ocean-49.herokuapp.com/search'
    const payload = {
      bookingNumber: this.state.bookingNumber,
      steamshipLine: this.state.steamshipLine
    }
    fetch(ocean49URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept-Language': 'en_US'
      },
      body: JSON.stringify(payload)
    })
    .then((res) => res.text())
    .then((res) => {
      this.state = JSON.parse(res)
      console.log(this.state)
      this.state.loading = false
      this.setState(this.state)
      
    })
    .catch((err) => {
      this.state.loading = false
      this.state.error = true
      this.setState(this.state)
    })
  }


  render() {
    const error = (
      <div className='error'>
        Error loading data. Please make sure you entered a valid booking and shipping number
      </div>)
    let html = (this.state.loading 
      ? 
      <Loading/> 
      : 
      (
      <div>
        <h4>Booking Information</h4>
        <BookingData {...this.state}/>
        <div>
          <h4>Container Information</h4>
          {this.state.error ? '' : this.state.containers.map((e, i) => <ContainerData key={i} {...e}/>)}
        </div>
      </div>
      ))
    return (
      <div>
        {this.state.error ? error : html}
      </div>
      )
  }
}