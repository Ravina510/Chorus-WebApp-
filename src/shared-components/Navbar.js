import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link,useLocation,useNavigate } from 'react-router-dom';
import "./Navbar.scss"
import TelemetryApiData from '../dashboard/services/telemetryApiData'
import {AmplifySignOut} from '@aws-amplify/ui-react';
import { Auth,userHasAuthenticated } from 'aws-amplify';

var navigationToLogin;

class Navbar extends React.Component {
  
    toggleOffcanvas() {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    }
  
    constructor(props){   
        super(props)
        this.state = {
            userProfileDataState: [],
            userNameState: [],
            tenantNameState: []
        }
    }

    async getLoggedInUserProfile () {
      try{
         await TelemetryApiData.getCurrentUser().then((userProfileData) => {
          console.log("user profile data: ",userProfileData);
          this.setState({userProfileDataState:userProfileData});
          this.setState({tenantNameState:userProfileData.signInUserSession.accessToken.payload['cognito:groups'][0]});
          this.setState({userNameState:userProfileData.username});
        });
      } catch(err){
        console.log('error on getLoggedInUserProfile:: ',err);
      }
    }

    async signOut() {
      try {
          await Auth.signOut();
          //userHasAuthenticated(false);
          //window.location.reload(true);
          //navigationToLogin("/");
      } catch (error) {
          console.log('error signing out: ', error);
      }
    }
  
    componentDidMount(){
      this.getLoggedInUserProfile();
      navigationToLogin = this.props.navigation;
    }
  
    render () {
        return (
      <div className="top-container navbar-fixed-header"> 
        <nav className=" navbar default-layout-navbar col-lg-12 col-12 p-0  d-flex flex-row">
          <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <Link className="navbar-brand brand-logo" to="/"><img src={require('../assets/images/chorus-rgb.png')} style={{height: "46px",float: "left"}} alt="logo" /></Link>
            <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../assets/images/Chorus_App_Bug_Favicon.png')} style={{height: "23px"}} alt="logo" /></Link>
          </div>
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <ul className="navbar-nav navbar-nav-right">   
                <li className="nav-item nav-profile nav-language">
                  <Dropdown >
                    <Dropdown.Toggle className="nav-link count-indicator">
                    <div className="nav-profile-text">
                          <p className="mb-1 text-black">{this.state.userNameState}</p>
                          {this.state.tenantNameState === 'org2_admin' ? '[ R&D ]'
                              : [this.state.tenantNameState] } 
                          {/* <p className="mb-1 text-black">[{this.state.tenantNameState}]</p> */}
                      </div> &nbsp;&nbsp;
                      <div className="nav-profile-img">
                          <img src={require("../assets/images/faces/face1.jpg")} alt="profile" />
                        </div>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="preview-list navbar-dropdown">
                     
                      <div className="p-2">
                        <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Profile</span>
                          <span className="p-0">
                            <span className="badge badge-success">1</span>
                            <i className="mdi mdi-account-outline ml-1"></i>
                          </span>
                        </Dropdown.Item>
                        <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span>Settings</span>
                          <i className="mdi mdi-cog-outline"></i>
                        </Dropdown.Item>
                        <div role="separator" className="dropdown-divider"></div>
                          <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt =>evt.preventDefault()}>
                          <span onClick={this.signOut}>Log Out</span>
                          <i className="mdi mdi-logout ml-1" onClick={this.signOut}></i>
                        </Dropdown.Item>
                      </div>
                    </Dropdown.Menu>
                  </Dropdown>
                </li>
                {/* <li>
                   <div className="alignSignoutBtn">
                     <AmplifySignOut/>
                   </div>
                </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default function RootFunction (){
  const navigation = useNavigate(); // extract navigation prop here
  const location = useLocation();
  return <Navbar navigation={navigation} location={location} /> //pass to your component.
}
