import './App.scss';
import {
  Routes,Router,
  Route,
  useLocation
} from 'react-router-dom';
import  {Suspense} from 'react';
import Dashboard from './dashboard/dashboard';

import Devices from './devices/devices';
import DeviceEventReports from './reports/DeviceEventsReports';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import Sidebar from "./shared-components/Sidebar";
import Navbar from "./shared-components/Navbar";
import styled from "styled-components";
import Spinner from './shared-components/Spinner';
import { withAuthenticator} from '@aws-amplify/ui-react';
import { IntlProvider } from 'react-intl';
import messages from './shared-components/Sidebar/messages';
import React, { useState } from 'react';
import  Header  from "./auth/HeaderAuth";
import  Footer  from "./shared-components/Footer";
import { SignInHeader } from "./auth/SignInHeader";
import { SignInFooter } from "./auth/SignInFooter";

Amplify.configure(awsconfig);

const Pages = styled.div`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-left: 7rem;
  margin-right: 1rem;
  margin-bottom: 4rem;
`;

export function App() {
  const [locale, setLocale] = useState('en');
  const location = useLocation();
  console.log('loc:: ',location);
  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <div>
        <div className="App" style={{"position":"relative"}}>
        <Navbar />
            <Sidebar />
              <Pages>
                <Suspense fallback={<Spinner/>}>    
                  <Routes location={location} key={location.pathname}>
                            <Route exact path='/' element={< Devices />}></Route>
                            <Route  path='/single-device' element={< Dashboard />}></Route>                          
                            <Route  path='/device-events-report' element={< DeviceEventReports />}></Route>
                  </Routes>
                </Suspense>
              </Pages>
        </div>
            <Footer/>
      </div>
    </IntlProvider>
  );
}

//export default withAuthenticator(App);

export default withAuthenticator(App, {
  components: {
    Header,
    SignIn: {
      Header: SignInHeader,
      Footer: SignInFooter
    },
    Footer
  }
});
