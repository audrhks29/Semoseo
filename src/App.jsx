import React from 'react';

import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Add from './components/Add';
import Login from './components/Login';
import { BookProvider } from './contexts/BookContext';
import { LoginProvider } from './contexts/LoginContext';
import { Logout } from './components/Logout';
import Edit from './components/edit';

const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);

const App = () => {
  return (
    <div id='wrap'>
      <HashRouter>
        <AppProvider contexts={[BookProvider, LoginProvider]}>
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
        </AppProvider>
      </HashRouter>
    </div>
  );
};

export default App;