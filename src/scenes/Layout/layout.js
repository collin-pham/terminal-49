import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'

import './layout.css'

export default class Layout extends React.Component {
  render() {
    return (
      <div className='layout'>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
      )
  }
}