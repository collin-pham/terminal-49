import React from 'react'

import './loading.css'

export default class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <img src={require('../../assets/logo.png')} alt='logo'></img>
        <div>
          loading
        </div>
      </div>
      )
  }
}