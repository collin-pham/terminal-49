import React from 'react'
import { browserHistory } from 'react-router'

import SearchBar from '../../components/SearchBar/searchbar'

import './bookingsContainer.css'
export default class BookingsContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  componentWillMount() {
    if (this.props.location.pathname === '/bookings') {
      browserHistory.push('/')
    }
  }
  render() {
    return (
      <div>
        <div className='searchbarContainer'>
          <SearchBar 
            bookingNumber={this.props.location.pathname.replace('/bookings/', '')} 
            steamshipLine={'PIL'}
            />
        </div>
        {this.props.children}
      </div>
      )
  }
}