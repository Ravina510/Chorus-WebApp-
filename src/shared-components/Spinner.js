import React, { Component } from 'react'
import '../assets/styles/components/_spinner.scss';
export class Spinner extends Component {
  render() {
    return (
      <div>
        <div className="spinner-wrapper">
          <div className="donut"></div>
        </div>
      </div>
    )
  }
}

export default Spinner
