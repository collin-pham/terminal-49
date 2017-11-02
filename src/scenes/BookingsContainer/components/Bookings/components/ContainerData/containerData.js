import React from 'react'
import './containerData.css'

export default class ContainerData extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {containerNumber: Object.keys(this.props)[0]}
  }

  render() {
    return (
      <div className='containers'>
        <div className='containerNumber'>
          <div className='containerTitle'>
            Container Number
          </div>
          <div className='containerData'>
            {Object.keys(this.props)[0]}
          </div>
        </div>
        <div className='containerSizeAndType'>
          <div className='containerTitle'>
            Size And Type
          </div>
          <div className='containerData'>
            {this.props[Object.keys(this.props)[0]].sizeAndType}
          </div>
        </div>
      </div>
    )
  }
}