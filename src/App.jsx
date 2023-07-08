import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Add from './pages/Add';
import Main from './pages/Main';
import Login from './pages/Login';
import { Logout } from './pages/Logout';
import Edit from './pages/Edit';

import './assets/css/reset.css'
import './assets/css/style.scss'

const App = () => {
  return (
    <div id='wrap'>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/add' element={<Add />} />
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='/edit'>
            <Route path=':editID' element={<Edit />} />
          </Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;