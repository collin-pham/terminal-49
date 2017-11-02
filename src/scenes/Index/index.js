import React from 'react'
import SearchBar from '../../components/SearchBar/searchbar'

import './index.css'

export default class Index extends React.Component {
  render() {
    return (
      <div className='indexContainer'>
        <div className='indexImageContainer'>
          <img className='indexImage' src='http://shipmanagementinternational.com/wp-content/uploads/2014/12/Khalifa-Port-Container-Terminal.jpg'></img>
        </div>
        <div className='index'>
          <h3> Search and Track Containers Instantly</h3>
          <div className='searchbarContainer'>
            <SearchBar/>
          </div>
        </div>
      </div>
      )
  }
}