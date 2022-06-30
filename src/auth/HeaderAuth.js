import React from 'react';
import { Link } from 'react-router-dom';
import "./HeaderAuth.scss"

class Header extends React.Component {
  
constructor(props){   
  super(props)
  this.state = {
  }
}
  
render () {
  return (
    <div className="align-header top-container navbar-fixed-header"> 
      <nav className=" navbar default-layout-navbar col-lg-12 col-12 p-0  d-flex flex-row">
        <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
          <Link className="navbar-brand brand-logo" to="/"><img src={require('../assets/images/chorus-rgb.png')} style={{height: "46px",float: "left"}} alt="logo" /></Link>
          <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../assets/images/Chorus_App_Bug_Favicon.png')} style={{height: "23px"}} alt="logo" /></Link>
        </div>
      </nav>
    </div>
  );
}
}

export default Header;
