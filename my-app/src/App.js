import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../src/subin/main/Header';
import Main from '../src/subin/main/Main';
import Login from './subin/login/login';
import Subscribe from './subin/membership/subscribe';
import CommunityPage from './mideum/pages/CommunityPage';
import DietRecordsPage from './mideum/pages/DietRecordsPage';
import Insert from './subin/insert/insert';

import './App.css';

function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/header" element={<Header />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/DietRecordsPage" element={<DietRecordsPage />} />
          <Route path="/insert" element={<Insert />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
