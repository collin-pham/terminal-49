import React from 'react'
import { Link } from 'react-router'
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Link to='/'>
          <img src={require('../../../../assets/logo.png')} alt='logo'></img>
          <div className='headerTitle'>
            Terminal 49
          </div>
        </Link>
      </header> 
    )
  }
}