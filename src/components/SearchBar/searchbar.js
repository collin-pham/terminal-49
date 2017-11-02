import React from 'react'
import { browserHistory } from 'react-router'
import './searchbar.css'

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {error: false}
  }
  componentWillMount () {
    // Init state
    this.state.bookingNumber = this.props.bookingNumber || ''
    this.state.steamshipLine = this.props.steamshipLine || ''
    this.setState(this.state)
  }
  handleChange(event) {
    this.state.error = false
    this.setState({
      [event.target.name]:event.target.value
    })
  }
  searchByBookingNumberAndShippingLine() { 
    console.log(this.state)
    if (!this.state.bookingNumber) {
      this.state.error = true
      this.setState(this.state)
      return
    }
    if (!this.state.steamshipLine) {
      this.state.error = true
      this.setState(this.state)
      return
    }
    // redirect based on search input
    browserHistory.push(`/bookings/${this.state.bookingNumber}`)
    // force reload
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
          <div className='searchError'>
            {this.state.error ? 'invalid input' : ''}
          </div>
        </div>
      </div>
      )
  }
}