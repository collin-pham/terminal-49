import React from 'react'
import './bookingData.css'
export default class BookingData extends React.Component {
  render() {
    return (
      <div className = 'bookingData'>
        <div className='arrivalData'>
          <div className='title'>
            Arrival Date
          </div>
          <div className='data'>
            {this.props.arrival}
          </div>
        </div>

        <div className='bookingNumberData'>
          <div className='title'>
            Booking Number
          </div>
          <div className='data'>
            {this.props.bookingNumber}
          </div>
        </div>

        <div className='steamshipLineData'>
          <div className='title'>
            Steamship Line
          </div>
          <div className='data'>
            {this.props.steamshipLine}
          </div>
        </div>

        <div className='originData'>
          <div className='title'>
            Origin
          </div>
          <div className='data'>
            {this.props.origin}
          </div>
        </div>

        <div className='destinationData'>
          <div className='title'>
            Destination
          </div>
          <div className='data'>
            {this.props.destination}
          </div>
        </div>

        <div className='vesselData'>
          <div className='title'>
            Vessel
          </div>
          <div className='data'>
            {this.props.vessel}
          </div>
        </div>

        <div className='voyageData'>
          <div className='title'>
            Voyage
          </div>
          <div className='data'>
            {this.props.voyage}
          </div>
        </div>
      </div>

      )
  }
}