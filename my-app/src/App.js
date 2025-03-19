import React from 'react';
import Header from '../src/subin/main/Header';
// import Footer from '../src/subin/main/Footer'
import Main from '../src/subin/main/Main';
// import Insert from './subin/insert/insert';
// import Login from './subin/login/login';
// import Subscribe from './subin/membership/subscribe';

import './App.css';
import CommunityPage from './mideum/pages/CommunityPage';
import DietRecordsPage from './mideum/pages/DietRecordsPage';


function App() {
  return (
    <div className="appContainer">
      {/* <Subscribe/> */}
      {/* <Main/> */}
      {/* <Login/> */}
      {/* <Insert /> */}
      <CommunityPage /> 
      {/* <DietRecordsPage /> */}
    </div>
  );
}
export default App;

