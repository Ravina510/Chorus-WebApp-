import React from 'react';
import { useIntl } from 'react-intl';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import sidebarBg from '../../assets/images/Chorus_App_Bug_Favicon.png';
import Switch from 'react-switch';
import { Link } from 'react-router-dom';
import { Auth } from 'aws-amplify';
import { useNavigate  } from "react-router-dom";

const Aside = ({ image, collapsed, rtl, toggled, handleToggleSidebar,handleCollapsedChange }) => {
  const intl = useIntl();
  var collapsed= collapsed;
  const navigation = useNavigate();
  async function signOut() {
    try {
        await Auth.signOut();
        //navigation('/');
        //userHasAuthenticated(false);
        //window.location.reload(true);
    } catch (error) {
        console.log('error signing out: ', error);
    }
  }
  return (
    <ProSidebar
      image={image ? sidebarBg : false}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
    >
      <SidebarHeader>
      <div className="block ">
        <Switch
          height={16}
          width={30}
          checkedIcon={false}
          uncheckedIcon={false}
          onChange={handleCollapsedChange}
          checked={collapsed}
          onColor="#219de9"
          offColor="#bbbbbb"
        />
        {/* <span> {intl.formatMessage({ id: 'collapsed' })}</span> */}
      </div>
        <div
        
          style={{
            padding: '12px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          {/* {intl.formatMessage({ id: 'sidebarTitle' })} */}
        </div>
       
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <SubMenu
            icon={<i className="mdi mdi-9px mdi-monitor-dashboard icon-md"></i>}
            
            title={intl.formatMessage({ id: 'dashboard' })}
          >
          
            <MenuItem>{intl.formatMessage({ id: 'fleet' })} <Link to="/" /></MenuItem>
            <MenuItem>{intl.formatMessage({ id: 'singleDevice' })} <Link to="/single-device" /></MenuItem>
          </SubMenu>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            icon={<i className="mdi mdi-9px mdi-clipboard-list-outline icon-md"></i>}
            // suffix={<span className="badge red">{intl.formatMessage({ id: 'new' })}</span>}
            title={intl.formatMessage({ id: 'reports' }) }
          >
            <MenuItem>{intl.formatMessage({ id: 'deviceEventReport' })} <Link to="/device-events-report" /></MenuItem>
          </SubMenu>
        </Menu>
      
        <div  style={{bottom: "14rem",position: "absolute",width: "100%",    marginLeft: "5px"}}>
        
        { collapsed  === true ?  <a href="https://chorus-webapp-dev-release-v1.s3.us-east-2.amazonaws.com/Webapp_Dev_060922_Rel_v1_3_0.pdf" target="_blank" className="a-href-highlight-remove">  &nbsp; &nbsp;v1.4.0  <br/><span className="badge yellow"> DEV</span></a>
 :             <a href="https://chorus-webapp-dev-release-v1.s3.us-east-2.amazonaws.com/Webapp_Dev_060922_Rel_v1_3_0.pdf" target="_blank" className="a-href-highlight-remove"> &nbsp;  &nbsp; &nbsp;<img src={require('../../assets/images/Chorus_App_Bug_Favicon.png')} style={{height: "23px"}} alt="logo" /> &nbsp; CHORUS Web v1.4.0  <span className="badge yellow">DEV</span></a> } 


  
        </div>  
        <div  style={{bottom: "8rem",position: "absolute",marginLeft: "5px"}}>     
          { collapsed  === true ?  <Menu iconShape="circle">               
              <MenuItem>
                {<i className="mdi mdi-9px mdi-help-circle-outline icon-md"></i>} <Link to="/" />
                </MenuItem>
                </Menu>
              :      
              <Menu iconShape="circle">               
              <MenuItem>
                {<i className="mdi mdi-9px mdi-help-circle-outline icon-md"></i>} &nbsp;&nbsp;{intl.formatMessage({ id: 'Help' }) } <Link to="/" />
                </MenuItem>
                </Menu>
           }  
         
        </div>  
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
            marginBottom: '2.3rem'
          }}
        >
          <a
            href="#"
            onClick={signOut}
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <i className="mdi mdi-9px mdi-logout icon-md"></i>
            <span style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
              {intl.formatMessage({ id: 'viewSource' })}
            </span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Aside;
