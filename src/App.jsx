import React from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Add from './components/Add';
import Login from './components/Login';
import { BookProvider } from './contexts/BookContext';
const AppProvider = ({ contexts, children }) => contexts.reduce(
  (prev, context) => React.createElement(context, {
    children: prev
  }),
  children
);
const App = () => {
  return (
    <div id='wrap'>
      <BrowserRouter>
        <AppProvider contexts={[BookProvider]}>
          <Header />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/add' element={<Add />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;