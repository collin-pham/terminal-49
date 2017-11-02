import React from 'react'
import { Link } from 'react-router'

// Display this on invalid route
export default class InvalidRoute extends React.Component {
  render() {
    return(
      <div>
        <div>
        Oops! Looks like this route doesn't exists.
        </div>
        <div>
          <Link to='/'> Ship me back to the homepage!</Link>
        </div>
      </div>
      )
  }
}