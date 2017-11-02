import React from 'react'
import { browserHistory } from 'react-router'
import './searchbar.css'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentWillMount () {
    this.state.bookingNumber = this.props.bookingNumber || ''
    this.state.steamshipLine = this.props.steamshipLine || ''
    this.setState(this.state)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  searchByBookingNumberAndShippingLine() { 
    if (this.state.bookingNumber == undefined) {
      console.log('error') 
      return
    }
    if (this.state.steamshipLine == undefined) {
      console.log('error') 
      return
    }
    // redirect based on search input
    browserHistory.push(`/bookings/${this.state.bookingNumber}`)
    window.location.reload()
  }
  render() {
    return (
      <div className='container'>
        <div className='searchbar'>
          <div className='bookingNumber'>
            <input 
              name='bookingNumber'
              placeholder='Booking Number'
              value={this.state.bookingNumber}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>

          <div className='steamshipLine'>
            <input 
              name='steamshipLine'
              placeholder='Steamship Line' 
              value={this.state.steamshipLine}
              onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='search' onClick={this.searchByBookingNumberAndShippingLine.bind(this)}>
            <img src={require('../../assets/logo.png')} alt='logo'></img>
          </div>
        </div>
      </div>
      )
  }
}