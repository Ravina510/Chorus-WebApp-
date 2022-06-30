import React, { Component } from 'react';
import "./Footer.scss"

class Footer extends Component {
  render () {
    return (
      <div className="fixed-bottom  navbar-fixed-bottom" style={{"backgroundColor":"white"}}>
        <div className="container-footer text-center">
          <p className="text-muted credit " style={{fontSize:"1.5vh"}}>All rights reserved © Copyright Chorus LLC 2022
            
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
